import fastify from 'fastify';
import { ZodError } from 'zod';
import { Server } from 'http';
import { Database } from './database';

class SetupApplication {
    private server?: Server;

    constructor(
        private port: number,
        public app = fastify(),
    ) {}

    public initApplication() {
        this.errorHandler();
        this.setupFastify();
        this.setupRoutes();
    }

    private errorHandler() {
        this.app.setErrorHandler((error, _, reply) => {
            if (error instanceof ZodError) {
                return reply.status(400).send({
                    message: 'Validation error.',
                    issues: error.format(),
                });
            }

            return reply.status(500).send({ message: 'Internal server error' });
        });
    }

    private async setupFastify() {
        await Database.getInstance();
    }

    private setupRoutes() {}

    public startApplication() {
        this.app
            .listen({
                host: '0.0.0.0',
                port: this.port,
            })
            .then((address) => {
                console.log(`🚀 HTTP Server Running!\n🎯 Address: ${address}`);
            });
    }
}

export { SetupApplication };
