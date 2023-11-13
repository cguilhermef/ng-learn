import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "@ng-learn/kanban/tasks/util/types";

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) {}

  tiraTask(taskId: string) {
    return this.http.delete(`/api/tasks/${taskId}`);
  }

  saveTaskApi(task: Task) {
    return this.http.post('/api/tasks', task);
  }

  getTasksApi() {
    return this.http.get<Task[]>('/api/tasks');
  }
}
