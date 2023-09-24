export enum TaskStatus {
  Backlog,
  ToDo,
  Doing,
  Done,
}

export interface Squad {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  squadId: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  squadId: string;
  status: TaskStatus;
}
