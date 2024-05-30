import { SetupApplication } from './app';

class Server {
    static startServer() {
        const application = new SetupApplication(process.env.PORT);
        application.initApplication();
        application.startApplication();
    }
}

Server.startServer();
