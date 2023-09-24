export * from './lib/kanban-tasks-util-types.module';

export enum TaskStatus {
  Backlog,
  ToDo,
  Doing,
  Done,
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export interface AssignedTask extends Task {
  userId: string;
  squadId: string;
}
