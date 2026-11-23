import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildOpenapi, detect } from '../src/convert.js';
import { smithyToOpenApi } from '../src/smithy.js';
import { countOperations } from '../src/util.js';

/**
 * A tiny restXml Smithy model exercising the S3 patterns: operations that share
 * a method + path and differ only by literal query, x-id, required query or
 * required header; greedy labels; header/query/payload bindings; errors.
 */
const S = 'com.example#';
const model = {
  smithy: '2.0',
  shapes: {
    [`${S}Store`]: {
      type: 'service',
      version: '2026-01-01',
      operations: [
        { target: `${S}GetThing` },
        { target: `${S}ListParts` },
        { target: `${S}PutThing` },
        { target: `${S}CopyThing` },
        { target: `${S}GetThingAcl` },
        { target: `${S}ListBins` },
        { target: `${S}ListExpressBins` },
      ],
      traits: {
        'aws.api#service': { sdkId: 'Store', endpointPrefix: 'store' },
        'aws.protocols#restXml': {},
        'smithy.api#title': 'Example Store',
        'smithy.api#xmlNamespace': { uri: 'http://example.com/doc/' },
      },
    },
    [`${S}Name`]: { type: 'string' },
    [`${S}Body`]: { type: 'blob', traits: { 'smithy.api#streaming': {} } },
    [`${S}Color`]: { type: 'enum', members: { RED: { target: 'smithy.api#Unit', traits: { 'smithy.api#enumValue': 'red' } } } },
    [`${S}Bin`]: { type: 'structure', members: { Name: { target: `${S}Name` }, Color: { target: `${S}Color` } } },
    [`${S}BinList`]: { type: 'list', member: { target: `${S}Bin`, traits: { 'smithy.api#xmlName': 'Bin' } } },
    [`${S}NoSuchThing`]: { type: 'structure', members: {}, traits: { 'smithy.api#error': 'client', 'smithy.api#httpError': 404 } },
    [`${S}ThingInput`]: {
      type: 'structure',
      members: {
        Bin: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        Key: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        Range: { target: `${S}Name`, traits: { 'smithy.api#httpHeader': 'Range' } },
      },
    },
    [`${S}ThingOutput`]: {
      type: 'structure',
      members: {
        Body: { target: `${S}Body`, traits: { 'smithy.api#httpPayload': {} } },
        ETag: { target: `${S}Name`, traits: { 'smithy.api#httpHeader': 'ETag' } },
      },
    },
    [`${S}ListPartsInput`]: {
      type: 'structure',
      members: {
        Bin: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        Key: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        UploadId: { target: `${S}Name`, traits: { 'smithy.api#httpQuery': 'uploadId', 'smithy.api#required': {} } },
      },
    },
    [`${S}PutInput`]: {
      type: 'structure',
      members: {
        Bin: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        Key: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        Body: { target: `${S}Body`, traits: { 'smithy.api#httpPayload': {} } },
        Meta: { target: `${S}MetaMap`, traits: { 'smithy.api#httpPrefixHeaders': 'x-meta-' } },
      },
    },
    [`${S}MetaMap`]: { type: 'map', key: { target: `${S}Name` }, value: { target: `${S}Name` } },
    [`${S}CopyInput`]: {
      type: 'structure',
      members: {
        Bin: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        Key: { target: `${S}Name`, traits: { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} } },
        Source: { target: `${S}Name`, traits: { 'smithy.api#httpHeader': 'x-copy-source', 'smithy.api#required': {} } },
      },
    },
    [`${S}ListBinsOutput`]: {
      type: 'structure',
      members: { Bins: { target: `${S}BinList` } },
      traits: { 'smithy.api#xmlName': 'ListBinsResult' },
    },
    [`${S}GetThing`]: {
      type: 'operation',
      input: { target: `${S}ThingInput` },
      output: { target: `${S}ThingOutput` },
      errors: [{ target: `${S}NoSuchThing` }],
      traits: { 'smithy.api#http': { method: 'GET', uri: '/{Bin}/{Key+}?x-id=GetThing', code: 200 }, 'smithy.api#documentation': '<p>Get a thing.</p>' },
    },
    [`${S}ListParts`]: {
      type: 'operation',
      input: { target: `${S}ListPartsInput` },
      output: { target: 'smithy.api#Unit' },
      traits: { 'smithy.api#http': { method: 'GET', uri: '/{Bin}/{Key+}?x-id=ListParts', code: 200 } },
    },
    [`${S}PutThing`]: {
      type: 'operation',
      input: { target: `${S}PutInput` },
      traits: { 'smithy.api#http': { method: 'PUT', uri: '/{Bin}/{Key+}?x-id=PutThing', code: 200 } },
    },
    [`${S}CopyThing`]: {
      type: 'operation',
      input: { target: `${S}CopyInput` },
      traits: { 'smithy.api#http': { method: 'PUT', uri: '/{Bin}/{Key+}?x-id=CopyThing', code: 200 } },
    },
    [`${S}GetThingAcl`]: {
      type: 'operation',
      input: { target: `${S}ThingInput` },
      traits: { 'smithy.api#http': { method: 'GET', uri: '/{Bin}/{Key+}?acl', code: 200 } },
    },
    [`${S}ListBins`]: {
      type: 'operation',
      output: { target: `${S}ListBinsOutput` },
      traits: { 'smithy.api#http': { method: 'GET', uri: '/?x-id=ListBins', code: 200 } },
    },
    [`${S}ListExpressBins`]: {
      type: 'operation',
      output: { target: `${S}ListBinsOutput` },
      traits: {
        'smithy.api#http': { method: 'GET', uri: '/?x-id=ListExpressBins', code: 200 },
        'smithy.rules#staticContextParams': { UseS3ExpressControlEndpoint: { value: true } },
      },
    },
  },
};

