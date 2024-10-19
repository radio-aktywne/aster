---
slug: /config
title: Configuration
---

## Environment variables

You can configure the app at runtime using various environment variables:

- `ASTER__SERVER__HOST` -
  host to run the server on
  (default: `0.0.0.0`)
- `ASTER__SERVER__PORT` -
  port to run the server on
  (default: `12000`)
- `ASTER__DINGO__HTTP__SCHEME`
  scheme of the HTTP API of the dingo service
  (default: `http`)
- `ASTER__DINGO__HTTP__HOST`
  host of the HTTP API of the dingo service
  (default: `localhost`)
- `ASTER__DINGO__HTTP__PORT`
  port of the HTTP API of the dingo service
  (default: `9001`)
- `ASTER__DINGO__HTTP__PATH`
  path of the HTTP API of the dingo service
  (default: ``)
- `ASTER__PELICAN__HTTP__SCHEME`
  scheme of the HTTP API of the pelican service
  (default: `http`)
- `ASTER__PELICAN__HTTP__HOST`
  host of the HTTP API of the pelican service
  (default: `localhost`)
- `ASTER__PELICAN__HTTP__PORT`
  port of the HTTP API of the pelican service
  (default: `42000`)
- `ASTER__PELICAN__HTTP__PATH`
  path of the HTTP API of the pelican service
  (default: ``)
