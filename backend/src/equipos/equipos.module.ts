import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Equipo } from './entities/equipo.entity';
import { EquipoController } from './equipos.controller';
import { EquipoService } from './equipos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Equipo]),
  ],
  controllers: [EquipoController],
  providers: [EquipoService],
})
export class EquiposModule {}



