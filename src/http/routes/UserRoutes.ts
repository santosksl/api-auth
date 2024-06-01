import { FastifyInstance } from 'fastify';
import { authUserController, createUserController } from '../controllers';
import { ProfileController } from '../controllers/ProfileController';
import { verifyJWT } from '../middlwares/VerifyJWT';

async function userRoutes(fastify: FastifyInstance) {
    fastify.post('/register', async (request, reply) => {
        await createUserController.handle(request, reply);
    });

    fastify.post('/login', async (request, reply) => {
        await authUserController.handle(request, reply);
    });

    fastify.get('/myprofile', { onRequest: [verifyJWT] }, ProfileController);
}

export { userRoutes };
