import { Component, OnInit } from '@angular/core';
import { UsersService } from './user-list.service';
import { Users } from './user';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public contacts$!: Observable<Users>;
  public filter$!: Observable<string>;
  public search: FormControl = new FormControl('');
  public filteredContacts$!: Observable<Users>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.contacts$ = this.usersService.getAll();

    this.filter$ = this.search.valueChanges.pipe(startWith(''), debounceTime(500), distinctUntilChanged());

    this.filteredContacts$ = combineLatest([this.contacts$, this.filter$]).pipe(
      map(([users, filterString]) =>
        users.filter((user) => user.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
      )
    );
  }
}
