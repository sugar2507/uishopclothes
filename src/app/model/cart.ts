import { Product } from './product';

export class CartItem {
  productId: any;
  productName: any;
  qty: any;
  price: any;
  img: any;
  ori_price: any;
  constructor(product: Product, qty = 1) {
    this.productId = product.ID;
    this.productName = product.NAME;
    this.price = product.PRICE;
    this.qty = qty;
    this.img = product.IMAGE;
    this.ori_price = product.ORI_PRICE;
  }
}
