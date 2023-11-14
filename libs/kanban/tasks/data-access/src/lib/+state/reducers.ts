import {createReducer, on} from "@ngrx/store";
import {TasksState} from "./models";
import {loadTasks, loadTasksSuccess} from "./actions";

export const tasksInitialState: TasksState = {
  tasks: [],
  tasksAreLoading: false
};

export const tasksReducer = createReducer(
  tasksInitialState,
  on(
    loadTasks,
    (state) => {
      return {
        ...state,
        tasksAreLoading: true
      };
    }
  ),
  on(
    loadTasksSuccess,
    (state, action) => {
      return {
        ...state,
        tasks: action.tasks
      }
    }
  )
);