import sequelize from "sequelize";
import { BelongsTo, BelongsToMany, Column, CreatedAt, DataType, Model, Table, UpdatedAt, } from "sequelize-typescript";
import { RoleHasPermission } from "src/modules/roles/entities/has/role_has_permissions.entity";
import { UserHasRole } from "src/modules/roles/entities/has/user_has_roles.entity";
import { Permission } from "src/modules/roles/entities/permissions.entity";
import { Role } from "src/modules/roles/entities/role.entity";
@Table
export class User extends Model<User> {
    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        allowNull: false
    })
    password: string;

    @Column
    prueba:string;
    
    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @BelongsToMany(() => Role, {
        through: { model: () => UserHasRole }, // Name of your join table
        foreignKey: 'userId',
        otherKey: 'roleId',
    })
    roles: Array<Role>
}
