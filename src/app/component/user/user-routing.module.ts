import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

import { ProductDetailComponent } from './home/center/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './menu/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: ':id',
        component: ProductListComponent,
      },
      {
        path: 'cate/:id',
        component: ProductListComponent,
      },
      {
        path: 'brand/:id',
        component: ProductListComponent,
      },
      {
        path: 'sex/:id',
        component: ProductListComponent,
      },
    ],
  },

  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/checkout',
    component: CheckoutComponent,
  },

  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
