import { Component } from '@angular/core';

const MENU_LIST = [{ route: 'users', icon: 'people_outline', title: 'Meus contatos' }];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public menus = MENU_LIST;
  constructor() {}
}
