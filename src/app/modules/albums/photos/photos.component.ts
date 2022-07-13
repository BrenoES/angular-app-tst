import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { AlbumsService } from '@modules/albums/services';
import { getColumns } from '@core/helpers';

import { Photos } from './interfaces';
import { PhotoComponent } from './_components';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  public photos$!: Observable<Photos>;
  public photoColumns!: number;

  constructor(
    private albumsService: AlbumsService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const { albumId } = this.activatedRoute.snapshot.params;
    this.getPhotos(albumId);
    this.getPhotoColumns(window.innerWidth);
  }

  getPhotos(albumId: string) {
    this.photos$ = this.albumsService.getAlbumsPhotos(albumId);
  }

  openPhotoPreview(urlImage: string) {
    this.dialog.open(PhotoComponent, {
      data: { urlImage },
    });
  }

  onResize(event: any) {
    this.getPhotoColumns(event.target.innerWidth);
  }

  getPhotoColumns(width: number) {
    this.photoColumns = getColumns(width);
  }
}
