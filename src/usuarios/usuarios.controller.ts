/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Put, Param, ParseArrayPipe, Body } from '@nestjs/common';
import { getMaxListeners, resourceUsage } from 'process';
import { CreateUserDto } from './criar-usuarios';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioRepository: UsuariosService) {}

  @Get(':id')
  buscar(@Param('id') id:number) {
    const idUser = id
    return this.usuarioRepository.buscar(idUser);
  }
  @Put(':id')
  alterar(@Param('id') id: number, nome: string) {
    this.usuarioRepository.alterar(id, nome) ;
    return `Usuário de id ${id} foi alterado!`
  }
  @Post('salvar')
  adicionarUsuario(@Body()body: CreateUserDto) {
  body.id 
  body.nome 
  body.email;
  body.senha
  this.usuarioRepository.adicionar(body)
  return `Seu id é : ${body.id}, <br> Seu nome é : ${body.nome} <br> Seu email é:  ${body.email} <br>  Sua senha é : ${body.senha}`
}
@Delete(':id')
    deletar(@Param('id') id:number) {
      const idUsuario = id;
      this.usuarioRepository.deletar(idUsuario);
      return `Usuário de id #${id} deletado!`
    }
}
