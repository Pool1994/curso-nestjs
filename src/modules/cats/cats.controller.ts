import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CastsService } from './cats.service';
import { CreateCatDto } from './dto/create-cast.dto';
import { UpdateCatDto } from './dto/update-cast.dto';

@Controller('cats')
export class CastsController {
  constructor(private readonly castsService: CastsService) { }

  @Post()
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
  findAll() {
    return this.castsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.castsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCastDto: UpdateCatDto) {
    return this.castsService.update(+id, updateCastDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.castsService.remove(+id);
  }
}
