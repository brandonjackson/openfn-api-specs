import { test } from 'node:test';
import assert from 'node:assert/strict';
import { smithyToOpenApi } from '../src/smithy.js';
import { buildOpenapi, detect } from '../src/convert.js';
import { createConformer } from '../src/conform.js';
import { endpointIndexMarkdown } from '../src/endpoints.js';

/**
 * A small restXml Smithy model shaped like S3: one path serving several
 * operations told apart by a query literal, a required query parameter or a
 * required header; a greedy label; header, prefix-header, query and payload
 * bindings; a streaming blob; an output that mixes headers with an XML body;
 * errors; and every data shape kind the converter maps.
 */
const NS = 'com.demo.store';
const id = (name: string) => `${NS}#${name}`;
const doc = (text: string) => ({ 'smithy.api#documentation': text });
const http = (method: string, uri: string, code = 200) => ({ 'smithy.api#http': { method, uri, code } });
const member = (target: string, traits: Record<string, unknown> = {}) => ({ target: target.includes('#') ? target : id(target), traits });

const bucket = member('Name', { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} });
const key = member('Name', { 'smithy.api#httpLabel': {}, 'smithy.api#required': {} });

const model = {
  smithy: '2.0',
  shapes: {
    [id('Store')]: {
      type: 'service',
      version: '2020-01-01',
      operations: ['GetItem', 'ListParts', 'PutItem', 'CopyItem', 'GetAcl', 'ListItems', 'ListItemsV2', 'GetReport', 'ListReports', 'Rpc'].map((o) => ({ target: id(o) })),
      traits: {
        'aws.api#service': { sdkId: 'Store', endpointPrefix: 'store' },
        'aws.auth#sigv4': { name: 'store' },
        'aws.protocols#restXml': {},
        'smithy.api#title': 'Demo Store',
        'smithy.api#xmlNamespace': { uri: 'http://store.test/doc/' },
        ...doc('<p>A demo store.</p>'),
      },
    },
    [id('GetItem')]: {
      type: 'operation',
      input: { target: id('GetItemRequest') },
      output: { target: id('GetItemOutput') },
      errors: [{ target: id('NoSuchKey') }, { target: id('Gone') }, { target: id('Throttled') }],
      traits: { ...http('GET', '/{Bucket}/{Key+}?x-id=GetItem'), ...doc('<note><p>Not for vaults.</p></note><p>Fetches an item. It streams.</p>') },
    },
    [id('GetItemRequest')]: {
      type: 'structure',
      members: {
        Bucket: bucket,
        Key: key,
        VersionId: member('smithy.api#String', { 'smithy.api#httpQuery': 'versionId', ...doc('<p>The version.</p>') }),
        IfModifiedSince: member('Stamp', { 'smithy.api#httpHeader': 'If-Modified-Since' }),
      },
      traits: { 'smithy.api#input': {} },
    },
    [id('GetItemOutput')]: {
      type: 'structure',
      members: {
        Body: member('Stream', { 'smithy.api#httpPayload': {} }),
        ETag: member('smithy.api#String', { 'smithy.api#httpHeader': 'ETag' }),
        Metadata: member('Metadata', { 'smithy.api#httpPrefixHeaders': 'x-meta-' }),
      },
      traits: { 'smithy.api#output': {} },
    },
    [id('ListParts')]: {
      type: 'operation',
      input: { target: id('ListPartsRequest') },
      output: { target: 'smithy.api#Unit' },
      traits: http('GET', '/{Bucket}/{Key+}?x-id=ListParts'),
    },
    [id('ListPartsRequest')]: {
      type: 'structure',
      members: { Bucket: bucket, Key: key, UploadId: member('smithy.api#String', { 'smithy.api#httpQuery': 'uploadId', 'smithy.api#required': {} }) },
    },
    [id('PutItem')]: {
      type: 'operation',
      input: { target: id('PutItemRequest') },
      output: { target: 'smithy.api#Unit' },
      traits: http('PUT', '/{Bucket}/{Key+}?x-id=PutItem'),
    },
    [id('PutItemRequest')]: {
      type: 'structure',
      members: {
        Bucket: bucket,
        Key: key,
        Body: member('Stream', { 'smithy.api#httpPayload': {} }),
        Metadata: member('Metadata', { 'smithy.api#httpPrefixHeaders': 'x-meta-' }),
      },
    },
    [id('CopyItem')]: {
      type: 'operation',
      input: { target: id('CopyItemRequest') },
      output: { target: 'smithy.api#Unit' },
      traits: http('PUT', '/{Bucket}/{Key+}?x-id=CopyItem'),
    },
    [id('CopyItemRequest')]: {
      type: 'structure',
      members: { Bucket: bucket, Key: key, Source: member('smithy.api#String', { 'smithy.api#httpHeader': 'x-copy-source', 'smithy.api#required': {} }) },
    },
    [id('GetAcl')]: {
      type: 'operation',
      input: { target: id('GetAclRequest') },
      output: { target: id('GetAclOutput') },
      traits: http('GET', '/{Bucket}/{Key+}?acl'),
    },
    [id('GetAclRequest')]: { type: 'structure', members: { Bucket: bucket, Key: key } },
    [id('GetAclOutput')]: {
      type: 'structure',
      members: {
        Owner: member('Owner'),
        Grants: member('Grants', { 'smithy.api#xmlName': 'AccessControlList' }),
        Charged: member('smithy.api#String', { 'smithy.api#httpHeader': 'x-charged' }),
      },
      traits: { 'smithy.api#xmlName': 'AccessControlPolicy' },
    },
    [id('ListItems')]: {
      type: 'operation',
      input: { target: id('ListItemsRequest') },
      output: { target: id('Listing') },
      traits: http('GET', '/{Bucket}'),
    },
    [id('ListItemsV2')]: {
      type: 'operation',
      input: { target: id('ListItemsRequest') },
      output: { target: id('Listing') },
      traits: { ...http('GET', '/{Bucket}?list-type=2'), 'smithy.api#paginated': { inputToken: 'Token' } },
    },
    [id('ListItemsRequest')]: { type: 'structure', members: { Bucket: bucket } },
    [id('GetReport')]: {
      type: 'operation',
      input: { target: id('GetReportRequest') },
      output: { target: 'smithy.api#Unit' },
      traits: http('GET', '/{Bucket}?report&x-id=GetReport'),
    },
    [id('GetReportRequest')]: {
      type: 'structure',
      members: { Bucket: bucket, Id: member('smithy.api#String', { 'smithy.api#httpQuery': 'id', 'smithy.api#required': {} }) },
    },
    [id('ListReports')]: {
      type: 'operation',
      input: { target: id('ListItemsRequest') },
      output: { target: 'smithy.api#Unit' },
      traits: http('GET', '/{Bucket}?report&x-id=ListReports', 204),
    },
    // No http trait: an RPC-protocol operation this converter cannot place.
    [id('Rpc')]: { type: 'operation', input: { target: 'smithy.api#Unit' }, output: { target: 'smithy.api#Unit' } },

    // Data shapes.
    [id('Listing')]: {
      type: 'structure',
      members: {
        Contents: member('Items', { 'smithy.api#xmlFlattened': {} }),
        Truncated: member('smithy.api#Boolean', { 'smithy.api#deprecated': {} }),
      },
    },
    [id('Items')]: { type: 'list', member: member('Item') },
    [id('Item')]: {
      type: 'structure',
      members: {
        Key: member('Name', { 'smithy.api#required': {}, ...doc('<p>The key.</p>') }),
        Class: member('StorageClass'),
        Level: member('Level'),
        Modified: member('Stamp'),
        Size: member('Size'),
        Kind: member('smithy.api#String', { 'smithy.api#xmlAttribute': {}, 'smithy.api#xmlName': 'xsi:type' }),
      },
    },
    [id('Owner')]: { type: 'structure', members: { ID: member('smithy.api#String') } },
    [id('Grants')]: { type: 'list', member: member('Grantee', { 'smithy.api#xmlName': 'Grant' }) },
    [id('Grantee')]: { type: 'union', members: { User: member('Owner'), Group: member('smithy.api#String') } },
    [id('Metadata')]: { type: 'map', key: member('smithy.api#String'), value: member('smithy.api#String') },
    [id('Name')]: { type: 'string', traits: { 'smithy.api#length': { min: 1, max: 63 }, 'smithy.api#pattern': '^[a-z]+$' } },
    [id('StorageClass')]: {
      type: 'enum',
      members: { STANDARD: member('smithy.api#Unit', { 'smithy.api#enumValue': 'STANDARD' }), COLD: member('smithy.api#Unit', { 'smithy.api#enumValue': 'COLD_LINE' }) },
    },
    [id('Level')]: { type: 'intEnum', members: { LOW: member('smithy.api#Unit', { 'smithy.api#enumValue': 1 }), HIGH: member('smithy.api#Unit', { 'smithy.api#enumValue': 2 }) } },
    [id('Stamp')]: { type: 'timestamp' },
    [id('Size')]: { type: 'long', traits: { 'smithy.api#range': { min: 0 } } },
    [id('Stream')]: { type: 'blob', traits: { 'smithy.api#streaming': {} } },
    [id('NoSuchKey')]: { type: 'structure', members: {}, traits: { 'smithy.api#error': 'client', 'smithy.api#httpError': 404 } },
    [id('Gone')]: { type: 'structure', members: {}, traits: { 'smithy.api#error': 'client', 'smithy.api#httpError': 404 } },
    [id('Throttled')]: { type: 'structure', members: {}, traits: { 'smithy.api#error': 'server' } },
  },
};

