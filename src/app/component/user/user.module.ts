import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderHomeComponent } from './home/header/header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { CenterComponent } from './home/center/center.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './home/center/product-detail/product-detail.component';
import { ProductListComponent } from './menu/product-list/product-list.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  declarations: [
    HeaderHomeComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    HomeComponent,
    MenuComponent,
    ProductDetailComponent,
    CheckoutComponent,
    CartComponent,
    ProductListComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class UserModule {}
