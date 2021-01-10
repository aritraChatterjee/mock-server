import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { router as endpointsRouter } from '../controllers/endpoints';
import { requestLogger, unknownEndpoint, errorHandler } from '../utils/middleware';
import { info } from '../utils/logger';
import { CONTEXT_ROOT, PORT } from '../utils/config';

class Server {
    private app: express.Express;

    constructor() {
        this.app = express();

        this.app.use(cors()); // implements cors
        this.app.use(json()); // body parser
        this.app.use(requestLogger); // middleware to log request

        this.app.use(`/${CONTEXT_ROOT}`, endpointsRouter); // router to service endpoints

        this.app.use(unknownEndpoint); // middleware to handle unknown endpoint
        this.app.use(errorHandler); // middleware to handle error
    }

    start(): void {
        this.app.listen(PORT, () => {
            info(`Server running on port ${PORT}`);
        });
    }
}

export default Server;
