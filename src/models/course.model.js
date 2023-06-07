import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from './user.model.js';

export class Course extends Model { }

Course.init(
    {
        PK_course: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        var_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        var_grado_academico: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Course',
        tableName: 'courses',
    }
);

export default Course;
