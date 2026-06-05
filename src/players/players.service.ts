// Oyuncularla ilgili gerçek veritabanı (SQL/TypeORM) işlemlerinin (Bul, Sil vs.) yapıldığı yerdir.

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  // READ — Hepsini getir
  async findAll(): Promise<Player[]> {
    return this.playersRepository.find();
  }

  // READ — Tek bir oyuncu
  async findOne(id: number): Promise<Player> {
    const player = await this.playersRepository.findOneBy({ id });
    if (!player) throw new NotFoundException(`Oyuncu ${id} bulunamadı`);
    return player;
  }

  async findOneByUsername(username: string): Promise<Player | null> {
    return this.playersRepository.findOneBy({ username });
  }

  // DELETE
  async remove(id: number): Promise<void> {
    await this.findOne(id); // Var mı kontrol et
    await this.playersRepository.delete(id);
  }
}
