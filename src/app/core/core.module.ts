import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { ProductsModule } from '../pages/products/products.module';

@NgModule({
  declarations: [],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsModule
  ],

  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
