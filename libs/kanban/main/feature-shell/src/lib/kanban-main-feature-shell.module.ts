import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
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