test('detect recognises a Smithy JSON AST as a converted upstream', () => {
  assert.deepEqual(detect(model, 'json'), { kind: 'smithy', format: 'smithy-2.0', origin: 'converted', ext: 'json' });
  const built = buildOpenapi(model, 'store', 'json');
  assert.equal(built.openapi.info['x-openfn-adaptor'], 'store');
});

test('every service operation converts (no subsetting)', () => {
  const { openapi, warnings } = smithyToOpenApi(model as any, 'store');
  assert.deepEqual(warnings, []);
  assert.equal(countOperations(openapi), 7);
});

test('operations sharing method + path are discriminated by literal query, then required query, then required header', () => {
  const { openapi } = smithyToOpenApi(model as any, 'store');
  const op = (key: string, m: string) => openapi.paths[key]?.[m]?.operationId;
  assert.equal(op('/{Bin}/{Key}', 'get'), 'GetThing', 'x-id is dropped when nothing collides');
  assert.equal(op('/{Bin}/{Key}#uploadId', 'get'), 'ListParts', 'required query param tells ListParts apart');
  assert.equal(op('/{Bin}/{Key}', 'put'), 'PutThing');
  assert.equal(op('/{Bin}/{Key}#x-copy-source', 'put'), 'CopyThing', 'required header tells CopyThing apart');
  assert.equal(op('/{Bin}/{Key}#acl', 'get'), 'GetThingAcl', 'a literal query stays in the key');
  assert.equal(op('/', 'get'), 'ListBins');
  assert.equal(op('/#x-id=ListExpressBins', 'get'), 'ListExpressBins', 'the S3 Express control-plane variant keeps x-id');
});

test('bindings become parameters, headers and bodies', () => {
  const { openapi } = smithyToOpenApi(model as any, 'store');
  const get = openapi.paths['/{Bin}/{Key}'].get;
  const key = get.parameters.find((p: any) => p.name === 'Key');
  assert.equal(key.in, 'path');
  assert.equal(key['x-smithy-greedy'], true);
  assert.equal(get.parameters.find((p: any) => p.name === 'Range').in, 'header');
  assert.equal(get.description, '<p>Get a thing.</p>');
  assert.ok(get.responses['200'].headers.ETag);
  assert.deepEqual(get.responses['200'].content['application/octet-stream'].schema, { type: 'string', format: 'binary' });
  assert.ok(get.responses['404'].content['application/xml'].schema.$ref.endsWith('/NoSuchThing'));

  const put = openapi.paths['/{Bin}/{Key}'].put;
  assert.ok(put.requestBody.content['application/octet-stream']);
  assert.deepEqual(put['x-smithy-prefix-headers'], ['x-meta-']);

  const acl = openapi.paths['/{Bin}/{Key}#acl'].get;
  const lit = acl.parameters.find((p: any) => p.name === 'acl');
  assert.equal(lit.in, 'query');
  assert.equal(lit.required, true);

  const list = openapi.paths['/'].get;
  assert.ok(list.responses['200'].content['application/xml'].schema.$ref.endsWith('/ListBinsOutput'));
  const out = openapi.components.schemas.ListBinsOutput;
  assert.equal(out.xml.name, 'ListBinsResult');
  assert.equal(out.properties.Bins.xml.wrapped, true);
  assert.deepEqual(openapi.components.schemas.Color.enum, ['red']);
  assert.equal(openapi.servers[0].url, 'https://store.{region}.amazonaws.com');
});