const { openapi, warnings } = smithyToOpenApi(model, 'demo');
const params = (op: any, where: string) => op.parameters.filter((p: any) => p.in === where).map((p: any) => p.name);

test('detect recognises a Smithy JSON AST and routes it through the converter', () => {
  assert.deepEqual(detect(model, 'json'), { kind: 'smithy', format: 'smithy', origin: 'converted', ext: 'json' });
  assert.throws(() => detect({ smithy: '2.0' }, 'json'), /Unrecognised upstream spec/);
  assert.deepEqual(buildOpenapi(model, 'demo', 'json').openapi, openapi);
});

test('service metadata becomes info, servers and a sigv4 security scheme', () => {
  assert.equal(openapi.openapi, '3.0.3');
  assert.equal(openapi.info.title, 'Demo Store');
  assert.equal(openapi.info.version, '2020-01-01');
  assert.equal(openapi.info['x-openfn-adaptor'], 'demo');
  assert.equal(openapi.servers[0].url, 'https://store.{region}.amazonaws.com');
  assert.equal(openapi.components.securitySchemes.sigv4.name, 'Authorization');
  assert.deepEqual(openapi.security, [{ sigv4: [] }]);
});

test('every http-bound operation is placed; one without a binding is skipped loudly', () => {
  const ids = Object.values<any>(openapi.paths).flatMap((item) => Object.values<any>(item).map((op) => op.operationId));
  assert.deepEqual(ids.sort(), ['CopyItem', 'GetAcl', 'GetItem', 'GetReport', 'ListItems', 'ListItemsV2', 'ListParts', 'ListReports', 'PutItem']);
  assert.deepEqual(warnings, ['operation Rpc has no smithy.api#http binding — skipped']);
});

