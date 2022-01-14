import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Product extends BaseResourceModel {
  constructor(
    public id?: string,
    public name?: string,
    public model?: string,
    public price?: string,
    public pictures?: Array<string>
  ) {
    super()
  }

  static fromJson(jsonData: any): Product {
    return Object.assign(new Product(), jsonData);
  }
}
