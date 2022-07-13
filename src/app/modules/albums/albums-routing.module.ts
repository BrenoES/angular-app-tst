import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './pages';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: ':albumId', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
