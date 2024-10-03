import { Controller, Post, Body } from '@nestjs/common';  // Post: Decorador que define um manipulador de rota HTTP POST, Body: Decorador que extrai dados do corpo da requisição
import { AuthService } from './auth.service';

@Controller('auth')  // Define a rota base para este controlador como /auth
export class AuthController {
  constructor(private authService: AuthService) {}  // injeta o serviço de autenticação

  @Post('register')  // Define a rota /auth/register que aceita requisições HTTP POST
  async register(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.register(email, password);  // Método assíncrono que chama o método register do authService com os dados do corpo da requisição.
  }

  @Post('login')  // Define a rota /auth/register que aceita requisições HTTP POST
  async login(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.login(email, password);  // Método assíncrono que chama o método login do authService com os dados do corpo da requisição.
  }
}
