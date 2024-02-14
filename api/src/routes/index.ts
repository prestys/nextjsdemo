import { Router } from "express";
import { router as apiRouter } from "./api"

const router: Router = Router();

router.use("/api", apiRouter);

export { router };