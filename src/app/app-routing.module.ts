import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './component/bill/bill.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { OrderComponent } from './component/order/order.component';
import { ProductComponent } from './component/product/product.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  // { path: 'admin', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'bill', component: BillComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
