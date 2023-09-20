import { Router } from "express";
const usersRouter = Router();

usersRouter.get("/", (res, req) => {
    res.send("Users route");
})

export default usersRouter;