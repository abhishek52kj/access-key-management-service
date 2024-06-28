import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { KeyModule } from '../key/key.module';

@Module({
  imports: [KeyModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
