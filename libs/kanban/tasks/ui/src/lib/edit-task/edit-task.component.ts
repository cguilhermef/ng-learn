import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Task, TaskStatus } from '@ng-learn/kanban/tasks/util/types';

@Component({
  selector: 'nlk-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTaskComponent {
  task = {
    title: '',
    description: '',
  };

  @Output() taskChange = new EventEmitter<Task>();

  create() {
    this.taskChange.emit({
      id: '',
      title: this.task.title,
      description: this.task.description,
      status: TaskStatus.Backlog,
    });

    this.task.title = '';
    this.task.description = '';
  }
}
