import { Product } from './product';
import { Order } from './order';
import { CartItem } from './cart';

export class DeOrder {
  IDORDER!: number;
  IDPRODUCT: number = 0;
  QUANTITY: number = 0;
  PRICE: number = 0;
  // constructor(product: Product, order: Order, cart: CartItem) {
  //   this.IDPRODUCT = product.ID;
  //   this.IDORDER = order.ID;
  //   this.PRICE = product.PRICE;
  //   this.QUANTITY = cart.qty;
  // }
}
