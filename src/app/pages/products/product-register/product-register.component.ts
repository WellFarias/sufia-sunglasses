import { Component, Injector } from '@angular/core';
import { GenericFormComponent } from 'src/app/shared/components/generic-form/generic-form.component';
import { Product } from '../product-shared/product.model';
import { ProductService } from '../product-shared/product.service';

@Component({
    selector: 'app-product-register',
    templateUrl: './product-register.component.html',
    styleUrls: ['./product-register.component.scss']
})

export class ProductRegisterComponent extends GenericFormComponent<Product> {

    constructor(protected productService: ProductService, protected injector: Injector) {
        super(injector, new Product(), productService, Product.fromJson)
    }

    protected buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            name: [null] as Product,
            model: [null] as Product,
            price: [null] as Product,
            picture: [null] as Product
        })
    }
}


