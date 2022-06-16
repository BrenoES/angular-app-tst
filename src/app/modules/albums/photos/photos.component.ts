import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Photos } from './interfaces';
import { PhotoComponent } from './_components/photo/photo.component';
import { AlbumsService } from '../services/albums.service';

const breakpoints = {
  md: 768,
  lg: 992,
};

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
    this.photoColumns = this.getPhotoColumns(window.innerWidth);
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
    this.photoColumns = this.getPhotoColumns(event.target.innerWidth);
  }

  getPhotoColumns(width: number) {
    if (width >= breakpoints.lg) {
      return 6;
    }

    if (width >= breakpoints.md) {
      return 4;
    }

    return 1;
  }
}
