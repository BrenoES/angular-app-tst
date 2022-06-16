import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsComponent } from './pages/albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsService } from './services/albums.service';
import { PhotosComponent } from './photos/photos.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, AlbumsRoutingModule, SharedModule],
  providers: [AlbumsService],
  declarations: [AlbumsComponent, PhotosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlbumsModule {}
