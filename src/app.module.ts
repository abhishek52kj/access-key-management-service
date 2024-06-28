import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisModule } from 'nestjs-redis';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { KeyModule } from './key/key.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot('mongodb://localhost/access-key-management'),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('REDIS_HOST'),
        port: parseInt(configService.get('REDIS_PORT'), 10),
      }),
      inject: [ConfigService],
    }),
    AdminModule,
    UserModule,
    KeyModule,
  ],
})
export class AppModule {}
