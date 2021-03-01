import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store, StoreDocument } from './entities/store.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class StoresService {
  constructor(
    @InjectModel(Store.name) private storeModel: Model<StoreDocument>,
  ) {}

  async create(createStoreDto: CreateStoreDto) {
    const password = await bcrypt.hash(createStoreDto.password, 10);
    createStoreDto.password = password;
    const createdStore = new this.storeModel(createStoreDto);
    await createdStore.save();
    return 'El usuario ha sido creado exitosamente';
  }

  async validate(createStoreDto: CreateStoreDto) {
    const user = await this.storeModel.findOne({ email: createStoreDto.email });
    if (user) {
      const passMatch = await bcrypt.compare(
        createStoreDto.password,
        user.password,
      );
      if (passMatch) {
        return 'Ingreso exitoso';
      } else {
        throw new HttpException(
          'La contraseña ingresada es incorrecta',
          HttpStatus.FORBIDDEN,
        );
      }
    } else {
      throw new HttpException(
        'El usuario ingresado no existe',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.storeModel.findByIdAndUpdate(id, updateStoreDto, { new: true });
  }
}
