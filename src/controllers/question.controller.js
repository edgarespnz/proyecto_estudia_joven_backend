import Question from "../models/question.model.js";


//crear nueva pregunta
export const createNewQuestion = async (req, res) =>{

    const {contenido, tipo} = req.body;

    const id_test = req.params.id_test

    try {
        if(tipo == 'opcion_multiple' || tipo == 'verdadero_falso'){
            const newQuestion = await Question.create({
                var_text : contenido,
                var_type : tipo,
                FK_test : id_test
            });

            return res.status(200).json({
                ok: true,
                message: 'Nueva pregunta añadida satisfactoriamente'
            })
        }
        else{
            return res.status(500).json({
                ok: false,
                message: 'validación de tipo de pregunta inválida'
            })
        }

    } catch (error) {
        console.log(error)
        return(res.status(500).json({
            ok: false,
            message: "Error en el servidor"
        }))
    }
}

//obtener el banco de preguntas

const getQuestionsByIdTest = async (req,res)=> {
    
}
