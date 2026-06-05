// /api/progress adresine gelen, skor okuma ve skor kaydetme isteklerini karşılar.

import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('api/progress')
@UseGuards(JwtAuthGuard)
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get()
  async getProgress(@Request() req: any) {
    return this.progressService.getProgress(req.user.id);
  }

  @Post()
  async updateProgress(@Request() req: any, @Body() body: any) {
    const { currentLevel, score } = body;
    const updateData: any = {};
    if (currentLevel !== undefined) updateData.currentLevel = currentLevel;
    if (score !== undefined) updateData.score = score;

    const userProgress = await this.progressService.updateProgress(req.user.id, updateData);
    return { message: 'İlerleme kaydedildi.', user: userProgress };
  }
}
