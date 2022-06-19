import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AdminRoutingModule } from './admin-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { LayoutComponent } from './layout/layout.component';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { BillComponent } from './bill/bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { DashboardDoughnut2Component } from './dashboard/dashboard-doughnut2/dashboard-doughnut2.component';
import { DashboardChartComponent } from './dashboard/dashboard-chart/dashboard-chart.component';
import { DashboardDoughnutComponent } from './dashboard/dashboard-doughnut/dashboard-doughnut.component';
import { SizeComponent } from './size/size.component';
import { SexComponent } from './sex/sex.component';
import { CompanyComponent } from './company/company.component';
@NgModule({
  declarations: [
    LayoutComponent,
    CompanyComponent,
    SexComponent,
    SizeComponent,
    CategoryComponent,
    BillComponent,
    DashboardComponent,
    OrderComponent,
    ProductComponent,
    UsersComponent,
    DashboardDoughnut2Component,
    DashboardChartComponent,
    DashboardDoughnutComponent,
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    AdminRoutingModule,
    IconsProviderModule,
    NzTableModule,
    NzLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NzDropDownModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AdminModule {}
