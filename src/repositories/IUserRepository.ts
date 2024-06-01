interface IUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IAuthUserDTO {
    id?: number;
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
    getUserId(emailForQuery: string): Promise<number>;
}

export { IAuthUserDTO, IUserDTO, IUserRepository };
