import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    name: string;

    @IsNotEmpty()
    password: string;
}
