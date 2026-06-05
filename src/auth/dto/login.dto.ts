// Giriş yaparken zorunlu olarak gönderilmesi gereken alanları (kullanıcı adı ve şifre) belirten kalıptır.

import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsString() @IsNotEmpty()
  username: string;

  @IsString() @IsNotEmpty()
  password: string;
}
