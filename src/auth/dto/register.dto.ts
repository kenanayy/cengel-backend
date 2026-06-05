// Kayıt olurken gönderilen verilerin (Email, Şifre) kurallara uyup uymadığını (örn: en az 6 karakter) denetleyen kalıptır.

import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsString() @IsNotEmpty() @MinLength(3)
  username: string;

  @IsEmail()
  email: string;

  @IsString() @MinLength(6)
  password: string;
}
