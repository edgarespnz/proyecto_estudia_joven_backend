import { Router } from "express";
import {createNewContent} from "../controllers/content.controller.js"

const router = Router();

router.post('/create-new-content', createNewContent);


export default router