test('query literals key the path after #, and same-URI operations are told apart', () => {
  assert.deepEqual(Object.keys(openapi.paths), [
    '/{Bucket}/{Key}#uploadId', // required query parameter
    '/{Bucket}/{Key}#x-copy-source', // required header
    '/{Bucket}/{Key}#acl', // literal from the URI
    '/{Bucket}/{Key}', // GetItem / PutItem: the x-id hint is not part of the key
    '/{Bucket}#report&id', // the more specific key is listed first
    '/{Bucket}#list-type=2',
    '/{Bucket}#report',
    '/{Bucket}',
  ]);
  assert.equal(openapi.paths['/{Bucket}/{Key}'].get.operationId, 'GetItem');
  assert.equal(openapi.paths['/{Bucket}/{Key}'].put.operationId, 'PutItem');
  assert.equal(openapi.paths['/{Bucket}/{Key}#x-copy-source'].put.operationId, 'CopyItem');
});

test('the conformer resolves requests to the right same-URI operation', () => {
  const c = createConformer(openapi);
  const hit = (method: string, path: string) => c.match(method, path)?.operationId;
  assert.equal(hit('GET', '/b/k'), 'GetItem');
  assert.equal(hit('GET', '/b/k?x-id=GetItem'), 'GetItem');
  assert.equal(hit('GET', '/b/k?uploadId=1'), 'ListParts');
  assert.equal(hit('GET', '/b/k?acl'), 'GetAcl');
  assert.equal(hit('PUT', '/b/k'), 'PutItem');
  assert.equal(hit('GET', '/b'), 'ListItems');
  assert.equal(hit('GET', '/b?list-type=2&prefix=a'), 'ListItemsV2');
  assert.equal(hit('GET', '/b?report'), 'ListReports');
  assert.equal(hit('GET', '/b?report&id=7'), 'GetReport');
});

