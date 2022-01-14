import { Injectable, Injector } from '@angular/core';
import { BaseResouceService } from 'src/app/shared/services/base-resource.service';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService extends BaseResouceService<Product> {
  constructor(protected injector: Injector){
    super("/products", injector, Product.fromJson)
  }
}
