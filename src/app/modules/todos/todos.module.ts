import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.modules';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TodosRoutingModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  declarations: [TodosComponent],
})
export class TodosModule {}
