import mongoose from "mongoose";

const connect = () => {
    if (!process.env.MONGODB_URL) {
        console.error("Can not find mongo connection string..");
        return process.exit(1);
    }

    mongoose.connect(
        process.env.MONGODB_URL
    );
}

export { connect };