import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export class Test extends Model { }

Test.init(
  {
    PK_test: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    var_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    var_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Test',
    tableName: 'tests',
  }
);

export default Test;
