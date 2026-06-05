// Veritabanındaki "players" tablosunun TypeScript sınıfı (Class) halidir. Sütunlar ve veri tipleri burada belirlenir.

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column()
  @Exclude() // JSON yanıtından otomatik çıkarır
  password: string;

  @Column({ nullable: true })
  @Exclude()
  refreshToken: string;

  @Column({ default: 1 })
  currentLevel: number;

  @Column({ default: 0 })
  score: number;

  @Column({ default: 'player' })
  role: string; // 'player' | 'admin'

  @CreateDateColumn()
  createdAt: Date;
}
