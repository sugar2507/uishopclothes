import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UsersComponent } from './component/users/users.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DashboardChartComponent } from './component/dashboard/dashboard-chart/dashboard-chart.component';
import { DashboardDoughnutComponent } from './component/dashboard/dashboard-doughnut/dashboard-doughnut.component';
import { DashboardDoughnut2Component } from './component/dashboard/dashboard-doughnut2/dashboard-doughnut2.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { CenterComponent } from './component/home/center/center.component';
import { HeaderHomeComponent } from './component/home/header/header.component';
import { LayoutComponent } from './component/login/layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductListComponent } from './component/menu/product-list/product-list.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    MenuComponent,
    HeaderHomeComponent,
    AppComponent,
    DashboardComponent,
    UsersComponent,
    DashboardChartComponent,
    DashboardDoughnutComponent,
    DashboardDoughnut2Component,
    ProductComponent,
    RegisterComponent,
    LayoutComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDropDownModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
