import {IsInt, IsOptional, IsPositive, IsString, MaxLength, MinLength} from "class-validator";
export class CreateCatDto {
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name:string;
    
    @IsInt()
    @IsPositive()
    age:number;

    @IsInt()
    @IsPositive()
    breedId:number
}
