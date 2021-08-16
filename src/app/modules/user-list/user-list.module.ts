import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './user-list.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserListRoutingModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [UsersService],
  declarations: [UserListComponent, UserDetailComponent],
})
export class UserListModule {}
