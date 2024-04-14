import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cast.dto';
import { IsInt, IsOptional, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateCatDto extends PartialType(CreateCatDto) {
    
}
