import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import coffeeShopsRouter from "./api/v1/coffeeShopsRouter.js"
import reviewVotesRouter from "./api/v1/reviewVotesRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);


rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); 
rootRouter.use("/api/v1/coffee-shops", coffeeShopsRouter)
rootRouter.use("/api/v1/reviews/:reviewId/votes", reviewVotesRouter)

export default rootRouter;