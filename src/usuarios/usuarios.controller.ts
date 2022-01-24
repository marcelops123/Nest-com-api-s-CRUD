/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Put, Param, ParseArrayPipe, Body } from '@nestjs/common';
import { getMaxListeners, resourceUsage } from 'process';
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
  @Post(':id')
  adicionarUsuario(@Param('id') id: number) {
  this.usuarioRepository.adicionar(id);
  return `Usuário de id ${id} foi adicionado!`
}
@Delete(':id')
    deletar(@Param('id') id:number) {
      const idUsuario = id;
      this.usuarioRepository.deletar(idUsuario);
      return `Usuário de id #${id} deletado!`
    }
}
