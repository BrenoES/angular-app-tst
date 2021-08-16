import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.modules';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, TodosRoutingModule, MatListModule, MatCheckboxModule],
  declarations: [TodosComponent],
})
export class TodosModule {}
