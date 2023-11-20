import { Component, OnInit } from '@angular/core';
import {
  concatAll, delay,
  exhaust,
  exhaustAll,
  from,
  interval,
  map,
  mergeAll,
  Observable,
  of,
  startWith,
  switchAll
} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ng-learn-training-rxjs',
  templateUrl: './training-rxjs.component.html',
  styleUrls: ['./training-rxjs.component.scss'],
})
export class TrainingRxjsComponent {
  constructor(private httpClient: HttpClient) {}

  observableFromScratch$ = new Observable<number>(function (subscriber) {
    subscriber.next(5);
  });
  observableUsingOf$ = of(6);
  observableFrom$ = from([13,14]);

  observableWithInterval$ = interval(1000).pipe(
    map(() => (Math.random() * 10).toFixed(3))
  );

  observableWithDelay$ = of(20).pipe(
    delay(2000),
    startWith(5),
  );

  examples: Observable<unknown>[] = [
    this.observableFromScratch$,
    this.observableUsingOf$,
    this.observableFrom$,
    this.observableWithInterval$,
    this.observableWithDelay$,
  ];

  observableComposto$ = of(1,3,4).pipe(
    map((value) => this.getTasks()),
    mergeAll(),
    map((result) => {
      console.log(result)
      return 'teste';
    })
  );

  private getTasks() {
    return this.httpClient.get('/api/tasks');
  }
}
