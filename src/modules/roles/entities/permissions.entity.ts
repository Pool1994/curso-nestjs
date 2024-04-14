import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";

@Table
export class Permission extends Model<Permission>{
    @Column({
        allowNull:false,
        type:DataType.STRING(100),
        unique:true
    })
    name:string;

    @Column({
        allowNull:false,
        type:DataType.STRING(100)
    })
    title:string;

    @Column({
        allowNull:true,
        type:DataType.TEXT
    })
    description:string;

    @Column({
        type:DataType.STRING(100),
        allowNull:false
    })
    moduleName:string;

    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    parentId:number;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}
