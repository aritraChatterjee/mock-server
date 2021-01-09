import { Request, Response, NextFunction } from 'express';

const requestLogger = (request: Request, response: Request, next: NextFunction) => {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
};

const unknownEndpoint = (request: Request, response: Response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
    console.error(error.message);

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token',
        });
    }

    next(error);
};

export { requestLogger, unknownEndpoint, errorHandler };
