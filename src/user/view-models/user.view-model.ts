import { BaseVm } from '../../base.model';
import { BioVm } from './bio.view-model';

export class UserVm extends BaseVm {
  constructor(
    public fullName: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public bio: BioVm,
  ) {
    super();
  }
}
