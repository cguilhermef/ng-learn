import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadTasks, loadTasksSuccess} from "./actions";
import {map, switchMap} from "rxjs";
import {TasksService} from "../tasks.service";
import {Injectable} from "@angular/core";

@Injectable()
export class TasksEffects {

  constructor(
    private actions$: Actions,
    private service: TasksService
  ) {}

  loadTasks$ = createEffect(
    () => this.actions$.pipe(
      ofType( loadTasks ),
      switchMap( () => {
        return this.service.getTasksApi().pipe(
          map((tasksArray) => loadTasksSuccess({ tasks: tasksArray }))
        )
      })
    )
  )
}