import { IsInt, IsDate, IsBoolean } from 'class-validator';

export class UpdateKeyDto {
  @IsInt()
  readonly rateLimit?: number;

  @IsDate()
  readonly expiration?: Date;

  @IsBoolean()
  readonly isActive?: boolean;
}
