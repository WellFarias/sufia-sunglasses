import { Injectable, Injector } from '@angular/core';
import { GenericResouceService } from 'src/app/shared/services/generic-resource.service';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root'
})

export class ProductService extends GenericResouceService<Product> {

    constructor ( protected injector: Injector ) {
        super( '/products', injector, Product.fromJson );
    }
}
