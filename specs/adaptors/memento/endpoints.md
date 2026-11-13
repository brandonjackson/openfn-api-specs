# Memento Cloud API Beta (memento) vv1

<!-- derived from openapi.json by `pnpm specs index memento` — do not edit by hand -->

base: https://api.mementodatabase.com/v1 | auth: apiKey (query token) | 9 operations in 4 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Entries
- GET /libraries/{libraryId}/entries — listEntries: List entries on a library
- POST /libraries/{libraryId}/entries — createEntry: Create a new entry
- GET /libraries/{libraryId}/entries/{entryId} — getEntry: Get a single entry
- PATCH /libraries/{libraryId}/entries/{entryId} — editEntry: Edit an entry
- DELETE /libraries/{libraryId}/entries/{entryId} — deleteEntry: Delete an entry

## Files
- POST /libraries/{libraryId}/entries/{entryId}/files/{fieldId} — uploadEntryFiles: Upload one or more files

## Libraries
- GET /libraries — listLibraries: List libraries
- GET /libraries/{libraryId} — getLibrary: Get a library

## Search
- GET /libraries/{libraryId}/search — searchEntries: Search entries
