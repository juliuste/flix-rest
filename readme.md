# meinfernbus-rest

A public HTTP REST API, exposing a clean interface to query the Meinfernbus/FlixBus API.

The public endpoint is available at `https://1.mfb.juliustens.eu`.

[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/meinfernbus-rest.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/meinfernbus-rest.svg)](https://david-dm.org/juliuste/meinfernbus-rest)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/meinfernbus-rest.svg)](https://david-dm.org/juliuste/meinfernbus-rest#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/meinfernbus-rest.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## `GET /regions`

Output from [`search-meinfernbus-locations`](https://github.com/derhuerst/search-meinfernbus-locations) (regions only).

- `query`: **Required.** Search query

## `GET /regions/all`

List of all operated regions, output from [`require('meinfernbus').regions`](https://github.com/juliuste/meinfernbus/blob/master/docs/regions.md).

## `GET /stations`

Output from [`search-meinfernbus-locations`](https://github.com/derhuerst/search-meinfernbus-locations) (stations only).

- `query`: **Required.** Search query

## `GET /stations/all`

List of all operated stations, output from [`require('meinfernbus').stations`](https://github.com/juliuste/meinfernbus/blob/master/docs/stations.md).

## `GET /journeys`

Output from [`require('meinfernbus').journeys`](https://github.com/juliuste/meinfernbus/blob/master/docs/journeys.md)

- `origin`: **Required.** Region/station id.
- `destination`: **Required.** Region/station id.
- `date`: When? UNIX timestamp or [`moment`-parsable string](http://momentjs.com/docs/#/parsing/). Default: now.
- `adults`: Number of adults. Default: 1
- `children`: Number of children. Default: 0
- `bikes`: Number of bikes. Default: 0

`Content-Type`: `application/json`

```shell
curl 'https://1.mfb.juliustens.eu/?origin=88&destination=1394&date=2018-04-13T10:30:00'
```

## Similar Projects

- [meinfernbus](https://github.com/juliuste/meinfernbus/) – Meinfernbus/FlixBus API client
- [search-meinfernbus-locations](https://github.com/derhuerst/search-meinfernbus-locations/) – Meinfernbus location search
- [db-hafas](https://github.com/derhuerst/db-hafas) - Deutsche Bahn (DB) API client
- [db-prices](https://github.com/juliuste/db-prices) - Deutsche Bahn (DB) Sparpreise API client

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/meinfernbus-rest/issues).
