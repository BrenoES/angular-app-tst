import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';

import { TodosComponent } from '@modules/todos/views';
import { TodosRoutingModule } from './todos-routing.modules';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, TodosRoutingModule, SharedModule],
  declarations: [TodosComponent],
})
export class TodosModule {}
