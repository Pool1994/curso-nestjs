import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Breed } from './entities/breed.entity';

@Module({
  controllers: [BreedsController],
  providers: [BreedsService],
  imports:[SequelizeModule.forFeature([Breed])]
})
export class BreedsModule {}
