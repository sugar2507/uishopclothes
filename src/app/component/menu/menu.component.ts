import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categories } from 'src/app/model/category';
import { Companies } from 'src/app/model/companies';
import { CategoriesService } from 'src/app/service/category.service';
import { CompaniesService } from 'src/app/service/company.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit  {
  cateObj: Categories = new Categories();
  cateList: Categories[] = [];
  empDetail!: FormGroup;
  compObj: Companies = new Companies();
  compList: Companies[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cateService: CategoriesService,
    private compService: CompaniesService,
    private http: HttpClient

  ) { }

  ngOnInit(): void {
    this.getAllcate();
    this.getAllcomp();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
    });
  }
  getAllcate() {
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
  getAllcomp() {
    this.compService.getAllCompanies().subscribe(
      (res) => {
        this.compList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  
}

