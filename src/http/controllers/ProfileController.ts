import { FastifyReply, FastifyRequest } from 'fastify';

async function ProfileController(request: FastifyRequest, reply: FastifyReply) {
    console.log(request.user.sub);
    return reply.status(200).send({
        message: 'Oie',
    });
}

export { ProfileController };
