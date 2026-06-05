// Giriş (Login) rotasının önüne koyulan ve local.strategy.ts dosyasını çalıştıran güvenlik görevlisidir.

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
