import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService], // Lista de provedores que este módulo fornece. Fornece PrismaService
  exports: [PrismaService],   // Lista de provedores que este módulo exporta, tornando-os disponíveis para outros módulos que importarem este módulo
})
export class PrismaModule {}  // Define a classe PrismaModule que é exportada para ser usada na aplicação
