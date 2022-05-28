import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./component/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./component/user/user.module').then((m) => m.UserModule),
  },
  {
    path: ' ',
    loadChildren: () =>
      import('./component/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./component/auth/auth.module').then((m) => m.AuthModule),
  },
  //
  // {
  //   path: 'auth',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'register',
  //       component: RegisterComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
