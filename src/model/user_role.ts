'use strict';

import { Model, DataTypes, SmallIntegerDataType } from 'sequelize';
import { SEQ_CONNECTION } from '../config/db';

export class UserRole extends Model {
    public id: number;
    public user_id: string;
    public role_id: string;
    public uuid: string;
    public status: number;
    public created_at: Date;
    public updated_at: Date;
}
UserRole.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        status: {
            type: new DataTypes.SMALLINT(),
            defaultValue: 1,
        }
    },
    {
        tableName: 'user_role',
        sequelize: SEQ_CONNECTION, // this bit is important db refrence
    },
);
