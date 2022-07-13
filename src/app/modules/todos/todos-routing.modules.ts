import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodosComponent } from '@modules/todos/views';

const routes: Routes = [{ path: '', component: TodosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
