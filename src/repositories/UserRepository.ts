import { hash } from 'bcryptjs';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { Database } from '../database';
import { IUserDTO, IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
    private static instance: UserRepository;

    public static getInstance(): UserRepository {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }

    public async create({
        name,
        email,
        password,
    }: IUserDTO): Promise<IUserDTO> {
        const INSERT =
            'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?);';

        const db = await Database.getInstance();
        const conn = await db.getConnection();
        const passwordHash = await hash(password, 6);

        await conn.query(INSERT, [name, email, passwordHash]);

        return { name, email, password };
    }

    public async findByEmail(email: string): Promise<boolean> {
        const SELECT = 'SELECT email FROM users WHERE email = ?';
        const db = await Database.getInstance();
        const conn = await db.getConnection();

        const [query]: [RowDataPacket[], FieldPacket[]] = await conn.execute(
            SELECT,
            [email],
        );

        return query.length > 0;
    }
}

export { UserRepository };
