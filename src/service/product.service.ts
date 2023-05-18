/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type Product } from "../entity/product";

export default class ProductService {
  static increasePrice(products: Product[], percentage: number): void {
    products.forEach((product) => {
      console.log(product.price * (percentage / 100));
      console.log(product.price);
      product.changePrice(product.price + product.price * (percentage / 100));
    });
  }
}
