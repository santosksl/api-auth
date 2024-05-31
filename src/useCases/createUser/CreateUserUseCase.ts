import { IUserDTO, IUserRepository } from '@/repositories/IUserRepository';
import { UserAlreadyExistsError } from '../errors/UserAlreadyExists';

interface UserUseCaseResponse {
    user: IUserDTO;
}

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute({
        name,
        email,
        password,
    }: IUserDTO): Promise<UserUseCaseResponse> {
        const alreadyExistsEmail = await this.userRepository.findByEmail(email);

        if (alreadyExistsEmail) {
            console.error('E-mail already exists');
            throw new UserAlreadyExistsError();
        }

        const user = await this.userRepository.create({
            name,
            email,
            password,
        });

        return { user };
    }
}

export { CreateUserUseCase };
