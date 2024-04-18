import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Permission } from "../permissions.entity";
import { Role } from "../role.entity";
@Table({
    timestamps:false,
    tableName:"role_has_permissions"
})
export class RoleHasPermission extends Model<RoleHasPermission> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;
    
    @ForeignKey(()=>Role)
    @Column({
        allowNull: false
    })
    roleId: number;

    @ForeignKey(()=>Permission)
    @Column({
        allowNull: false
    })
    permissionId: number;

    @BelongsTo(() => Role)
    role:Role

    @BelongsTo(() => Permission)
    permission:Permission
}