import { Injectable, Injector } from '@angular/core';
import { GenericResouceService } from 'src/app/shared/services/generic-resource.service';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService extends GenericResouceService<UserModel> {

    constructor(protected injector: Injector) {
        super('/authentication', injector, UserModel.fromJson )
    }
}
