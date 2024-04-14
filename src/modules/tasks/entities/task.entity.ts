import { Column, CreatedAt, DataType, Model, Table, UpdatedAt, } from "sequelize-typescript";
import { InferAttributes, InferCreationAttributes, Optional, Sequelize } from "sequelize"
import { Timestamps } from "src/lib/TimesTamp";
export interface TaskAttributes extends Timestamps {
    id: number;
    title: string;
    description: string;
    status: StatusTask;
}
export interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> { }
export enum StatusTask {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}
@Table({ tableName: "tasks" })
export class Task extends Model<TaskAttributes,TaskCreationAttributes> {
    @Column
    title: string

    @Column
    description: string

    @Column({
        type: DataType.ENUM(...Object.values(StatusTask)),
        defaultValue: StatusTask.ACTIVE
    })
    status: StatusTask;
    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt?: Date;
}
