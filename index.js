'use strict'

const config = require('config')
const express = require('express')
const http = require('http')
const corser = require('corser')
const compression = require('compression')
const nocache = require('nocache')

const pkg = require('./package.json')
const aboutPage = require('./routes/about-page')
const journeys = require('./routes/journeys')
const regions = require('./routes/regions')
const stations = require('./routes/stations')

const api = express()
const server = http.createServer(api)

const allowed = corser.simpleRequestHeaders.concat(['User-Agent'])
api.use(corser.create({requestHeaders: allowed})) // CORS
api.use(compression())
const noCache = nocache()

const docsLink = 'https://github.com/derhuerst/meinfernbus-rest/blob/master/readme.md'
api.get('/', aboutPage(pkg.name, pkg.description, docsLink))

api.get('/regions', regions.some)
api.get('/regions/all', regions.all)

api.get('/stations', stations.some)
api.get('/stations/all', stations.all)

api.get('/journeys', journeys)

api.use((err, req, res, next) => {
	if (res.headersSent) return next()
	res.status(err.statusCode || 500).json({error: true, msg: err.message})
	next()
})

server.listen(config.port, (e) => {
	if (e) return console.error(e)
	console.log(`Listening on ${config.port}.`)
})
