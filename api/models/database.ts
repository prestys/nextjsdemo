import mongoose from "mongoose";

const connect = () => {
    mongoose.connect(
        process.env.MONGODB_URL
    );
}

export { connect };