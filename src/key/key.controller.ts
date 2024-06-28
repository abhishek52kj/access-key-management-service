import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Patch,
} from '@nestjs/common';
import { KeyService } from './key.service';
import { CreateKeyDto } from './dto/create-key.dto';
import { UpdateKeyDto } from './dto/update-key.dto';

@Controller('admin')
export class KeyController {
  constructor(private readonly keyService: KeyService) {}

  @Post('key')
  async create(@Body() createKeyDto: CreateKeyDto) {
    return this.keyService.create(createKeyDto);
  }

  @Get('keys')
  async findAll() {
    return this.keyService.findAll();
  }

  @Get('key/:id')
  async findById(@Param('id') id: string) {
    return this.keyService.findById(id);
  }

  @Patch('key/:id')
  async update(@Param('id') id: string, @Body() updateKeyDto: UpdateKeyDto) {
    return this.keyService.update(id, updateKeyDto);
  }

  @Delete('key/:id')
  async delete(@Param('id') id: string) {
    return this.keyService.delete(id);
  }
}
