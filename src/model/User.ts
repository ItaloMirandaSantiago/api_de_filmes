import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/Mysql"

export interface UserInstance extends Model {
    id: number,
    name: string,
    password: string
}

export const User = sequelize.define<UserInstance>('users', {
    id: {
        primaryKey: true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movies: {
        type: DataTypes.ARRAY(DataTypes.NUMBER),
        allowNull: true,
    }
    }, {
        tableName: "users",
        timestamps: false
    })