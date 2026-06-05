// Telefon uygulamasından gelen bölüm (level) getirme isteklerini karşılar.

import { Controller, Get, Param } from '@nestjs/common';
import { LevelsService } from './levels.service';

@Controller('api/levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Get(':levelId')
  getLevel(@Param('levelId') levelId: string) {
    return this.levelsService.getLevel(levelId);
  }
}
