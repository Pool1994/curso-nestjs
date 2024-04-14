import {  BelongsTo, BelongsToMany, Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Permission } from "./permissions.entity";
import { RoleHasPermission } from "./has/role_has_permissions.entity";
export enum FullAccess {
    Yes = "YES",
    No = "NO"
}
export enum AllowRemove {
    Yes = "YES",
    No = "NO"
}
@Table
export class Role extends Model<Role> {

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        unique: true
    })
    name: string;
    description: string;

    @Column({
        type:DataType.ENUM(...Object.values(FullAccess)),
        defaultValue:FullAccess.No
    })
    fullAccess: FullAccess;

    @Column({
        type:DataType.ENUM(...Object.values(AllowRemove)),
        defaultValue:AllowRemove.Yes
    })
    allowRemove: AllowRemove;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @BelongsToMany(()=>Permission,()=>RoleHasPermission)
    permissions:Array<Permission>
}