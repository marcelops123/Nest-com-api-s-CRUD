/* eslint-disable prettier/prettier */
import { Body, Injectable, Param } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './criar-usuarios';

@Injectable()
export class UsuariosService {
  create(CreateUserDto: CreateUserDto) {
    throw new Error('Método não implementado.');
  }
  constructor(private databaseService: DatabaseService) {}

  async buscar(id: number) {
    const db = this.databaseService.getConnection();
    return await db.schema.raw(`SELECT * FROM USER WHERE id = '${id}'`);
  }
  
  async alterar(id: number, nome: string) {
    const db = this.databaseService.getConnection();
    return await db.schema.raw(`UPDATE user SET nome = 'marcelo', email = 'teste@gmail.com ', senha = '123teste' WHERE (id = '${id}') `)
  }
  async adicionar(@Body()body: CreateUserDto) {

    const db = this.databaseService.getConnection();
    console.log(body.nome, body.id, body.email, body.senha)
  return await db.schema.raw(`INSERT INTO user (id, nome, email, senha) VALUES ('${body.id}', '${body.nome}', '${body.email}', '${body.senha}')`)
        
  }
  async deletar(id: number) {
    
    const db = this.databaseService.getConnection();
    return await db.schema.raw(`DELETE FROM user WHERE id = '${id}' `)
  }
}
