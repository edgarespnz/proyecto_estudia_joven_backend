import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export class Question extends Model {}

Question.init(
  {
    PK_question: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    //contenido de la pregunta
    var_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //tipo de pregunta
    var_type: {
        type: DataTypes.ENUM('opcion_multiple', 'verdadero_falso'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
  }
);

export default Question;
