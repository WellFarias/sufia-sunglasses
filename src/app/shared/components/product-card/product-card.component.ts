import { Component, Input } from '@angular/core';
import { Product } from 'src/app/pages/products/product-shared/product.model';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {

    @Input() cardItems: Product

}
