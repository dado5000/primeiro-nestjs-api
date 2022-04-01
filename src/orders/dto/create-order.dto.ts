import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsPositive({
    message: `O campo  precisa ser um valor positivo`,
  })
  @IsNumber()
  amount: number;
}
