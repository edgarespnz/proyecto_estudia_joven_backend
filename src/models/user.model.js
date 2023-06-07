import  { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Course from './course.model.js';

export class User extends Model { }

User.init(
    {
        PK_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        var_name: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        var_lastname : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        var_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        var_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        var_role: {
            type: DataTypes.ENUM('alumno', 'profesor', 'administrador'),
            allowNull: false,
        },
        bool_email_confirmed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
      }
)

export default User;