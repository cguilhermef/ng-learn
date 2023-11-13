import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Task } from '@ng-learn/kanban/tasks/util/types';
import { Squads } from '@ng-learn/kanban/shared/util/constants';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'nlk-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  squads = Squads().list;
  @HostBinding('class.tasks-feature-shell') t = true;
  tasks: Task[] = [];
  tasks$ = new Subject<Task[]>();
  tasksEmpty$ = this.tasks$.pipe(map((tasks) => tasks.length === 0));

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTasksApi();
  }

  tiraTask(taskId: string) {
    this.http.delete(`/api/tasks/${taskId}`).subscribe(() => {
      this.getTasksApi();
    })
  }

  addTask(task: Task) {
    this.saveTaskApi(task);
  }

  saveTaskApi(task: Task) {
    this.http.post('/api/tasks', task).subscribe((payload) => {
      this.getTasksApi();
    });
  }

  getTasksApi() {
    this.http.get<Task[]>('/api/tasks').subscribe((tasks) => {
      this.tasks = this.tasks.concat(tasks);
      this.tasks$.next(tasks);
    });
  }
}
