/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioRepository: UsuariosService) {}

  @Post('salvar')
  salvarUsuario() {
    return this.usuarioRepository.buscar();
  }
}
