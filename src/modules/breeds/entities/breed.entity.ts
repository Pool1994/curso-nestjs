import { Column, CreatedAt, DataType, DeletedAt, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { IBreadAttributes, IBreadAttributesCreation } from "../contracts/BreedContracts";
import { Cats } from "src/modules/cats/entities/cats.entity";

@Table({
    tableName: "breeds"
})
export class Breed extends Model<IBreadAttributes, IBreadAttributesCreation> {
    @Column({
        type:DataType.STRING(20)
    })
    name: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt?: Date;
    
    @DeletedAt
    deletedAt?: Date;
    
    @HasMany(() => Cats)
    cats: Array<Cats>
}
