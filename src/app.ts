/**
 * Javascript way of configuring an app using Express.
 * Deprecated and hence not being used for this project.
 * The typescript version(class based implementation) is implmented in Server.ts
 */

import express, { Express } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { router as endpointsRouter } from './controllers/endpoints';
import { requestLogger, unknownEndpoint, errorHandler } from './utils/middleware';
import { info } from './utils/logger';
import { CONTEXT_ROOT } from './utils/config';

info(`starting server with context-root : /${CONTEXT_ROOT}`);

const app: Express = express();

app.use(cors());
app.use(json());
app.use(requestLogger); // middleware to log request

app.use(`/${CONTEXT_ROOT}`, endpointsRouter);

app.use(unknownEndpoint); // middleware to handle unknown endpoint
app.use(errorHandler); // middleware to handle error

export default app;
