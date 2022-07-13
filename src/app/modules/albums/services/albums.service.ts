import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Albums } from '@modules/albums/interfaces';
import { Photos } from '@modules/albums/photos/interfaces';

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
