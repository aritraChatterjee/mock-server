import app from './app'; // the actual Express app
import { createServer } from 'http';
import { PORT } from './utils/config';

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
