import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { ICatsAttributes, ICatsAttributesCreation } from "../contracts/CatsContract";
import { CreationOptional } from "sequelize";
import { Breed } from "src/modules/breeds/entities/breed.entity";

@Table({
    tableName: "cats"
})
export class Cats extends Model<ICatsAttributes, ICatsAttributesCreation> {
    @Column({
        allowNull: false,
        type: DataType.STRING(20)
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER
    })
    age: number;

    @ForeignKey(() => Breed)
    @Column({
        allowNull: false,
    })
    breedId: number;

    @DeletedAt
    deletedAt?: Date;

    @CreatedAt
    createdAt: CreationOptional<Date>;

    @UpdatedAt
    updatedAt?: CreationOptional<Date>;

    @BelongsTo(() => Breed)
    breed: Breed;
}

