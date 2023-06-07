import { Router } from "express";
import { createUser, login } from "../controllers/user.controller.js";

const router = Router();

router.post('/login', login);
router.post("/create-new-user", createUser);


export default router