import { Model, ModelCtor } from "sequelize-typescript";
import { PaginateOptions, PaginateResult } from "./PaginateContract";

export async function Paginate<T extends Model>(model: ModelCtor<T>, modelOptions: PaginateOptions<T>): Promise<PaginateResult<T>> {
    let { limit, page, findOptions, transformData } = modelOptions;
    try {

        findOptions = {
            ...findOptions,
            offset: getOffset(page, limit),
            limit
        }
        let { count, rows } = await model.findAndCountAll(findOptions);
        if (transformData && typeof transformData === 'function') {
            rows = transformData(rows);
        }
        return {
            previousPage: getPreviousPage(page),
            currentPage: page,
            nextPage: getNextPage(page, limit, count),
            total: count,
            perPage: limit,
            data: rows
        }
    } catch (ex) {
        return {
            previousPage: null,
            currentPage: page,
            nextPage: null,
            total: 0,
            perPage: limit,
            data: [],
            exception: ex
        }
    }
}
const getOffset = (page: number, limit: number) => {
    return (page * limit) - limit;
}
const getNextPage = (page: number, limit: number, total: number) => {
    if ((total / limit) > page) {
        return page + 1;
    }
    return null;
}
const getPreviousPage = (page: number) => {
    if (page <= 1) {
        return null;
    }
    return page - 1;
}