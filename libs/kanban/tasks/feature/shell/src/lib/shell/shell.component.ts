import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    {
      id: '4',
      title: 'Manutenção dos canhões laser da Millennium Falcon',
      description:
        'Limpar e verificar o funcionamento dos canhões laser para garantir a eficácia durante combates espaciais.',
      status: TaskStatus.Backlog,
    },
    {
      id: '5',
      title: 'Inspeção dos sistemas de suporte de vida da Millennium Falcon',
      description:
        'Verificar os sistemas de oxigênio, filtragem de ar e controle de temperatura para garantir um ambiente seguro e confortável para a tripulação.',
      status: TaskStatus.Backlog,
    },
  ];
}
