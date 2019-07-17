import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from 'nest-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioProfile } from './user/profiles/bio.profile';
import { UserProfile } from './user/profiles/user.profile';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/automapper', { useNewUrlParser: true }),
    AutomapperModule.forRoot({ profiles: [new UserProfile(), new BioProfile()] }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
