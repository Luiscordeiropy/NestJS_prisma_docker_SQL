import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'; // Os módulos são interfaces que permitem executar lógica personalizada quando um módulo é inicializado ou destruido 
import { PrismaClient } from '@prisma/client'; // A clásse principal do prisma que fornece métodos para interagir com o banco de dados

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy { // Define a classe PrismaService que estende a funcionalidade do PrismaClient
  async onModuleInit() {     // Método assíncrono que é chmado quando o módulo é inicializado. Ele conecta o Prisma ao banco de dados.
    await this.$connect();  
  }

  async onModuleDestroy() {  // Método assíncrono que é chamado quando o módulo é destruído. Ele desconecta o Prisma do banco de dados
    await this.$disconnect();
  }
}
