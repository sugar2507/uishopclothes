import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Categories } from '../../model/category';

import { HttpClient } from '@angular/common/http';
import { CategoriesService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  empDetail!: FormGroup;
  empCreate!: FormGroup;
  empObj: Categories = new Categories();
  empList: Categories[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private empService: CategoriesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
    });
    this.empCreate = this.formBuilder.group({
      name: [''],
    });
  }

  addCategory() {
    console.log(this.empCreate);
    this.empObj.ID = this.empCreate.value.id;
    this.empObj.NAME = this.empCreate.value.name;

    this.empService.addCategory(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.empCreate.reset();
        this.getAllCategory();
      },
      (err) => {
        console.log(err);
      }
    );
  }
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
  editCategory(emp: Categories) {
    this.empDetail.controls['id'].setValue(emp.ID);
    this.empDetail.controls['name'].setValue(emp.NAME);
    console.log(this.empDetail.controls['name'].setValue(emp.NAME));
  }
  updateCategory() {
    this.empObj.NAME = this.empDetail.value.name;
    this.empObj.ID = this.empDetail.value.id;

    console.log(this.empDetail.value.name);
    console.log(this.empDetail.value.id);
    this.empService.updateCategory(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllCategory();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteCategory(emp: Categories) {
    this.empService.deleteCategory(emp).subscribe(
      (res) => {
        console.log(res);
        alert('Xóa thành công ');
        this.getAllCategory();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
