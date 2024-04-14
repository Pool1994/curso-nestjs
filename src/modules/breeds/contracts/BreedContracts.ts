import { Optional } from "sequelize";
import { Timestamps } from "src/lib/TimesTamp";

export interface IBreadAttributes extends Timestamps{
    id:number;
    name:string;
}

export interface IBreadAttributesCreation extends Optional<IBreadAttributes,'id'>{}