import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductRegisterComponent } from './pages/products/product-register/product-register.component';
import { StorefrontComponent } from './pages/products/storefront/storefront.component';

const routes: Routes = [
  { path: 'store', component: StorefrontComponent },
  { path: 'register', component: ProductRegisterComponent },
  { path: 'store/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
