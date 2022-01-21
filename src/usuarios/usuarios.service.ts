/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsuariosService {
  constructor(private databaseService: DatabaseService) {}

  async buscar() {
    const db = this.databaseService.getConnection();
    return await db.schema.raw('select * from user');
  }
}
