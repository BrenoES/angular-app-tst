import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('./core/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user-list/user-list.module').then((m) => m.UserListModule),
    canActivate: [AuthGuard],
    // change to before if session resume is not supported in your app
  },
  {
    path: '**',
    redirectTo: 'login', // or 404 module
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
