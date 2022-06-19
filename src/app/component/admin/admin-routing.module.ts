import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../user/menu/menu.component';
import { BillComponent } from './bill/bill.component';
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { SexComponent } from './sex/sex.component';
import { SizeComponent } from './size/size.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'order', component: OrderComponent },
      { path: 'sex', component: SexComponent },
      { path: 'size', component: SizeComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'category', component: CategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class AdminRoutingModule {}
