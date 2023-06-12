import { Course } from "../models/course.model.js";
import User from "../models/user.model.js";


export const createNewCourse = async (req, res) => {
    try {
        
        //crear el cuerpo de la petición
        const { var_name, var_grado_academico } = req.body;

        const newCourse = await Course.create(
            {
                var_name: var_name,
                var_grado_academico: var_grado_academico,
            }
        );
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

//obtener un curso por ID del curso
export const getCourse = async (req, res) =>{

    const idCurso = req.params.idCurso

    try {
        const curso = await Course.findOne({
            where: {
                PK_course: idCurso
            }
        });

        return res.status(200).json({
            ok: true,
            data: curso
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Curso no encontrado'
        })
    }
}

//devolver lista de cursos por Id de profesor
export const getCourseByTeacher = async (req, res) => {

    const { teacherId } = req.body

    try {
        const teacher = await User.findOne({
            where: {
                PK_user: teacherId,
                var_role: 'profesor' || 'alumno'
            }
        });

        if (!teacher) {
            return res.status(500).json({
                ok: false,
                message: "Profesor no existe"
            })
        }

        const courses = await Course.findAll({
            where: {
                FK_user: teacherId
            }
        })

        return res.status(200).json({
            ok: true,
            message: "Cursos obtenidos correctamente",
            lista_de_cursos: courses
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            message: "Error al obtener los cursos"
        })
    }
}


export const getAllCourses = async (req,res)=>{
    try {
        const courses = await Course.findAll();
        return res.status(200).json({
            ok: true,
            data: courses
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "error al obtener cursos"
        })
    }
} 