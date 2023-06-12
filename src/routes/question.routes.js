import { Router } from "express";
import { createNewQuestion } from "../controllers/question.controller.js";

const router = Router();

router.post('/create-new-question', createNewQuestion)

export default router