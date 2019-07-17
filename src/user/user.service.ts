import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectMapper } from 'nest-automapper';
import { ModelType } from 'typegoose';
import { Bio } from './bio.model';
import { User } from './user.model';
import { AutoMapper } from 'automapper-nartc';
import { UserVm } from './view-models/user.view-model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.modelName) private readonly userModel: ModelType<User>,
    @InjectMapper() private readonly mapper: AutoMapper,
  ) {
  }

  async save(firstName: string, lastName: string, email: string, password: string, about: string, phone: string): Promise<UserVm> {
    const newUser = new this.userModel();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    newUser.password = password;
    newUser.bio = new Bio();
    newUser.bio.about = about;
    newUser.bio.phone = phone;

    const result = await newUser.save();
    // tslint:disable-next-line:no-console
    console.log(this.mapper.map(result.toJSON(), User, UserVm));
    return this.mapper.map(result.toJSON(), UserVm);
  }
}
