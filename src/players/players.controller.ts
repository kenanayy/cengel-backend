// Oyuncuların bilgilerini okumak veya silmek için dışarıdan (HTTP) gelen istekleri yakalayan kapıcıdır.

import { Controller, Get, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PlayersService } from './players.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('players') // Tüm route'lar /players altında
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.findOne(id);
  }

  // KORUMALI ROUTE ÖRNEĞİ (PlayersController'da)
  // Sadece admin oyuncu silebilir:
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.remove(id);
  }
}
