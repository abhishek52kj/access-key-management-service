import { Controller, Get, Patch, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('key')
  async getKeyDetails(@Query('key') key: string) {
    return this.userService.getKeyDetails(key);
  }

  @Patch('key/disable')
  async disableKey(@Body('key') key: string) {
    return this.userService.disableKey(key);
  }
}
