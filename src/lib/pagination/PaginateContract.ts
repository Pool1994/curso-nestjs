import { FindOptions } from "sequelize";

export interface PaginateOptions<T> {
    limit: number;
    page: number;
    findOptions?: FindOptions<T>,
    transformData?: (records:T[]) => T[],
}
export interface PaginateResult<T> {
    previousPage?: number;
    currentPage: number;
    nextPage?: number;
    total: number;
    perPage: number;
    data: Array<T>;
    exception?: string;
}