import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cast.dto';
import { UpdateCatDto } from './dto/update-cast.dto';
import { Cats } from './entities/cats.entity';
import { InjectModel } from '@nestjs/sequelize';
import { singleRegistry } from 'src/lib/validations/validations-database';
import { Op } from "sequelize";
import { Paginate } from 'src/lib/pagination/Paginate';
import { Breed } from '../breeds/entities/breed.entity';
@Injectable()
export class CastsService {
  constructor(@InjectModel(Cats) private readonly catsModel: typeof Cats) {
  }
  async create(createCastDto: CreateCatDto) {
    await singleRegistry(Cats, 'name', createCastDto.name);
    return this.catsModel.create(createCastDto);
  }

  async findAll() {
    let result = await Paginate(Cats, {
      page: 1,
      limit: 10,
      findOptions:{
        include:[{
          model:Breed,
          required:true,
        }]
      }
    });
    return result;
  }

  findOne(id: number) {
    return this.catsModel.findOne({ where: { id } });
  }

  update(id: number, updateCastDto: UpdateCatDto) {
    return this.catsModel.update({
      ...updateCastDto
    }, {
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.catsModel.update({
      deletedAt: new Date()
    }, {
      where: {
        id
      }
    });
  }
}
