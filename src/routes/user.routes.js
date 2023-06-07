import { Router } from "express";
import { createUser, login } from "../controllers/user.controller.js";

const router = Router();

router.post('/login', login);
router.post("/create-new-user", createUser);
router.get('get-user/')

export default router