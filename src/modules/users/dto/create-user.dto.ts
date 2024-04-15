import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(5)
    @MaxLength(50)
    name: string;

    @IsString()
    @IsEmail()
    @MinLength(5)
    @MaxLength(50)
    email: string;
    
    @IsString()
    password: string;
}
