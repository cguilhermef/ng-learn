import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'nlk-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() id = '';
  @Input() title = '';
  @Input() description = '';
  @Output() remove = new EventEmitter<string>();

  /**
   * {
   *   "id": "1",
   *   "title": "Limpeza dos motores da Millennium Falcon",
   *   "description": "Remover detritos e realizar a manutenção regular dos motores para garantir o desempenho ideal da nave.",
   *   "status": 0
   * }
   */

  removeTask() {
    this.remove.emit(this.id);
  }
}
