import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell';
import { RouterModule } from '@angular/router';
import { KanbanTasksUiModule } from '@ng-learn/kanban/tasks/ui';

@NgModule({
  imports: [
    CommonModule,
    KanbanTasksUiModule,
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
