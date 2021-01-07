const config = require('./utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const endpointsRouter = require('./controllers/endpoints');

const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

const CONTEXT_ROOT = config.CONTEXT_ROOT;

logger.info(`starting mock-server with context-root : /${CONTEXT_ROOT}`);

app.use(cors());
app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use(`/${CONTEXT_ROOT}`, endpointsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
