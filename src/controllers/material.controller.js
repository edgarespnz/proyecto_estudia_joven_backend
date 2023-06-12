import Material from "../models/material.model.js";
import multer from "multer";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/assets/material'); // Directorio donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Usa el nombre original del archivo
    }
  });

export const createNewMaterial = async (req, res) => {
    try {
        const {var_name } = req.body;
        const file = req.file;
        const FK_course = req.params.idCourse;

        console.log("var name : " + var_name);
        console.log("file : " + file);

        const newMaterial = await Material.create({
            var_name : var_name,
            file : file,
            FK_course : FK_course,
        });
        
        return res.status(201).json({
            ok: true,
            material: newMaterial,
            message: "Contenido creado satisfactoriamente"
        });

    } catch (error) {
        console.log(error);
        return res.status(200).json({
            ok:false,
            message: "Error al crear contenido"
        })
    }
}

export const getMaterialByCourseId = async (req, res) => {
    try {
        const idCurso = req.params.idCurso;
        const material = await Material.findAll({
            where: {
                FK_course : idCurso,
            }
        });

        return res.status(200).json({
            ok: true,
            data: material
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message : "No se pudo encontrar el material"
        })
    }
}