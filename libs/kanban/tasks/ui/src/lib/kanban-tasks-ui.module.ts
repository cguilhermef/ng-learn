import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task';
import { MatButtonModule } from '@angular/material/button';
import { EditTaskComponent } from './edit-task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TaskComponent, EditTaskComponent],
  exports: [TaskComponent, EditTaskComponent, MatFormFieldModule],
})
export class KanbanTasksUiModule {}
