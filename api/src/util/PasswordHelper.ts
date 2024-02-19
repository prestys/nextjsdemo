import * as bcrypt from "bcrypt";

async function hashPassword(password: string): Promise<string> {
    const saltRounds: number = 12;
    return bcrypt.hash(password, saltRounds);
}

// Compare the hashes
async function comparePasswords(candidatePassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, hashedPassword);
}

export {
    hashPassword,
    comparePasswords
}