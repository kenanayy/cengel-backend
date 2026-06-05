// İstenilen bölümün soru ve cevaplarını Data/levels.js dosyasından bulup getirir.

import { Injectable, NotFoundException } from '@nestjs/common';
import * as levelsData from '../../Data/levels.js';

@Injectable()
export class LevelsService {
  getLevel(levelId: string) {
    const level = levelsData[levelId];
    if (level) {
      return level;
    }
    throw new NotFoundException('Bölüm bulunamadı.');
  }
}
