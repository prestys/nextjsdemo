import { Router } from "express";
import { router as userRouter } from "./user"
import {verifyToken} from "../../middleware/TokenVerifier";

const API_VERSION = "v1";
const router: Router = Router();

router.use(`/${API_VERSION}/user`, userRouter)
router.get('/', verifyToken, (req, res) => {
    res.send(req.user);
})

export { router };