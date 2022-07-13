import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { Store } from '@ngxs/store';
import { Logout } from '@shared/states/auth/auth.actions';

const MENU_LIST = [{ route: 'users', icon: 'people_outline', title: 'Meus contatos' }];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav')
  sideNav!: MatSidenav;

  public menus = MENU_LIST;
  constructor(private store: Store) {}

  logout() {
    this.sideNav.close();
    this.store.dispatch(new Logout());
  }
}
