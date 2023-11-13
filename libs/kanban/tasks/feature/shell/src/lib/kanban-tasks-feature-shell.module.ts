import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell';
import { RouterModule } from '@angular/router';
import { KanbanTasksUiModule } from '@ng-learn/kanban/tasks/ui';
import { HttpClientModule } from '@angular/common/http';
import {TasksService} from "./tasks.service";

@NgModule({
  imports: [
    CommonModule,
    KanbanTasksUiModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShellComponent,
      },
    ]),
  ],
  providers: [
    TasksService
  ],
  exports: [RouterModule],
  declarations: [ShellComponent],
})
export class KanbanTasksFeatureShellModule {}
