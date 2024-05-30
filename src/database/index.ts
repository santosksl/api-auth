import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import { env } from '../structs/env';

const AcessFromMySQL: ConnectionOptions = {
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    rowsAsArray: true,
};

class Database {
    private static instance: Database;
    private static connection: Connection;

    private constructor() {}

    public static async getInstance(): Promise<Database> {
        if (!Database.instance) {
            Database.instance = new Database();
            await Database.instance.createConnection();
        }
        return Database.instance;
    }

    private async createConnection(): Promise<Connection> {
        try {
            Database.connection = await mysql.createConnection(AcessFromMySQL);
            console.log('✅ Connection to mysql established successfully');
            return Database.connection;
        } catch (err) {
            console.error('❌ Invalid connection to mysql', err);
            throw new Error('Invalid connection to mysql');
        }
    }

    public async getConnection(): Promise<Connection> {
        if (!Database.connection) {
            console.error('❌ Connection not established');
            throw new Error('Connection not established');
        }

        console.log('✅ Connection established');
        return Database.connection;
    }
}

export { Database };
