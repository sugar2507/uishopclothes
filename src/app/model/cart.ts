import { Products } from './products';

export class CartItem {
  productId: any;
  productName: any;
  qty: any;
  price: any;
  img:any;

  constructor( product: Products, qty = 1) {
    
    this.productId = product.ID;
    this.productName = product.NAME;
    this.price = product.PRICE;
    this.qty = qty;
    this.img=product.IMAGE
  }
}