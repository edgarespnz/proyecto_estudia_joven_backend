import Test from "../models/test.model.js";

export const createNewTest = async (req, res) => {

    const { var_name, var_duration } = req.body;
    const id_curso = req.params.id_curso
    try {
        Test.create({
            var_name: var_name,
            var_duration: var_duration,
            FK_course: id_curso,
        });

        return res.status(200).json({
            ok: true,
            message: "Nuevo examen creado satisfactoriamente"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "error en el servidor"
        })
    }
}

export const getTests = async (req, res) => {
    const {id_curso}  = req.params;
    try {
        const tests = await Test.findAll({
            where: {
                FK_course : id_curso
            }
        })
        return res.status(200).json({
            ok: true,
            data: tests
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Error en el servidor"
        })
    }
}