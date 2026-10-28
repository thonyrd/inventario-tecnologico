import {
 // IsInt,
  IsNotEmpty,
//  IsOptional,
  IsString,
//  Min,
  MinLength,
 } from 'class-validator';

export class CreateEquipoDto {

  @IsString()
  @MinLength(3)
  codigoInventario: string;

  @IsString()
  @MinLength(3)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  fechaAdquisicion: string;

  @IsString()
  observaciones: string;
}