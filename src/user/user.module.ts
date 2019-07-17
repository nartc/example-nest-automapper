import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.modelName, schema: User.schema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
