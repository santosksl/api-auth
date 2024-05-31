import { FastifyInstance } from 'fastify';
import { createUserController } from '../controllers';

async function userRoutes(fastify: FastifyInstance) {
    fastify.post('/register', async (request, reply) => {
        await createUserController.handle(request, reply);
    });
}

export { userRoutes };
