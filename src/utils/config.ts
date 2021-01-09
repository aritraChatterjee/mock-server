import dotenv from 'dotenv';

dotenv.config();

const CONTEXT_ROOT = process.env.CONTEXT_ROOT;
const PORT = process.env.PORT;

export { CONTEXT_ROOT, PORT };
