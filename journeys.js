'use strict'

const moment = require('moment-timezone')
const config = require('config')
const journeys = require('meinfernbus').journeys
const parse  = require('cli-native').to

const error = (msg, code) => {
	const e = new Error(msg)
	e.statusCode = code
	return e
}

module.exports = (req, res, next) => {
	if ('string' !== typeof req.query.origin)
		return next(error('missing origin parameter.', 400))
	if ('string' !== typeof req.query.destination)
		return next(error('missing destination parameter.', 400))

	if (/^[0-9]+$/.test(req.query.date))
		req.query.date *= 1000 // convert to JS timestamp
	else if (!req.query.date) req.query.date = Date.now()
	const dt = moment(req.query.date).tz(config.timezone)
	const now = moment().tz(config.timezone)

	const opt = {}
	if ('adults' in req.query) opt.adults = +req.query.adults
	if ('children' in req.query) opt.children = +req.query.children
	if ('bikes' in req.query) opt.bikes = +req.query.bikes

	journeys(+req.query.origin, +req.query.destination, new Date(+dt))
	.then(res.json)
	.catch(next)
	next()
}
