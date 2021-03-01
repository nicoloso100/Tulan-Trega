import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { Rider, RiderDocument } from './entities/rider.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class RidersService {
  constructor(
    @InjectModel(Rider.name) private riderModel: Model<RiderDocument>,
  ) {}

  async create(createRiderDto: CreateRiderDto) {
    const password = await bcrypt.hash(createRiderDto.password, 10);
    createRiderDto.password = password;
    const createdStore = new this.riderModel(createRiderDto);
    return createdStore.save();
  }

  findAll() {
    return `This action returns all riders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rider`;
  }

  update(id: number, updateRiderDto: UpdateRiderDto) {
    return `This action updates a #${id} rider`;
  }

  remove(id: number) {
    return `This action removes a #${id} rider`;
  }
}
