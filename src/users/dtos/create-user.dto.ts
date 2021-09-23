import {
    IsEmail,
    IsNotEmpty,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({
        message: 'Ops! Digite um endereço de email',
      })
      @IsEmail(
        {},
        {
          message: 'Ops! Digite um endereço de email válido',
        },
      )
      @MaxLength(200, {
        message: 'Ops! O endereço de email deve ter menos de 200 caracteres',
      })
      email: string;
    
      @IsNotEmpty({
        message: 'Ops! Digite um nome para o usuário',
      })
      @MaxLength(200, {
        message: 'Ops! O nome deve conter menos de 200 caracteres',
      })
      name: string;
    
      @IsNotEmpty({
        message: 'Ops! Insira uma senha',
      })
      @MinLength(6, {
        message: 'Ops! A senha deve conter no mínimo 6 caracteres',
      })
      password: string;
    
      @IsNotEmpty({
        message: 'Atenção! Informe sua confirmação de senha',
      })
      @MinLength(6, {
        message: 'A confirmação de senha deve ter no mínimo 6 caracteres',
      })
      passwordConfirmation: string;
  }