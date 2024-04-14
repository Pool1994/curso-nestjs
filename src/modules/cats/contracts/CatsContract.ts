import { Optional } from "sequelize";
import { Timestamps } from "src/lib/TimesTamp";

export interface ICatsAttributes extends Timestamps{
    id:number;
    name:string;
    age:number;
    breed:string;
    deletedAt?:Date;
}

export interface ICatsAttributesCreation extends Optional<ICatsAttributes,'id'>{}