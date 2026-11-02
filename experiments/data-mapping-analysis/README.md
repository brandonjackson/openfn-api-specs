# Data-mapping analysis (2026-10)

How many cross-adaptor data-mapping steps exist (same kind of object, system A to system B), and how confidently could one be written from the OpenAPI spec alone? Raw data and stats only; a full report follows separately.

## Method
1. `scripts/extract2.mjs` finds every named (or titled inline) schema used as a request body (writable, a mapping target) or 2xx response (readable, a source) in each `specs/adaptors/*/openapi.json`, with field-quality features. Schemas with fewer than 2 fields are dropped.
2. Entities were classified in chunks (`chunks/` in, `classifications/` out) against the fixed taxonomy in `TAXONOMY.md`: role, one of 33 concepts, a 1-5 confidence rating per direction, and issue codes.
3. `scripts/aggregate.py` validates the output against the closed code lists; `stats.py` computes the counts.

A mapping step is a readable entity in adaptor A to a writable entity of the same concept in adaptor B (A != B).

## Files
- `TAXONOMY.md`: roles, concepts, confidence rubric, issue codes.
- `classified.json`: all 3,992 classified rows.
- `entities_final.json`: the 1,547 ENTITY rows with concept, native term, read/write flags, ratings, issues.
- `stats.py`: aggregation (run from a directory holding `classified.json` and `entities2.json`, which `extract2.mjs` writes).

## Headline numbers
- 3,992 schemas classified across 104 adaptors: 1,547 entities, 148 components, 1,296 wrappers, 1,001 operational.
- 90 adaptors have at least one entity. 14 have none (odoo, vtiger, zoho, et-mfr, openfn, postgresql, mongodb, hive, claude, common, testing, mojatax, cartodb, azure-storage): their specs describe login, RPC or generic-row calls, not business records.
- 40,141 entity-level steps; 5,623 system-level steps (adaptor x concept); 4,887 with the FHIR variants collapsed. The system-level number is the one to use.
- System-level best-case confidence: 1: 204, 2: 1,475, 3: 3,459, 4: 484, 5: 1.

## Caveats
- Chunks 02, 08, 18 and 19 were rated by scripted rules, not row by row. Chunk 08 forced read and write confidence to be equal. (02 and 08 are mostly openmrs, dhis2, ocl, openlmis.)
- FHIR is likely over-rated (mean 4.5, most of the 5s) against the calibration cap for generated specs.
- Mid-run extractor fix: msgraph reads were missed (`2XX` keys and `$ref` responses). After the fix, 241 new entities were classified (chunks 18 and 19), and 61 entities that gained a read or write side had that confidence copied from their other direction. `chunks/` and `classifications/` for 01-17 reflect the pre-fix read/write flags.
- Entities with fewer than 2 fields are excluded. Same-adaptor and cross-concept mappings are not counted.
- Confidence ratings are model judgments from schema features, not tested against real mappings.
