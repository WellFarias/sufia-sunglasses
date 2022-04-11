import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-shared/product.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit  {

    product: Product;

    constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
        this.activateRoute.params.subscribe(
            param => this.getProduct(param.id)
        );
    }

    ngOnInit(): void {
        this.getProduct;
    }

    getProduct(id: string): Observable<Product> {
        // @ts-ignore
        return this.productService.getById(id).subscribe(
            response => {
                this.product = response;
                console.log(this.product);
            }
        );
    }
}
