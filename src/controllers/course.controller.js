import { Course } from "../models/course.model.js";
import { CourseFactory } from "../factories/curso.factory.js";

export const createNewCourse = async (req,res)=>{
    try {
        const courseFactory = new CourseFactory();
        const newCourse = courseFactory.createCourse(req.body);
        
        await newCourse.save();

        return res.status(200).json({
            ok: true,
            course:newCourse,
            message: "Curso creado satisfactoriamente"
        });

    } catch (error) {
        console.log(error);
        return res.status(200).json({
            ok:false,
            message: "Error al crear curso"
        })
    }
}