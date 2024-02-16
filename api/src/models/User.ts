import { Schema, model } from "mongoose";

export interface IUser {
    id: Schema.Types.ObjectId,
    email: string,
    password: string
}

const userSchema: Schema = new Schema<IUser>({
    email: {type: String, required: [true, "Email is required!"]},
    password: {type: String, required: [true, "Password is required!"]}
})

const User = model("User", userSchema);

export { User };