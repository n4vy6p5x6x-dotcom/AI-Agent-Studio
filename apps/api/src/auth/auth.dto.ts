import { IsString, Matches, MinLength } from 'class-validator';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class LoginDto {
  @IsString()
  @Matches(EMAIL_PATTERN, { message: '邮箱格式不正确' })
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}

export class RegisterDto {
  @IsString()
  @Matches(EMAIL_PATTERN, { message: '邮箱格式不正确' })
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsString()
  @MinLength(2)
  name!: string;
}
