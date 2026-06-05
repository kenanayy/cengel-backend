// Oyuncunun kaldığı bölümü ve puanını güncellemeyi sağlayan modül paketidir.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { Player } from '../players/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [ProgressController],
  providers: [ProgressService],
})
export class ProgressModule {}
