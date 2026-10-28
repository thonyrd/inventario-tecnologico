import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EquipoService } from './equipos.service';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { CreateEquipoDto } from './dto/create-equipo.dto';

@Controller('Equipos')
export class EquipoController {
  constructor(
    private readonly EquipoService: EquipoService,
  ) {}

  @Get()
  findAll() {
    return this.EquipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.EquipoService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateEquipoDto) {
    return this.EquipoService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEquipoDto,
  ) {
    return this.EquipoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.EquipoService.remove(id);
  }
}
