import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent, pathMatch: 'full' },
  {
    path: ':userId',
    component: UserDetailComponent,
    children: [
      { path: '', redirectTo: 'albums', pathMatch: 'full' },
      { path: 'albums', loadChildren: () => import('../albums/albums.module').then((m) => m.AlbumsModule) },
      { path: 'posts', loadChildren: () => import('../posts/posts.module').then((m) => m.PostsModule) },
      { path: 'todos', loadChildren: () => import('../todos/todos.module').then((m) => m.TodosModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}
