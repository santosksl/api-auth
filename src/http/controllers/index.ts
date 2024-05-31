import { CreateUserController } from '@/http/controllers/CreateUserController';
import { UserRepository } from '@/repositories/UserRepository';
import { CreateUserUseCase } from '@/useCases/createUser/CreateUserUseCase';

const userRepository = UserRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
