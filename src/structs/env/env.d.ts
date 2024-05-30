declare namespace NodeJS {
    interface ProcessEnv {
        PORT: number;
        MYSQL_USER: string;
        MYSQL_PASSWORD: string;
        MYSQL_DATABASE: string;
    }
}
