import { TaskStatus } from '@ng-learn/kanban/tasks/util/types';

export interface CreateTaskDTO {
  description: string;
  title: string;
  status: TaskStatus;
}
