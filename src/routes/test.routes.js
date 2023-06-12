import { Router } from "express";
import { createNewTest, getTests } from "../controllers/test.controller.js";

 const router = new Router();

router.post('/create-new-test/:id_curso', createNewTest);
router.get('/get-tests/:id_curso', getTests);

export default router;