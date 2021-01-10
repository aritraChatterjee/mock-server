import { Request, Response, NextFunction } from 'express';

const requestLogger = (request: Request, response: Response, next: NextFunction): void => {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
};

const unknownEndpoint = (request: Request, response: Response): void => {
    response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error: any, request: Request, response: Response, next: NextFunction): void => {
    console.error(error.message);

    // handle error response

    next(error);
};

export { requestLogger, unknownEndpoint, errorHandler };
