/* eslint-disable prettier/prettier */
import { UsuariosService } from './usuarios.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsuariosController } from './usuarios.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, DatabaseService],
})
export class UsuariosModule {}
