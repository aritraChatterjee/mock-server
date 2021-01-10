import Server from './utils/Server';

const app: Server = new Server();
app.start();

/* 
## Javascript way of starting the app:
---------------------------------------------------------
    import app from './app'; // the actual Express app
    import { createServer, Server } from 'http';
    import { PORT } from './utils/config';

    const server: Server = createServer(app);

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }); 
---------------------------------------------------------
*/
