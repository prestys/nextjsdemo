"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_1 = require("../../controllers/user/user");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/create", user_1.UserController.create);
