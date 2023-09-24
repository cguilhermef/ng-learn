import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
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
