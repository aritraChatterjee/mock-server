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
app.use(requestLogger);

app.use(`/${CONTEXT_ROOT}`, endpointsRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
