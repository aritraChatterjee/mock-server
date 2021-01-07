const router = require('express').Router();
const logger = require('../utils/logger');

router.get('/', async (request, response) => {
	response.json({ msg: 'mock-server running' });
});

router.post('/', async (request, response, next) => {
	try {
		logger.info('in post');
		response.status(201).json({ msg: 'success' });
	} catch (exception) {
		next(exception);
	}
});

module.exports = router;
