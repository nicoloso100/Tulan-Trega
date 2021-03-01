import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StoreDocument = Store & Document;

@Schema()
export class StoreLocation {
  @Prop({ required: true })
  formated: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  latitude: number;
}

@Schema()
export class Store {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name: string;

  @Prop()
  logo: string;

  @Prop()
  location: StoreLocation;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
