import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/Mysql"

export interface UserInstance extends Model {
    id: number,
    name: string,
    password: number
}

export const User = sequelize.define<UserInstance>('users', {
    id: {
        primaryKey: true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    }}, {
        tableName: "users",
        timestamps: false
    })