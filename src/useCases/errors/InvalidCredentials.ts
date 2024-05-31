class InvalidCredentialsError extends Error {
    constructor() {
        super('❌ Invalid Credentials');
    }
}

export { InvalidCredentialsError };
