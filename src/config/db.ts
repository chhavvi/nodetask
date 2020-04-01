import { Sequelize } from 'sequelize';
export const SEQ_CONNECTION = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        pool: {
            max: 70,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
);
