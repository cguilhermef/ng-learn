export interface TasksState {
  tasks: { description: string; title: string; }[];
  tasksAreLoading: boolean;
}
