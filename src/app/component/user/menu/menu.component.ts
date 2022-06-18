import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoriesService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { CompaniesService } from './../../../service/company.service';
import { Companies } from 'src/app/model/companies';
import { Sex } from 'src/app/model/sex';
import { SexService } from 'src/app/service/sex.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  cateList: Categories[] = [];
  branchList: Companies[] = [];
  sexList: Sex[] = [];
  @Input()
  index!: number;
  PhotoFilePath!: string;
  prodList: Product[] = [];
  dataPro: any;
  constructor(
    private prodService: ProductService,
    private branchService: CompaniesService,
    private cateService: CategoriesService,
    private sexService: SexService
  ) {}

  ngOnInit(): void {
    this.getAllSex();
    this.getAllBranch();
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
  getAllBranch() {
    this.branchService.getAllCompanies().subscribe((res) => {
      this.branchList = res;
      console.log(res);
    });
  }
  getAllSex() {
    this.sexService.getAllSex().subscribe((res) => {
      this.sexList = res;
      console.log(res);
    });
  }

  getAllCategory() {
    this.cateService.getAllCategory().subscribe(
      (res) => {
        this.cateList = res;
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
