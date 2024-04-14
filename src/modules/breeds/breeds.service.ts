import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Breed } from './entities/breed.entity';
import { singleRegistry } from 'src/lib/validations/validations-database';
import { Paginate } from 'src/lib/pagination/Paginate';
import { Cats } from '../cats/entities/cats.entity';

@Injectable()
export class BreedsService {
  constructor(@InjectModel(Breed) private readonly breedModel:typeof Breed){}
  async create(createBreedDto: CreateBreedDto) {
    await singleRegistry(Breed,'name',createBreedDto.name);
    return this.breedModel.create(createBreedDto);
  }

  findAll() {
    return Paginate(Breed,{
      page:1,
      limit:10,
      findOptions:{
        include:[Cats]
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} breed`;
  }

  update(id: number, updateBreedDto: UpdateBreedDto) {
    return `This action updates a #${id} breed`;
  }

  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
