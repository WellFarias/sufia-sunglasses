import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StorefrontComponent } from './storefront/storefront.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRegisterComponent } from './product-register/product-register.component';



@NgModule({
  declarations: [
    StorefrontComponent,
    ProductDetailComponent,
    ProductRegisterComponent
  ],

  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
