import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export class Material extends Model { }

Material.init(
  {
    PK_content: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    var_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Material',
    tableName: 'materials',
  }
);

export default Material;
