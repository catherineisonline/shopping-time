import { Router } from "express";
import { getUsers } from "../controllers/users.controller.mjs";
const usersRouter = Router();

usersRouter.get("/", getUsers);

export default usersRouter;