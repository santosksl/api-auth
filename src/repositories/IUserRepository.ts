interface IUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IAuthUserDTO {
    email: string;
    password: string;
}

interface IUserRepository {
    create({ name, email, password }: IUserDTO): Promise<IUserDTO>;
    findByEmail(email: string): Promise<boolean>;
    validatePasswordWithHash({
        email,
        password,
    }: IAuthUserDTO): Promise<boolean>;
}

export { IAuthUserDTO, IUserDTO, IUserRepository };
