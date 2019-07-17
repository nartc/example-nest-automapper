import { SchemaOptions } from 'mongoose';
import { prop, Typegoose } from 'typegoose';

export class BaseVm {
  constructor(
    public id?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {
  }
}

export class BaseModel extends Typegoose {
  @prop()
  createdAt: Date;
  @prop()
  updatedAt: Date;
  id: string;
}

export const schemaOptions: SchemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true,
    getters: true,
  },
};
