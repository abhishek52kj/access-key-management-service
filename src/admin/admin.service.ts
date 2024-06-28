import { Injectable } from '@nestjs/common';
import { KeyService } from '../key/key.service';
import { CreateKeyDto } from '../key/dto/create-key.dto';
import { UpdateKeyDto } from '../key/dto/update-key.dto';

@Injectable()
export class AdminService {
  constructor(private readonly keyService: KeyService) {}

  async createKey(createKeyDto: CreateKeyDto) {
    return this.keyService.create(createKeyDto);
  }

  async findAllKeys() {
    return this.keyService.findAll();
  }

  async findKeyById(id: string) {
    return this.keyService.findById(id);
  }

  async updateKey(id: string, updateKeyDto: UpdateKeyDto) {
    return this.keyService.update(id, updateKeyDto);
  }

  async deleteKey(id: string) {
    return this.keyService.delete(id);
  }
}
