import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserVm } from './view-models/user.view-model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  async save(@Body() body): Promise<UserVm> {
    return this.userService.save(body.firstName, body.lastName, body.email, body.password, body.about, body.phone);
  }
}
