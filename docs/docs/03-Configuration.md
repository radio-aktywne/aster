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
  (default: `10110`)
- `ASTER__COOKIES__DOMAIN` -
  domain for the cookies
  (default: ``)
- `ASTER__SECRETS__AUTH` -
  secrets for encrypting auth cookies
  (default: `secret`)
- `ASTER__URLS__PUBLIC` -
  public URL of the app
  (default: `http://localhost:10110`)
- `ASTER__DINGO__HTTP__SCHEME`
  scheme of the HTTP API of the dingo service
  (default: `http`)
- `ASTER__DINGO__HTTP__HOST`
  host of the HTTP API of the dingo service
  (default: `localhost`)
- `ASTER__DINGO__HTTP__PORT`
  port of the HTTP API of the dingo service
  (default: `10101`)
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
  (default: `10200`)
- `ASTER__PELICAN__HTTP__PATH`
  path of the HTTP API of the pelican service
  (default: ``)
- `ASTER__SCORPION__PUBLIC__SCHEME` -
  scheme of the public API of the scorpion service
  (default: `http`)
- `ASTER__SCORPION__PUBLIC__HOST` -
  host of the public API of the scorpion service
  (default: `localhost`)
- `ASTER__SCORPION__PUBLIC__PORT` -
  port of the public API of the scorpion service
  (default: `20000`)
- `ASTER__SCORPION__PUBLIC__PATH` -
  path of the public API of the scorpion service
  (default: ``)
- `ASTER__SCORPION__PUBLIC__CLIENT` -
  client ID to authenticate with the public API of the scorpion service
  (default: `aster`)
- `ASTER__SCORPION__PUBLIC__SECRET` -
  client secret to authenticate with the public API of the scorpion service
  (default: `secret`)
- `ASTER__DEBUG` -
  enable debug mode
  (default: `true`)
