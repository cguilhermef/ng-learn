import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'nlk-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
