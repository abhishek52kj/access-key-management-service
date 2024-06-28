import { IsString, IsInt, IsDate, IsBoolean } from 'class-validator';

export class CreateKeyDto {
  @IsString()
  readonly keyId: string;

  @IsInt()
  readonly rateLimit: number;

  @IsDate()
  readonly expiration: Date;

  @IsBoolean()
  readonly isActive: boolean;
}
