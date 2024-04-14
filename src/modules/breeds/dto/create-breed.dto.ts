import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateBreedDto {
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    name:string;
}
