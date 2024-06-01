import { env } from '@/structs/env';
import fastifyJwt from '@fastify/jwt';
import { FastifyInstance } from 'fastify';
import { userRoutes } from './UserRoutes';

class Routes {
    static RegisterRoutes(routerController: FastifyInstance) {
        routerController.register(fastifyJwt, {
            secret: env.JWT_SECRET_KEY,
        });

        routerController.register(userRoutes, { prefix: '/user' });
    }
}

export { Routes };
