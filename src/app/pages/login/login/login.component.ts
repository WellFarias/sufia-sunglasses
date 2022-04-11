import { Component, Injector } from '@angular/core';
import { GenericFormComponent } from 'src/app/shared/components/generic-form/generic-form.component';
import { LoginService } from '../login.service';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent extends GenericFormComponent<UserModel> {

    constructor(protected loginService: LoginService, protected injector: Injector) {
        super(injector, new UserModel(), loginService, UserModel.fromJson)
    }

    protected buildResourceForm(): void {
        this.resourceForm = this.formBuilder.group({
            email: [null]as UserModel,
            emailVerified: true as UserModel,
            password: [null] as UserModel,
            phoneNumber: [null] as UserModel,
            displayName: [null] as UserModel,
            photoUrl: [null] as UserModel,
            disabled: false as UserModel
        });
    }
}
