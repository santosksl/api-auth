import { AuthenticateUserUseCase } from '@/useCases/authenticateUser/AuthenticateUserUseCase';
import { InvalidCredentialsError } from '@/useCases/errors/InvalidCredentials';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

const authBodySchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    password: z.string(),
});

class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<FastifyReply> {
        const { email, password } = authBodySchema.parse(request.body);

        try {
            const { user } = await this.authenticateUserUseCase.execute({
                password,
                email,
            });

            const token = await reply.jwtSign(
                {},
                {
                    sign: {
                        sub: `${user.id}`,
                    },
                },
            );

            return reply.status(200).send({
                message: '✔️ The user has been logged in',
                user,
                token,
            });
        } catch (err) {
            if (err instanceof InvalidCredentialsError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { AuthenticateUserController };
