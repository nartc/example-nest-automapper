import { Schema } from 'mongoose';
import { ModelType, prop } from 'typegoose';
import { BaseModel, schemaOptions } from '../base.model';
import { Bio } from './bio.model';

export class User extends BaseModel {
  @prop()
  firstName: string;
  @prop()
  lastName: string;
  @prop()
  email: string;
  @prop()
  password: string;
  @prop()
  bio: Bio;

  static get model(): ModelType<User> {
    return new User().getModelForClass(User, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static get schema(): Schema {
    return this.model.schema;
  }
}
