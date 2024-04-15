import sequelize from "sequelize";
import { BelongsToMany, Column, CreatedAt, DataType, Model, Table, UpdatedAt, } from "sequelize-typescript";
import { UserHasRole } from "src/modules/roles/entities/has/user_has_roles.entity";
import { Role } from "src/modules/roles/entities/role.entity";
@Table
export class User extends Model<User> {
    @Column({
        allowNull: false,
        type:DataType.STRING(50)
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
