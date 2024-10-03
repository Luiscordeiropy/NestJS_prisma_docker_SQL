import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';  // serviço de autenticação
import { AuthController } from './auth.controller';  // controlador de autenticação
import { PrismaModule } from '../prisma/prisma.module'; 
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [  // lista de módulos que este módulo importa
    PrismaModule,
    JwtModule.register({
      secret: 'your_jwt_secret',  // importando o PrismaModule e configurando o JwtModule com um segredo(secret)
      signOptions: { expiresIn: '1h' }, // Opções de assinatura (signOption), com o temo de expiração do token (expiresIn: '1h')
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
