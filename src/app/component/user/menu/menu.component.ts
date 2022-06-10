import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoriesService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  empList: Categories[] = [];
  @Input()
  index!: number;
  PhotoFilePath!: string;
  prodList: Product[] = [];
  dataPro: any;
  constructor(
    private prodService: ProductService,

    private empService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
  // public createImgPath = (serverPath: string) => {
  //   return `assets/img/${serverPath}`;
  // };
  getAllCategory() {
    this.empService.getAllCategory().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  // getAllcomp() {
  //   this.compService.getAllCompanies().subscribe(
  //     (res) => {
  //       this.compList = res;}}

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
