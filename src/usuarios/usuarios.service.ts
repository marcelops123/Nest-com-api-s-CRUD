/* eslint-disable prettier/prettier */
import { Body, Injectable, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './criar-usuarios';

@Injectable()
export class UsuariosService {
  
  constructor(private databaseService: DatabaseService) {}


  
  async alterar(@Body() body: CreateUserDto) {
    const db = this.databaseService.getConnection();
    return await db.schema.raw(`UPDATE user SET nome = '${body.InsertNome}', email = '${body.InsertEmail} ', senha = '${body.InsertSenha}' WHERE (id = '${body.id}') `)
  }
  async buscar(@Body() body: any) {
    const db = this.databaseService.getConnection();
    console.log(body)
    return await db.schema.raw(`SELECT * FROM usuarios`);
    
    

    

    
  }

    async adicionar(@Body() body: CreateUserDto){
    const db = this.databaseService.getConnection();
    console.log("Usuário cadastrado!")
    return await db.schema.raw(`INSERT INTO usernest (nome, email, senha, estado, cidade) VALUES ('${body.InsertNome}', '${body.InsertEmail}', '${body.InsertSenha}', '${body.InsertEstado}', '${body.InsertCidade}');   `)
        
  }
  async deletar(id: number) {
    
    const db = this.databaseService.getConnection();
    return await db.schema.raw(`DELETE FROM user WHERE id = '${id}' `)
  }
}
