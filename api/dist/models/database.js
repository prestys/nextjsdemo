"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    if (!process.env.MONGODB_URL) {
        console.error("Can not find mongo connection string..");
        return process.exit(1);
    }
    mongoose_1.default.connect(process.env.MONGODB_URL);
};
exports.connect = connect;
