import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CastsService } from './cats.service';
import { CreateCatDto } from './dto/create-cast.dto';
import { UpdateCatDto } from './dto/update-cast.dto';
import { AuthGuards } from '../auth/guards/guards.guard';
import { HasPermission } from '../auth/decorator/has-permission.decorator';

@UseGuards(AuthGuards)
@Controller('cats')
export class CastsController {
  constructor(private readonly castsService: CastsService) { }

  @Post()
  @HasPermission('cats.store')
  async create(@Body() createCastDto: CreateCatDto) {
    let result = await this.castsService.create(createCastDto);
    if (result) {
      return {
        message: "Cats agregado correctamente",
        result
      };
    } else {
      throw new Error('Ocurrio un error al registrar al gato')
    }
  }

  @Get()
  @HasPermission('cats.list')
  findAll() {
    return this.castsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.castsService.findOne(+id);
  }

  @Patch(':id')
  @HasPermission('cats.update')
  update(@Param('id') id: string, @Body() updateCastDto: UpdateCatDto) {
    return this.castsService.update(+id, updateCastDto);
  }

  @Delete(':id')
  @HasPermission('cats.delete')
  remove(@Param('id') id: string) {
    return this.castsService.remove(+id);
  }
}
