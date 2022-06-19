import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sex } from 'src/app/model/sex';
import { CategoriesService } from 'src/app/service/category.service';
import { SexService } from 'src/app/service/sex.service';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.css'],
})
export class SexComponent implements OnInit {
  empDetail!: FormGroup;
  empCreate!: FormGroup;
  empObj: Sex = new Sex();
  empList: Sex[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sexService: SexService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllSex();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
    });
    this.empCreate = this.formBuilder.group({
      name: [''],
    });
  }

  addSex() {
    console.log(this.empCreate);
    this.empObj.ID = this.empCreate.value.id;
    this.empObj.NAME = this.empCreate.value.name;

    this.sexService.addSex(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.empCreate.reset();
        this.getAllSex();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllSex() {
    this.sexService.getAllSex().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  editSex(emp: Sex) {
    this.empDetail.controls['id'].setValue(emp.ID);
    this.empDetail.controls['name'].setValue(emp.NAME);
    console.log(this.empDetail.controls['name'].setValue(emp.NAME));
  }
  updateSex() {
    this.empObj.NAME = this.empDetail.value.name;
    this.empObj.ID = this.empDetail.value.id;

    console.log(this.empDetail.value.name);
    console.log(this.empDetail.value.id);
    this.sexService.updateSex(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllSex();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteSex(emp: Sex) {
    this.sexService.deleteSex(emp).subscribe(
      (res) => {
        console.log(res);
        alert('Xóa thành công ');
        this.getAllSex();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
