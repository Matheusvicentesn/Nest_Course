import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SinginDTO {


  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
