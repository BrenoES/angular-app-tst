import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Albums } from '@modules/albums/interfaces';
import { AlbumsService } from '@modules/albums/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  public albums$!: Observable<Albums>;

  constructor(private albumsService: AlbumsService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const { userId } = this.activatedRoute.snapshot.params;
    this.getalbumsUser(userId);
  }

  getalbumsUser(userID: string) {
    this.albums$ = this.albumsService.getAlbumsUser(userID);
  }
}
