// Bu dosya uygulamanın Ana Kartıdır. Veritabanı bağlantısı ve diğer tüm modüller (Auth, Players vb.) burada birleştirilir.

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PlayersModule } from './players/players.module';
import { LevelsModule } from './levels/levels.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env global yükle
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '27018'),
      username: process.env.DB_USER || 'oyun_admin',
      password: process.env.DB_PASSWORD || 'sifre123',
      database: process.env.DB_NAME || 'oyun_veritabani',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Geliştirme ortamında: Entity'den tablo oluştur
    }),
    AuthModule,
    PlayersModule,
    LevelsModule,
    ProgressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
