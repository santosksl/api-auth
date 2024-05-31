import { IAuthUserDTO, IUserRepository } from '@/repositories/IUserRepository';
import { InvalidCredentialsError } from '../errors/InvalidCredentials';

interface AuthUserUseCaseResponse {
    user: IAuthUserDTO;
}

class AuthenticateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute({
        email,
        password,
    }: IAuthUserDTO): Promise<AuthUserUseCaseResponse> {
        const alreadyExistsEmail = this.userRepository.findByEmail(email);

        if (!alreadyExistsEmail) {
            throw new InvalidCredentialsError();
        }

        const doesPasswordMatches =
            await this.userRepository.validatePasswordWithHash({
                email,
                password,
            });

        if (!doesPasswordMatches) {
            throw new InvalidCredentialsError();
        }

        const user = {
            email,
            password,
        };

        return { user };
    }
}

export { AuthenticateUserUseCase };
