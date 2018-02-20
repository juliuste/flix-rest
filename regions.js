'use strict'

const mfb = require('meinfernbus')
const search = require('search-meinfernbus-locations')

// todo
let regions
mfb.regions().then(r => {regions = r})

const error = (msg, code) => {
	const e = new Error(msg)
	e.statusCode = code
	return e
}

const some = (req, res, next) => {
	if ('string' !== typeof req.query.query || req.query.query.length === 0)
		return next(error('missing query parameter.', 400))
	const results = search(req.query.query).filter(l => l.type === 'region')
	res.json(results)
	next()
}

const all = (req, res, next) => {
	if (!regions)
        return next(error('server error: regions not loaded yet.', 500))
	res.json(regions)
    next()
}

module.exports = {all, some}
