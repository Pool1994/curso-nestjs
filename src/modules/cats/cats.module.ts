import { Module } from '@nestjs/common';
import { CastsService } from './cats.service';
import { CastsController } from './cats.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cats } from './entities/cats.entity';

@Module({
  controllers: [CastsController],
  providers: [CastsService],
  imports:[SequelizeModule.forFeature([Cats])]
})
export class CastsModule {}
