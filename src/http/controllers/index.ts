import { CreateUserController } from '@/http/controllers/CreateUserController';
import { UserRepository } from '@/repositories/UserRepository';
import { AuthenticateUserUseCase } from '@/useCases/authenticateUser/AuthenticateUserUseCase';
import { CreateUserUseCase } from '@/useCases/createUser/CreateUserUseCase';
import { AuthenticateUserController } from './AuthenticateUserController';

// Register
const userRepository = UserRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

// Auth
const authUserRepository = UserRepository.getInstance();
const authUserUseCase = new AuthenticateUserUseCase(authUserRepository);
const authUserController = new AuthenticateUserController(authUserUseCase);

// Profile

export { authUserController, createUserController };
