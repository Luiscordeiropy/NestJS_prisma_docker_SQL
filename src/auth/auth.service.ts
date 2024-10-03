//Esse código define um serviço de autenticação no NestJS que utiliza o Prisma para interagir com o banco de dados, bcrypt para hashing de senhas e JwtService para geração de tokens JWT. 

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';  // serviço que interage com o banco de dados usando prisma
import * as bcrypt from 'bcryptjs';  
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(  // injeta PrismaService e JwtService na classe AuthService
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {  // Método assíncrono para adicionar um novo usuário.
    const hashedPassword = await bcrypt.hash(password, 10);  // Hash da senha do usuário com um fator de 10
    const user = await this.prisma.user.create({  // Cria um novo usuário no banco de dados com o email e a senha hash
      data: { email, password: hashedPassword }, 
    });
    return user;
  }

  async login(email: string, password: string) {  //  Método assíncrono para autenticar um usuário
    const user = await this.prisma.user.findUnique({ where: { email } });  // busca um usuário no banco de dados pelo email
    if (!user || !(await bcrypt.compare(password, user.password))) {  // compara a senha fornecida com a senha hash armazenada
      throw new Error('Invalid credentials');  
    }
    const token = this.jwtService.sign({ userId: user.id });  // Gera um token JWT com o ID do usuário. 
    return { token };
  }
}
