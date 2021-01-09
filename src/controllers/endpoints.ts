import { Request, Response, Router } from 'express';
import { info } from '../utils/logger';

const router = Router();

router.get('/', async (request: Request, response: Response) => {
    info('in get');
    response.json({ msg: 'mock-server running' });
});

router.post('/', async (request, response, next) => {
    try {
        info('in post');
        response.status(201).json({ msg: 'success' });
    } catch (exception) {
        next(exception);
    }
});

export { router };
