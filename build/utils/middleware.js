"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.unknownEndpoint = exports.requestLogger = void 0;
var requestLogger = function (request, response, next) {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
};
exports.requestLogger = requestLogger;
var unknownEndpoint = function (request, response) {
    response.status(404).send({ error: 'unknown endpoint' });
};
exports.unknownEndpoint = unknownEndpoint;
var errorHandler = function (error, request, response, next) {
    console.error(error.message);
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' });
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }
    else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token',
        });
    }
    next(error);
};
exports.errorHandler = errorHandler;
