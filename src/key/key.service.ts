import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Key } from './interfaces/key.interface';
import { CreateKeyDto } from './dto/create-key.dto';
import { UpdateKeyDto } from './dto/update-key.dto';

@Injectable()
export class KeyService {
  constructor(@InjectModel('Key') private readonly keyModel: Model<Key>) {}

  async create(createKeyDto: CreateKeyDto): Promise<Key> {
    const createdKey = new this.keyModel(createKeyDto);
    return createdKey.save();
  }

  async findAll(): Promise<Key[]> {
    return this.keyModel.find().exec();
  }

  async findById(id: string): Promise<Key> {
    return this.keyModel.findById(id).exec();
  }

  async update(id: string, updateKeyDto: UpdateKeyDto): Promise<Key> {
    return this.keyModel
      .findByIdAndUpdate(id, updateKeyDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.keyModel.findByIdAndDelete(id).exec();
  }
}
