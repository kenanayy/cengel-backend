// Bu dosya uygulamanın motorunu çalıştıran ana dosyadır. Gelen verilerin doğrulanması (ValidationPipe) ve şifrelerin gizlenmesi (ClassSerializerInterceptor) burada ayarlanır.

import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS ayarı: Tüm cihazlardan gelen isteklere izin verir
  app.enableCors();

  // @Exclude() dekoratörünü çalıştırmak için Interceptor ekle
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  // class-validator için global pipe ekle
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3000;
  
  // 0.0.0.0 üzerinden her cihaza açık
  await app.listen(port, '0.0.0.0');
  console.log(`Backend server is running on port ${port} (0.0.0.0 üzerinden her cihaza açık)`);
}
bootstrap();
