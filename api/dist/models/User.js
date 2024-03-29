"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, "Email is required!"] },
    password: { type: String, required: [true, "Password is required!"] }
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.User = User;
