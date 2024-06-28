import { Injectable } from '@nestjs/common';
import { KeyService } from '../key/key.service';

@Injectable()
export class UserService {
  constructor(private readonly keyService: KeyService) {}

  async getKeyDetails(keyId: string) {
    return this.keyService.findById(keyId);
  }

  async disableKey(keyId: string) {
    return this.keyService.update(keyId, { isActive: false });
  }
}
