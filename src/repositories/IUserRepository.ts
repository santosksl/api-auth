interface IUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IUserRepository {
    create({ name, email, password }: IUserDTO): Promise<IUserDTO>;
    findByEmail(email: string): Promise<boolean>;
}

export { IUserRepository, IUserDTO };
