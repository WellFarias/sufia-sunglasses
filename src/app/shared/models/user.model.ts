import {GenericResourceModel} from './generic-resource.model';

export class UserModel extends GenericResourceModel{
  constructor(
    public id?: string,
    public email?: string,
    public emailVerified?: boolean,
    public password?: string,
    public phoneNumber?: string,
    public displayName?: string,
    public photoUrl?: string,
    public disabled?: boolean
  ) {
    super();
  }

  static fromJson(jsonData: any): UserModel {
    return Object.assign(new UserModel(), jsonData);
}
}
