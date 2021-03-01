import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RiderDocument = Rider & Document;

@Schema()
export class Rider {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const RiderSchema = SchemaFactory.createForClass(Rider);
