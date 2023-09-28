import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Task, TaskStatus } from '@ng-learn/kanban/tasks/util/types';
import { Squads } from '@ng-learn/kanban/shared/util/constants';

@Component({
  selector: 'nlk-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  squads = Squads().list;
  @HostBinding('class.tasks-feature-shell') t = true;
  tasks: Task[] = [
    {
      id: '1',
      title: 'Limpeza dos motores da Millennium Falcon',
      description:
        'Remover detritos e realizar a manutenção regular dos motores para garantir o desempenho ideal da nave.',
      status: TaskStatus.Backlog,
    },
    {
      id: '2',
      title: 'Calibração dos sistemas de navegação da Millennium Falcon',
      description:
        'Verificar e ajustar os sistemas de navegação para garantir uma precisão de rota confiável durante as viagens no hiperespaço.',
      status: TaskStatus.Backlog,
    },
    {
      id: '3',
      title: 'Verificação dos escudos defletores da Millennium Falcon',
      description:
        'Testar e reparar qualquer falha nos escudos defletores para garantir a proteção adequada contra ataques inimigos.',
      status: TaskStatus.Backlog,
    },
  ];

  tiraTask(taskTitle: string) {
    this.tasks = this.tasks.filter((task) => task.title !== taskTitle);
  }

  addTask(task: Task) {
    this.tasks = this.tasks.concat(task);
  }
}
