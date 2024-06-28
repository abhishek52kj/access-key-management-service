import {
  Controller,
  Post,
  Delete,
  Get,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateKeyDto } from '../key/dto/create-key.dto';
import { UpdateKeyDto } from '../key/dto/update-key.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('key')
  async create(@Body() createKeyDto: CreateKeyDto) {
    return this.adminService.createKey(createKeyDto);
  }

  @Get('keys')
  async findAll() {
    return this.adminService.findAllKeys();
  }

  @Get('key/:id')
  async findById(@Param('id') id: string) {
    return this.adminService.findKeyById(id);
  }

  @Patch('key/:id')
  async update(@Param('id') id: string, @Body() updateKeyDto: UpdateKeyDto) {
    return this.adminService.updateKey(id, updateKeyDto);
  }

  @Delete('key/:id')
  async delete(@Param('id') id: string) {
    return this.adminService.deleteKey(id);
  }
}
