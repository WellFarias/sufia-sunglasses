import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    drawer: boolean;

    constructor() { }

    ngOnInit(): void {}

    closeModal(drawer): void {
        this.drawer = drawer;
    }
}
