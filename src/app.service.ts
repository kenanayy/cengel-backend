// Kök dizin için basit işlemlerin veya karşılama mesajlarının yazıldığı servistir.

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
