import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './pages/user-list.component';

import { UsersService } from './services/user-list.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserListRoutingModule, SharedModule],
  providers: [UsersService],
  declarations: [UserListComponent, UserDetailComponent],
})
export class UserListModule {}
