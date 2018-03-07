'use strict'

const escape = require('stringify-entities')

const createRoute = (name, description, docsLink) => {
	const msg = `\
<h1><code>${escape(name)}</code></h1>
<p>${escape(description)}</p>
<p><a href="${escape(docsLink)}" rel="nofollow">documentation</a></p>`

	const aboutPage = (req, res, next) => {
		if (!req.accepts('html') || res.headersSent) return next()

		res.set('content-type', 'text/html')
		res.send(msg)
		next()
	}
	return aboutPage
}

module.exports = createRoute
