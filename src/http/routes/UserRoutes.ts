import { FastifyInstance } from 'fastify';

async function userRoutes(fastify: FastifyInstance) {
    fastify.post('/register', async (request, reply) => {
        createUserController.handle(request, reply);
    });
}

export { userRoutes };
