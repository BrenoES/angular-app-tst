import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.modules';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, TodosRoutingModule, SharedModule],
  declarations: [TodosComponent],
})
export class TodosModule {}
