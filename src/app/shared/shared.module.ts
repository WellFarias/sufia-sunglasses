import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { TextFieldComponent } from './components/text-field/text-field.component';


@NgModule({
    declarations: [NavbarComponent, ProductCardComponent, FooterComponent, DrawerComponent, TextFieldComponent],

    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
    ],

    exports: [
        MaterialModule,
        NavbarComponent,
        ReactiveFormsModule,
        ProductCardComponent,
        TextFieldComponent,
    ]
})

export class SharedModule { }
