import Sequelize from 'sequelize';

import * as dotenv from 'dotenv'
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgres',
        schema: process.env.DB_SCHEMA,
        dialectOptions: {
            useUTC: false, 
        },
        timezone: '-05:00', // for writing to database
    }
    
);