# Browserless (browserless) v2.60.0

<!-- derived from openapi.json by `pnpm specs index browserless` — do not edit by hand -->

base: https://production-sfo.browserless.io, https://production-lon.browserless.io, https://production-ams.browserless.io | auth: apiKey (query token) | 106 operations in 18 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Agent
- GET /agent/run — agent-run-get-2: /agent/run
- POST /agent/run — agent-run-post-3: /agent/run
- GET /agent/run/* — agent-run-get-1: /agent/run/*
- DELETE /agent/run/* — agent-run: /agent/run/*
- POST /agent/run/*/continue — /agent/run/*/continue
- GET /chromium/agent — /chromium/agent

## BQL Execution
- GET /chromium/bql?(/*) — chromium-bql-connect: /chromium/bql?(/*)
- POST /chromium/bql?(/*) — chromium-bql-execute: /chromium/bql?(/*)
- GET /stealth/bql?(/*) — stealth-bql-connect: /stealth/bql?(/*)
- POST /stealth/bql?(/*) — stealth-bql-execute: /stealth/bql?(/*)

## Browser Management
- GET /active — /active
- GET /kill/+([0-9a-zA-Z-_]) — kill-0-9-a-z-a-z: /kill/*
- GET /meta — /meta
- DELETE /browser/* — /browser/*
- POST /browser/*/live — browser-live-post-2: /browser/*/live

## Browser REST APIs
- POST /batch-scrape — batch-scrape-post-2: /batch-scrape
- GET /batch-scrape/* — batch-scrape-get-1: /batch-scrape/*
- DELETE /batch-scrape/* — /batch-scrape/*
- GET /scrapers — /scrapers
- POST /scrapers/*/* — scrapers-post-1: /scrapers/*/*

## CDP & DevTools Connections
- GET /chromium/cli — /chromium/cli
- GET /chromium/stealth/reconnect/* — /chromium/stealth/reconnect/*
- GET /devtools/browser/* — /devtools/browser/*
- GET /devtools/page/* — /devtools/page/*
- GET /function/connect/* — /function/connect/*

## Chrome (licensed build)
- POST /chrome/screenshot — /chrome/screenshot
- POST /chrome/pdf — /chrome/pdf
- POST /chrome/content — /chrome/content
- POST /chrome/scrape — /chrome/scrape
- POST /chrome/performance — /chrome/performance
- POST /chrome/function — /chrome/function
- POST /chrome/download — /chrome/download
- POST /chrome/export — /chrome/export
- POST /chrome/unblock — /chrome/unblock
- GET /chrome — /chrome
- GET /chrome/playwright — /chrome/playwright
- GET /chrome/bql?(/*) — chrome-bql-connect: /chrome/bql?(/*)
- POST /chrome/bql?(/*) — chrome-bql-execute: /chrome/bql?(/*)

## Crawling
- GET /crawl — crawl-list: /crawl
- POST /crawl — crawl-start: /crawl
- GET /crawl/* — crawl-status: /crawl/*
- DELETE /crawl/* — crawl-cancel: /crawl/*

## Functions & Downloads
- POST /chromium/function — /chromium/function
- POST /chromium/download — /chromium/download
- POST /edge/function — /edge/function
- POST /edge/download — /edge/download
- POST /chromium/export — /chromium/export

## Integrations
- GET /integrations/onepassword — onepassword-list: /integrations/onepassword
- POST /integrations/onepassword — onepassword-register: /integrations/onepassword
- GET /integrations/onepassword/* — onepassword-get: /integrations/onepassword/*
- DELETE /integrations/onepassword/* — onepassword-delete: /integrations/onepassword/*
- GET /integrations/onepassword/*/audit — /integrations/onepassword/*/audit
- POST /integrations/onepassword/profile — onepassword-autologin-start: /integrations/onepassword/profile
- GET /integrations/onepassword/profile/* — onepassword-autologin-status: /integrations/onepassword/profile/*
- GET /integrations/onepassword/autologin/form — /integrations/onepassword/autologin/form
- POST /integrations/script-generator — /integrations/script-generator

## Management REST APIs
- GET /browser/*/live/* — browser-live-get-1: /browser/*/live/*
- DELETE /browser/*/live/* — /browser/*/live/*
- GET /browser/*/pages — /browser/*/pages
- GET /chromium/agent/capabilities — /chromium/agent/capabilities
- GET /profile/*/download — /profile/*/download

## Platform / Skills
- GET /skills — /skills

## Profiles
- POST /profile — profile-create: /profile
- DELETE /profile — /profile
- GET /profiles — /profiles
- GET /profile/* — profile-get: /profile/*
- PUT /profile/* — profile-rename: /profile/*
- DELETE /profile/* — profile-delete: /profile/*
- POST /profile/refresh — /profile/refresh
- POST /profile/upload — /profile/upload

## Proxy
- GET /proxy/cities — /proxy/cities

## Scraping & Content
- POST /chromium/content — /chromium/content
- POST /chromium/scrape — /chromium/scrape
- POST /smart-scrape — /smart-scrape
- POST /search — /search
- POST /map — /map
- POST /edge/content — /edge/content
- POST /edge/scrape — /edge/scrape
- POST /chromium/performance — /chromium/performance
- POST /edge/performance — /edge/performance
- POST /scrape — /scrape

## Screenshots & PDFs
- POST /screenshot — /screenshot
- POST /pdf — /pdf
- POST /edge/screenshot — /edge/screenshot
- POST /edge/pdf — /edge/pdf

## Sessions & Connections
- POST /session — session-create: /session
- PUT /json/new — /json/new
- GET /json/version — /json/version
- GET /json/protocol — /json/protocol
- POST /session/bql/* — /session/bql/*
- GET /reconnect/* — /reconnect/*
- GET /session/connect/* — /session/connect/*
- DELETE /session/* — session-delete: /session/*

## Unblock & Stealth
- POST /unblock — /unblock
- GET /chrome/stealth — /chrome/stealth
- GET /chromium/stealth — /chromium/stealth
- GET /stealth — /stealth

## WebSocket APIs
- GET / — chromium-root: /
- GET /chromium — /chromium
- GET /chromium/playwright — /chromium/playwright
- GET /edge — /edge
- GET /edge/playwright — /edge/playwright
- GET /firefox/playwright — /firefox/playwright
- GET /webkit/playwright — /webkit/playwright
- GET /live/* — /live/*
- GET /chrome/live/* — /chrome/live/*
