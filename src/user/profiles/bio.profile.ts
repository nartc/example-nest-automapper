import { MappingProfileBase } from 'automapper-nartc';
import { Bio } from '../bio.model';
import { BioVm } from '../view-models/bio.view-model';

export class BioProfile extends MappingProfileBase {
  constructor() {
    super();
  }

  configure() {
    this.createMap(Bio, BioVm)
      .forMember('aboutMe', opts => opts.mapFrom(s => s.about))
      .forMember('phoneNumber', opts => opts.mapFrom(s => s.phone));
  }
}
