// Korumalı URL'lere girmek isteyenlerin elindeki Token'ı (Kimliği) kontrol eden ve geçersizse içeri almayan güvenlik görevlisidir.

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
