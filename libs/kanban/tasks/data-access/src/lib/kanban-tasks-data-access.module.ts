import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksService} from "./tasks.service";

@NgModule({
  imports: [CommonModule],
  providers: [
    TasksService
  ]
})
export class KanbanTasksDataAccessModule {}
