import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { KeyModule } from '../key/key.module';

@Module({
  imports: [KeyModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
