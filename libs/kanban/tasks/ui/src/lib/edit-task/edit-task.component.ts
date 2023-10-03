import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Task, TaskStatus } from '@ng-learn/kanban/tasks/util/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nlk-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTaskComponent {
  @Output() taskChange = new EventEmitter<Task>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: this.fb.control<string>(''),
      title: this.fb.control<string>(''),
      description: this.fb.control<string>('', Validators.required),
      status: this.fb.control<TaskStatus>(TaskStatus.Backlog),
    });
  }

  create() {
    if (!this.form.valid) {
      return;
    }
    this.taskChange.emit(this.form.value);
    this.form.reset();
  }
}
