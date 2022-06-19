import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from 'src/app/model/company';
import { CompaniesService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  empDetail!: FormGroup;
  empCreate!: FormGroup;
  empObj: Company = new Company();
  empList: Company[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompaniesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllCompanies();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
    });
    this.empCreate = this.formBuilder.group({
      name: [''],
    });
  }

  addCompanies() {
    console.log(this.empCreate);
    this.empObj.ID = this.empCreate.value.id;
    this.empObj.NAME = this.empCreate.value.name;

    this.companyService.addCompanies(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.empCreate.reset();
        this.getAllCompanies();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  editCompany(emp: Company) {
    this.empDetail.controls['id'].setValue(emp.ID);
    this.empDetail.controls['name'].setValue(emp.NAME);
    console.log(this.empDetail.controls['name'].setValue(emp.NAME));
  }
  updateCompany() {
    this.empObj.NAME = this.empDetail.value.name;
    this.empObj.ID = this.empDetail.value.id;

    console.log(this.empDetail.value.name);
    console.log(this.empDetail.value.id);
    this.companyService.updateCompanies(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllCompanies();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteCompanies(emp: Company) {
    this.companyService.deleteCompanies(emp).subscribe(
      (res) => {
        console.log(res);
        alert('Xóa thành công ');
        this.getAllCompanies();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
