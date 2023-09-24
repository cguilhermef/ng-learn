import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'tasks',
            loadChildren: () =>
              import('@ng-learn/kanban/tasks/feature/shell').then(
                (m) => m.KanbanTasksFeatureShellModule
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class KanbanMainFeatureShellModule {}
