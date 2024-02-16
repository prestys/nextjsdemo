import { Router } from "express";
import { UserController } from "../../controllers/user/user";
import {User} from "../../models/User";

const router: Router = Router();

router.post("/create", UserController.create);
router.post("/login", UserController.login);
router.get("/verify", UserController.verify);

export { router };