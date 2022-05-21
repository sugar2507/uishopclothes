import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categories } from 'src/app/model/category';
import { Companies } from 'src/app/model/companies';
import { Products } from 'src/app/model/products';
import { CategoriesService } from 'src/app/service/category.service';
import { CompaniesService } from 'src/app/service/company.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  empList: Categories[] = [];
  PhotoFilePath!: string;
  prodList: Products[] = [];
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

