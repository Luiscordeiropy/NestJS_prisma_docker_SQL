import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';  // O módulo principal da aplicação, onde estão configurados os diferentes componentes(controladores, serviços, etc.)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // Cria uma instância da aplicação NestJS
  await app.listen(3000);  // Define a porta 3000 para o localhost
}
bootstrap();  // Função é chamada para iniciar a aplicação.
