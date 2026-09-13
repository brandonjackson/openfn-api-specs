# OpenFn Redis Adaptor (synthesized) (redis) v1.0.0

<!-- derived from openapi.json by `pnpm specs index redis` — do not edit by hand -->

base: https://redis.mock.openfn.org | auth: not declared | 10 operations in 10 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## get
- POST /get — get: Get the string value of a key

## hGetAll
- POST /hGetAll — hGetAll: Get all fields and values of a hash

## hget
- POST /hget — hget: Get the value of a field in a hash

## hset
- POST /hset — hset: Set fields of a hash

## jGet
- POST /jGet — jGet: Get a JSON document stored at a key

## jSet
- POST /jSet — jSet: Set a JSON document at a key

## mGet
- POST /mGet — mGet: Get JSON documents at multiple keys

## mSet
- POST /mSet — mSet: Set JSON documents at multiple keys

## scan
- POST /scan — scan: Scan for keys matching a pattern

## set
- POST /set — set: Set the string value of a key
