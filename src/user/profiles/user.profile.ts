import { MappingProfileBase } from 'automapper-nartc';
import { User } from '../user.model';
import { UserVm } from '../view-models/user.view-model';

export class UserProfile extends MappingProfileBase {
  constructor() {
    super();
  }

  configure(): void {
    this.createMap(User, UserVm)
      .forMember('fullName', opts => opts.mapFrom(source => source.firstName + ' ' + source.lastName));
  }
}
