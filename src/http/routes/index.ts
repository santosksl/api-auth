import { FastifyInstance } from 'fastify';
import { userRoutes } from './UserRoutes';

class Routes {
    static RegisterRoutes(routerController: FastifyInstance) {
        routerController.register(userRoutes, { prefix: '/user' });
    }
}

export { Routes };
