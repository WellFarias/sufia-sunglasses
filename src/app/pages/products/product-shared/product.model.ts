import { GenericResourceModel } from 'src/app/shared/models/generic-resource.model';

export class Product extends GenericResourceModel {
    constructor (
        public id?: string,
        public name?: string,
        public model?: string,
        public price?: string,
        public picture?: string
    ) {
        super();
    }

    static fromJson(jsonData: any): Product {
        return Object.assign(new Product(), jsonData);
    }
}
