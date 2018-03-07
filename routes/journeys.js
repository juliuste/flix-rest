'use strict'

const moment = require('moment-timezone')
const config = require('config')
const journeys = require('meinfernbus').journeys

const error = (msg, code) => {
	const e = new Error(msg)
	e.statusCode = code
	return e
}

const search = async (req, res, next) => {
	if ('string' !== typeof req.query.origin && ('string' !== typeof req.query['origin.id'] || !['stations', 'regions'].includes(req.query['origin.type'])))
		return next(error('missing origin parameter.', 400))
	if ('string' !== typeof req.query.destination && ('string' !== typeof req.query['destination.id'] || !['stations', 'regions'].includes(req.query['destination.type'])))
		return next(error('missing destination parameter.', 400))

	if(!req.query['origin.id']){
		req.query.origin = {
			type: 'region',
			id: req.query.origin+''
		}
	}
	else{
		req.query.origin = {
			type: req.query['origin.type'],
			id: req.query['origin.id']+''
		}
	}

	if(!req.query['destination.id']){
		req.query.destination = {
			type: 'region',
			id: req.query.destination+''
		}
	}
	else{
		req.query.destination = {
			type: req.query['destination.type'],
			id: req.query['destination.id']+''
		}
	}
	
	if(!req.query.date) req.query.date = new Date()
	const dt = new Date(req.query.date)

	const opt = {}
	if ('adults' in req.query) opt.adults = +req.query.adults
	if ('children' in req.query) opt.children = +req.query.children
	if ('bikes' in req.query) opt.bikes = +req.query.bikes

	const result = await (journeys(req.query.origin, req.query.destination, dt, opt).catch(err => next(error(err, 400))))
	res.json(result)
	next()
}

module.exports = search
