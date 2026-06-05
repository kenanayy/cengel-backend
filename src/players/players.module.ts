// Oyuncu (Player) işlemleriyle ilgili Controller ve Service dosyalarını bir araya toplayan pakettir.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { Player } from './player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])], // Repository inject için
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [PlayersService], // Diğer modüller kullanabilsin
})
export class PlayersModule {}
