import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  PhotoFilePath!: string;
  dataPro: any;
  catId: any;
  prodList: Products[] = [];

  constructor(
    private prodService: ProductService,
    private activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    //   this.activateRoute.paramMap.subscribe((params) => {
    //   this.catId = params.get('id');
    //   console.log(this.catId);
    // });

    // this.getProductCatId(this.catId);
    this.getAllProduct();
  }
  getProductCatId(id: any) {
    this.prodService.getAllProductByCate(id).subscribe((res) => {
      this.dataPro = res;
    });
  }
  public createImgPath = (serverPath: string) => {
    return `H:/DA/ShopClothAPI/apishopclothes/ShopClothes/Photos/${serverPath}`.replace(
      /'^file:\/\//,
      ''
    );
  };
  getAllProduct() {
    this.prodService.getAllProduct().subscribe(
      (res) => {
        this.prodList = res;
        this.PhotoFilePath = this.prodService.PhotoUrl;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  
}
