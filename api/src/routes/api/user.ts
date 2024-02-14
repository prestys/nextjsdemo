import { Router } from "express";
import { UserController } from "../../controllers/user/user";

const router: Router = Router();

router.post("/create", UserController.create)

export { router };