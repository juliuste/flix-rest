# meinfernbus-rest

A public HTTP REST API, exposing a clean interface to query the Meinfernbus/FlixBus API.

The public endpoint is available at `https://meinfernbus.juliuste.de`.

[![dependency status](https://img.shields.io/david/juliuste/meinfernbus-rest.svg)](https://david-dm.org/juliuste/meinfernbus-rest)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/meinfernbus-rest.svg)](https://david-dm.org/juliuste/meinfernbus-rest#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/meinfernbus-rest.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)


## Installation

```bash
git clone https://github.com/juliuste/meinfernbus-rest.git
cd meinfernbus-rest
npm install --production
```

## Usage

Adapt `config/default.json` to your needs and run `npm start`.


## `GET /locations`

**Not implemented yet.**

## `GET /trips`

Output from [`require('meinfernbus').trips`](https://github.com/juliuste/meinfernbus/blob/master/docs/trips.md)

- `from`: **Required.** City id.
- `to`: **Required.** City id.
- `date`: When? UNIX timestamp or [`moment`-parsable string](http://momentjs.com/docs/#/parsing/). Default: now.

**Other options not implemented yet.**

`Content-Type`: `application/json`

```shell
curl 'https://meinfernbus.juliuste.de/?from=88&to=1394&date=2017-07-13T10:30:00'
```

## Similar Projects

- [meinfernbus](https://github.com/juliuste/meinfernbus/) – Meinfernbus/FlixBus API client
- [search-meinfernbus-locations](https://github.com/derhuerst/search-meinfernbus-locations/) – Meinfernbus location search
- [db-hafas](https://github.com/derhuerst/db-hafas) - Deutsche Bahn (DB) API client
- [db-prices](https://github.com/juliuste/db-prices) - Deutsche Bahn (DB) Sparpreise API client

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/meinfernbus-rest/issues).
