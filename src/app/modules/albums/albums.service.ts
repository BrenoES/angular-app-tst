import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums } from './albums';
import { Photos } from './photos/photos';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private httpClient: HttpClient) {}

  getAlbumsUser(userId: string) {
    return this.httpClient.get<Albums>('albums', { params: { userId } });
  }

  getAlbumsPhotos(albumId: string) {
    return this.httpClient.get<Photos>(`albums/${albumId}/photos`);
  }

  getAll() {
    return this.httpClient.get('albums');
  }
}