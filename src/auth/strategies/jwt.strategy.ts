// Kullanıcının yaptığı işlemlerde gönderdiği JWT (Token) kimliğinin sahte olup olmadığını doğrulayan güvenlik stratejisidir.

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../../players/player.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @InjectRepository(Player)
    private playersRepo: Repository<Player>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET') || 'oyun_super_gizli_anahtar_2025',
    });
  }

  async validate(payload: { sub: number; username: string; role: string }) {
    const player = await this.playersRepo.findOneBy({ id: payload.sub });
    if (!player) throw new UnauthorizedException();
    return player; // request.user'a atanır
  }
}
