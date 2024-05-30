import fs from 'node:fs/promises';
import { Database } from '../database';

const fileDirectory = './src/models/User.sql';

class UserModel {
    public static async createModel() {
        try {
            const db = await Database.getInstance();
            const connection = await db.getConnection();
            const readFileSQL = await fs.readFile(fileDirectory, 'utf-8');

            connection.query(readFileSQL);
            console.log('✅ User Model');
        } catch (err) {
            console.error(`❌ User model:\n${err}`);
        }
    }
}

export { UserModel };
