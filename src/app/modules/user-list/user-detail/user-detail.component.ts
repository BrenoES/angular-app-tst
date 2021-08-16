import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../user-list.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

interface ITabLink {
  location: string;
  label: string;
  index: number;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public user$!: Observable<User>;
  public userId!: string;
  public links: ITabLink[] = [];
  public activeLinkIndex = 0;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.links = [
      { location: 'albums', label: 'Albuns', index: 0 },
      { location: 'posts', label: 'Postagens', index: 1 },
      { location: 'todos', label: 'To-dos', index: 2 },
    ];
  }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.userId;
    this.user$ = this.usersService.getUserByID(this.userId);

    this.router.events.subscribe((res) => {
      const find = this.links.find((tab: ITabLink) => tab.location === '.' + this.router.url);
      if (find) this.activeLinkIndex = this.links.indexOf(find);
    });
  }
}
