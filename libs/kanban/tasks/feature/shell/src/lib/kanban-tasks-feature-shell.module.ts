import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell';
import { RouterModule } from '@angular/router';
import { KanbanTasksUiModule } from '@ng-learn/kanban/tasks/ui';
import { HttpClientModule } from '@angular/common/http';
import {KanbanTasksDataAccessModule} from "@ng-learn/kanban/tasks/data-access";

@NgModule({
  imports: [
    CommonModule,
    KanbanTasksUiModule,
    HttpClientModule,
    KanbanTasksDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShellComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [ShellComponent],
})
export class KanbanTasksFeatureShellModule {}
