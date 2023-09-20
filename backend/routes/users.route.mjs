import { Router } from "express";
import { createUser, deleteUser, getSingleUser, getUsers, updateUser } from "../controllers/users.controller.mjs";
const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.posy("/", createUser);


export default usersRouter;