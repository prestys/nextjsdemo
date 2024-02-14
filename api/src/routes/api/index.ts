import { Router } from "express";
import { router as userRouter } from "./user"

const API_VERSION = "v1";
const router: Router = Router();

router.use(`/${API_VERSION}/user`, userRouter)

export { router };