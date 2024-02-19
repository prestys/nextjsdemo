"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_1 = require("./user");
const API_VERSION = "v1";
const router = (0, express_1.Router)();
exports.router = router;
router.use(`/${API_VERSION}/user`, user_1.router);
