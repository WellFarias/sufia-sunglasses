import { Component } from '@angular/core';
import { GenericResourceListComponent } from 'src/app/shared/components/generic-resource-list/generic-resource-list.component';
import { Product } from '../product-shared/product.model';
import { ProductService } from '../product-shared/product.service';

@Component({
    selector: 'app-storefront',
    templateUrl: './storefront.component.html',
    styleUrls: ['./storefront.component.scss']
})

export class StorefrontComponent extends GenericResourceListComponent<Product> {

    // O array está vindo de resources, de GenericResourceListComponent
    // products: Array<Product> = [];

    constructor(protected productService: ProductService) {
        super(productService);
    }
}
