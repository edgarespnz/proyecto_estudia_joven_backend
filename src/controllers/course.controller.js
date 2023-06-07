import { Course } from "../models/course.model.js";
import { CourseFactory } from "../factories/curso.factory.js";

export const createNewCourse = async (req, res) => {
    try {
        const { FK_user, ...courseData } = req.body; // Desestructurar FK_user y el resto de los datos del curso

        const courseFactory = new CourseFactory();
        const newCourse = courseFactory.createCourse({
            ...courseData,
            FK_user,
        });

        await newCourse.save();

        return res.status(200).json({
            ok: true,
            course: newCourse,
            message: "Curso creado satisfactoriamente",
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            ok: false,
            message: "Error al crear curso",
        });
    }
};
