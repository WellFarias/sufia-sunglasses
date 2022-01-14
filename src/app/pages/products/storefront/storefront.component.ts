import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Product } from '../product-shared/product.model';
import { ProductService } from '../product-shared/product.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss']
})

export class StorefrontComponent extends BaseResourceListComponent<Product> {

  // products: Array<Product> = [];

  constructor(protected productService: ProductService) {
    super(productService)
  }
}
