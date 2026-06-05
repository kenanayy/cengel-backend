// Sadece o an giriş yapmış kullanıcının currentLevel (bölüm) ve score (puan) verilerini SQL'de güvenle günceller.

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../players/player.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Player)
    private playersRepo: Repository<Player>,
  ) {}

  async getProgress(userId: number) {
    const player = await this.playersRepo.findOneBy({ id: userId });
    if (!player) throw new NotFoundException('Kullanıcı bulunamadı');
    return { currentLevel: player.currentLevel, score: player.score };
  }

  async updateProgress(userId: number, updateData: { currentLevel?: number; score?: number }) {
    await this.playersRepo.update(userId, updateData);
    const player = await this.playersRepo.findOneBy({ id: userId });
    return { currentLevel: player?.currentLevel, score: player?.score };
  }
}
