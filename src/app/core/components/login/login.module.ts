import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, LoginRoutes],
})
export class LoginModule {}
