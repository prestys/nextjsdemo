declare namespace NodeJS {
    interface ProcessEnv {
        MONGODB_URL: string;
        JWT_SUPER_SECRET: string;
    }
}