# OpenFn testing adaptor (dev/test harness surface) (testing) v1.0.0

<!-- derived from openapi.json by `pnpm specs index testing` — do not edit by hand -->

base: http://localhost:4010 | auth: not declared | 7 operations in 7 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## combine
- POST /combine — combine: Combine multiple operations into one (mirrors combine()).

## fn
- POST /fn — fn: Run a custom function against state (mirrors fn()).

## get
- GET /get — getEcho: Echo a GET request (httpbin-style test endpoint).

## log
- POST /log — log: Log a message (mirrors log()).

## post
- POST /post — postEcho: Echo a POST request (httpbin-style test endpoint).

## status
- GET /status/{code} — getStatus: Return a response with the given HTTP status (httpbin-style).

## version
- GET /version — version: Get the adaptor package version (mirrors version()).
