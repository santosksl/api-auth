import { SetupApplication } from './app';
import { env } from './structs/env';

class Server {
    static startServer() {
        const application = new SetupApplication(env.PORT);
        application.initApplication();
        application.startApplication();
    }
}

Server.startServer();
