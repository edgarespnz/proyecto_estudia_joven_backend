import { Router } from "express";
import { createNewMaterial, getMaterialByCourseId, storage} from "../controllers/material.controller.js"
import multer from "multer";

const router = Router();
const upload = multer({ storage: storage });

router.post('/create-new-material/:idCourse', upload.single('file'), createNewMaterial);
router.get('/get-material/:idCurso', getMaterialByCourseId);

export default router