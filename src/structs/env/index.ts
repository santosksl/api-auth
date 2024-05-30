import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(process.env.PORT),
    MYSQL_USER: z.string().default(process.env.MYSQL_USER),
    MYSQL_PASSWORD: z.string().default(process.env.MYSQL_PASSWORD),
    MYSQL_DATABASE: z.string().default(process.env.MYSQL_DATABASE),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error('❌ Invalid enviroment variables', _env.error.format());
    throw new Error('Invalid enviroment variables');
}

export const env = _env.data;