test('labels, query, header and prefix-header members become parameters', () => {
  const get = openapi.paths['/{Bucket}/{Key}'].get;
  assert.deepEqual(params(get, 'path'), ['Bucket', 'Key']);
  assert.deepEqual(params(get, 'query'), ['x-id', 'versionId']);
  assert.deepEqual(params(get, 'header'), ['If-Modified-Since']);
  const keyParam = get.parameters.find((p: any) => p.name === 'Key');
  assert.equal(keyParam.required, true);
  assert.equal(keyParam['x-greedy'], true);
  assert.deepEqual(keyParam.schema, { $ref: '#/components/schemas/Name' });
  // The SDK hint is optional; a URI literal is required.
  assert.equal(get.parameters.find((p: any) => p.name === 'x-id').required, false);
  const acl = openapi.paths['/{Bucket}/{Key}#acl'].get.parameters.find((p: any) => p.name === 'acl');
  assert.deepEqual([acl.required, acl.allowEmptyValue, acl.schema.enum], [true, true, ['']]);
  assert.deepEqual(openapi.paths['/{Bucket}#list-type=2'].get.parameters[0].schema.enum, ['2']);
  // A timestamp in a header is an HTTP date unless the model says otherwise.
  assert.deepEqual(get.parameters.find((p: any) => p.name === 'If-Modified-Since').schema, { type: 'string', 'x-timestamp-format': 'http-date' });
  const meta = openapi.paths['/{Bucket}/{Key}'].put.parameters.find((p: any) => p.name === 'x-meta-*');
  assert.equal(meta['x-prefix-headers'], 'x-meta-');
  assert.equal(get.summary, 'Fetches an item.');
  assert.equal(openapi.paths['/{Bucket}#list-type=2'].get['x-paginated'].inputToken, 'Token');
});

