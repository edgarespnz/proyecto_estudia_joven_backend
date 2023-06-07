import { ContentFactory } from "../factories/content.factory.js";

export const createNewContent = async (req, res) => {
    try {
        const {FK_course , ...contentData} = req.body;

        //usamos el factory para crear un nuevo contenido
        const contentFactory = new ContentFactory();
        const newContent = contentFactory.createContent({
            ...contentData,
            FK_course,
        });

        await newContent.save();

        return res.status(200).json({
            ok: true,
            content: newContent,
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