import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },

  {
    path: 'users',
    loadChildren: () => import('./modules/user-list/user-list.module').then((m) => m.UserListModule),
    // change to before if session resume is not supported in your app
  },
  {
    path: '**',
    redirectTo: 'users', // or 404 module
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
