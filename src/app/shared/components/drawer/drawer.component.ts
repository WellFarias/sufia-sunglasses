import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

    @Input() drawerActive: boolean;
    @Output() closeDrawer = new EventEmitter();
    user: UserModel;

    constructor() {}

    ngOnInit(): void {}

    closeModal(): void {
        this.closeDrawer.emit(false);
    }
}
