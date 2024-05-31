import { CreateUserUseCase } from '@/useCases/createUser/CreateUserUseCase';
import { UserAlreadyExistsError } from '@/useCases/errors/UserAlreadyExists';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

const registerBodySchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' }),
    email: z.string().email({ message: 'Invalid email format' }),
});

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<FastifyReply> {
        const { name, password, email } = registerBodySchema.parse(
            request.body,
        );

        try {
            await this.createUserUseCase.execute({ name, password, email });
            return reply
                .status(201)
                .send({ message: '✔️  User created successfully' });
        } catch (err) {
            if (err instanceof UserAlreadyExistsError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { CreateUserController };
