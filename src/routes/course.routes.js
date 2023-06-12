import { Router } from "express";
import { createNewCourse, getCourse, getCourseByTeacher, getAllCourses } from "../controllers/course.controller.js";

const router = Router();

router.post('/create-new-course', createNewCourse);
router.post('/get-courses', getCourseByTeacher);
router.get('/get-course/:idCurso', getCourse);
router.get('/get-all-courses', getAllCourses)

export default router