import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "../role.entity";
import { User } from "src/modules/users/entities/user.entity";

@Table({
    timestamps: false,
    tableName:"user_has_roles"
})
export class UserHasRole extends Model<UserHasRole> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Role)
    @Column({
        allowNull: false
    })
    roleId: number;

    @ForeignKey(() => User)
    @Column({
        allowNull: false
    })
    userId: number;

    @BelongsTo(() => Role)
    role: Role

    @BelongsTo(() => User)
    user: User
}