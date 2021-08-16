import { AlbumsRoutingModule } from './albums-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { MatListModule } from '@angular/material/list';
import { PhotosComponent } from './photos/photos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AlbumsService } from './albums.service';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [AlbumsService],
  declarations: [AlbumsComponent, PhotosComponent],
})
export class AlbumsModule {}