test('payloads and unbound members become bodies; bound output members become headers', () => {
  const put = openapi.paths['/{Bucket}/{Key}'].put;
  assert.deepEqual(put.requestBody.content, { 'application/octet-stream': { schema: { type: 'string', format: 'binary' } } });
  const got = openapi.paths['/{Bucket}/{Key}'].get.responses['200'];
  assert.deepEqual(Object.keys(got.content), ['application/octet-stream']);
  assert.deepEqual(Object.keys(got.headers), ['ETag', 'x-meta-*']);

  // Headers are lifted out of the XML body, which keeps the shape's root element name.
  const acl = openapi.paths['/{Bucket}/{Key}#acl'].get.responses['200'];
  assert.deepEqual(Object.keys(acl.headers), ['x-charged']);
  assert.deepEqual(acl.content, { 'application/xml': { schema: { $ref: '#/components/schemas/GetAclOutput' } } });
  const body = openapi.components.schemas.GetAclOutput;
  assert.deepEqual(Object.keys(body.properties), ['Owner', 'Grants']);
  assert.deepEqual(body.xml, { name: 'AccessControlPolicy', namespace: 'http://store.test/doc/' });
  assert.deepEqual(body.properties.Grants.xml, { name: 'AccessControlList', wrapped: true });

  // An output that is plain data elsewhere is referenced, not copied; inputs are dissolved.
  assert.deepEqual(openapi.paths['/{Bucket}'].get.responses['200'].content['application/xml'].schema, { $ref: '#/components/schemas/Listing' });
  assert.equal(openapi.components.schemas.GetItemRequest, undefined);
  assert.equal(openapi.components.schemas.GetItemOutput, undefined);
  assert.deepEqual(Object.keys(openapi.paths['/{Bucket}#report'].get.responses), ['204']);
});

test('errors become responses keyed by status, merged when they share one', () => {
  const r = openapi.paths['/{Bucket}/{Key}'].get.responses;
  assert.deepEqual(Object.keys(r), ['200', '404', '500']);
  assert.equal(r['404'].description, 'NoSuchKey / Gone');
  assert.deepEqual(r['404'].content['application/xml'].schema, {
    oneOf: [{ $ref: '#/components/schemas/NoSuchKey' }, { $ref: '#/components/schemas/Gone' }],
  });
  assert.deepEqual(r['500'].content['application/xml'].schema, { $ref: '#/components/schemas/Throttled' });
});

test('data shapes become component schemas', () => {
  const s = openapi.components.schemas;
  assert.deepEqual(s.Name, { type: 'string', minLength: 1, maxLength: 63, pattern: '^[a-z]+$' });
  assert.deepEqual(s.StorageClass, { type: 'string', enum: ['STANDARD', 'COLD_LINE'] });
  assert.deepEqual(s.Level, { type: 'integer', enum: [1, 2] });
  assert.deepEqual(s.Stamp, { type: 'string', format: 'date-time' });
  assert.deepEqual(s.Size, { type: 'integer', format: 'int64', minimum: 0 });
  assert.deepEqual(s.Stream, { type: 'string', format: 'binary' });
  assert.deepEqual(s.Metadata, { type: 'object', additionalProperties: { type: 'string' } });
  assert.deepEqual(s.Items, { type: 'array', items: { $ref: '#/components/schemas/Item' } });
  assert.deepEqual(s.Grants.items, { allOf: [{ $ref: '#/components/schemas/Grantee' }], xml: { name: 'Grant' } });
  assert.deepEqual([s.Grantee.minProperties, s.Grantee.maxProperties], [1, 1]);
  assert.deepEqual(s.Item.required, ['Key']);
  assert.deepEqual(s.Item.properties.Key, { allOf: [{ $ref: '#/components/schemas/Name' }], description: '<p>The key.</p>' });
  assert.deepEqual(s.Item.properties.Class, { $ref: '#/components/schemas/StorageClass' });
  assert.deepEqual(s.Item.properties.Kind, { type: 'string', xml: { name: 'xsi:type', attribute: true } });
  // A flattened list is not wrapped; a deprecated member says so.
  assert.equal(s.Listing.properties.Contents.xml, undefined);
  assert.equal(s.Listing.properties.Truncated.deprecated, true);
  // Every $ref resolves.
  const refs = JSON.stringify(openapi).match(/#\/components\/schemas\/[^"]+/g) ?? [];
  for (const r of refs) assert.ok(s[r.split('/').pop()!], `dangling ${r}`);
});

test('a model with no tag rules and no resources falls back to path grouping', () => {
  assert.equal(openapi.tags, undefined);
  assert.match(endpointIndexMarkdown(openapi, 'demo'), /9 operations in 1 resource/);
});
