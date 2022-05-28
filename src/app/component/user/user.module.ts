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



@NgModule({
  declarations: [HeaderHomeComponent,CartComponent,HeaderComponent,FooterComponent,CenterComponent,HomeComponent,MenuComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserAnimationsModule,
  ],
 
})
export class UserModule { }
