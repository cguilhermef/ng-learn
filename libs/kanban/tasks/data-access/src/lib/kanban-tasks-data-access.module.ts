import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksService} from "./tasks.service";
import {StoreModule} from "@ngrx/store";
import { tasksReducer} from "./+state/reducers";
import {EffectsModule} from "@ngrx/effects";
import {TasksEffects} from "./+state/effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('kanban-tasks', tasksReducer),
    EffectsModule.forFeature([TasksEffects])
  ],
  providers: [
    TasksService
  ]
})
export class KanbanTasksDataAccessModule {}
