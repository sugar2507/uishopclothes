import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { Products } from 'src/app/model/products';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  empObj: Products = new Products();
  prodList: Products[] = [];
  empDetail!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private CartService:CartService,
    private prodService: ProductService,
    private http: HttpClient

  ) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
    });
  }
  getAllProduct() {
    this.prodService.getAllProduct().subscribe(
      (res) => {
        this.prodList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }

  addTocart(product: Products) {
    this.CartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
