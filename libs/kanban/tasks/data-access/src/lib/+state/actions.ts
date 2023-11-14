import {createAction, props} from "@ngrx/store";

export const loadTasks = createAction(
  '[Tasks] load tasks'
);

export const loadTasksSuccess = createAction(
  '[Tasks] load tasks succcess',
  props<{ tasks: { description: string; title: string; }[] }>()
);

export const loadTasksError = createAction(
  '[Tasks] load tasks error',
);