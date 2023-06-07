import { Router } from "express";
import { createNewCourse } from "../controllers/course.controller.js";

const router = Router();

router.post('/create-new-course', createNewCourse);


export default router