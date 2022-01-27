/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Put, Param, ParseArrayPipe, Body, Query } from '@nestjs/common';
import { getMaxListeners, resourceUsage } from 'process';
import { CreateUserDto } from './criar-usuarios';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioRepository: UsuariosService) {}


  @Get('buscar')
  GetUser(@Body() body: any) {
    
    return ` ${body}` 
  }




  @Put('alterar')
  alterar(@Body() body: CreateUserDto) {
    this.usuarioRepository.alterar(body) ;
    return `Usuário de id ${body.id} foi alterado!`
  }
  @Post('adicionar')
  adicionarUsuario(@Body() body: CreateUserDto) {
    this.usuarioRepository.adicionar(body);
    return `Usuário cadastrado com sucesso!`
  
}
@Delete(':id')
    deletar(@Param('id') id:number) {
      const idUsuario = id;
      this.usuarioRepository.deletar(idUsuario);
      return `Usuário de id #${id} deletado!`
    }
}
