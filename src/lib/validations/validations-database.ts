import { Op } from "sequelize";
import { Model, ModelCtor } from "sequelize-typescript";

export async function singleRegistry<T extends Model>(model: ModelCtor<T>, column: string, value: string) {
    let where: any = {
        [column]: {
            [Op.eq]: value
        }
    };

    let result = await model.findOne({
        where
    })
    if (result)
        throw new Error('Cats existent');
}