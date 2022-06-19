import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Size } from 'src/app/model/size';
import { SizeService } from 'src/app/service/size.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
})
export class SizeComponent implements OnInit {
  empDetail!: FormGroup;
  empCreate!: FormGroup;
  empObj: Size = new Size();
  empList: Size[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sizeService: SizeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllSize();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
    });
    this.empCreate = this.formBuilder.group({
      name: [''],
    });
  }

  addSize() {
    console.log(this.empCreate);
    this.empObj.ID = this.empCreate.value.id;
    this.empObj.NAME = this.empCreate.value.name;

    this.sizeService.addSize(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.empCreate.reset();
        this.getAllSize();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllSize() {
    this.sizeService.getAllSize().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  editSize(emp: Size) {
    this.empDetail.controls['id'].setValue(emp.ID);
    this.empDetail.controls['name'].setValue(emp.NAME);
    console.log(this.empDetail.controls['name'].setValue(emp.NAME));
  }
  updateSize() {
    this.empObj.NAME = this.empDetail.value.name;
    this.empObj.ID = this.empDetail.value.id;

    console.log(this.empDetail.value.name);
    console.log(this.empDetail.value.id);
    this.sizeService.updateSize(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllSize();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteSize(emp: Size) {
    this.sizeService.deleteSize(emp).subscribe(
      (res) => {
        console.log(res);
        alert('Xóa thành công ');
        this.getAllSize();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
