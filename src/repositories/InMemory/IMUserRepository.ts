import { IUserDTO } from '../IUserRepository';
import { UserRepository } from '../UserRepository';

type UserInMemory = {
    name: string;
    email: string;
    password: string;
};

class InMemoryUserRepository implements UserRepository {
    public registers: UserInMemory[] = [];

    async findByEmail(email: string): Promise<boolean> {
        const user = this.registers.find((field) => field.email === email);

        if (!user) {
            return false;
        }

        return true;
    }

    async create(data: IUserDTO): Promise<IUserDTO> {
        return {
            name: data.name,
            email: data.email,
            password: data.password,
        };
    }
}

export { InMemoryUserRepository };
