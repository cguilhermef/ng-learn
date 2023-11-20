import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';

import { TrainingRxjsComponent } from './training-rxjs.component';
import {filter, from, Observable, of, skip, take} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TrainingRxjsComponent', () => {
  let component: TrainingRxjsComponent;
  let fixture: ComponentFixture<TrainingRxjsComponent>;

  // it('Com o observable definido no caso de teste, faça com que apenas valores pares sejam retornados', () => {
  //   let result;
  //   const observable$ = of([1,2,3,4,5,6]);
  //   observable$.subscribe((value) => {
  //     result = value
  //   });
  //   expect(result).toStrictEqual([2,4,6]);
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [TrainingRxjsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function flushAsync() {
    flush();
    expect.hasAssertions();
  }

  const testCases = [
    {
      description: "Com o observable definido abaixo, faça com que o apenas valores pares sejam emitidos",
      observable: from([1,2,3,4,5,6])
    },
    {
      description: 'Com o observable definido abaixo, faça com que apenas os valores maiores que 10 sejam retornados',
      observable: from([8,9,10,11,12,13])
    },
    {
      description: 'Com o observable definido abaixo, faça com que apenas 2 valores sejam recebidos',
      observable: of(1,2,3,4,5,6)
    },
    {
      description: 'Com o observable definido abaixo, faça com que os valores retornados no array sejam dobrados',
      observable: of([1,2,3,4,5,6])
    },
  ]

  describe('Desafios:', () => {
    it(testCases[0].description, fakeAsync(
      () => {
        const observable$ = testCases[0].observable as Observable<number>;

        const collect: number[] = [];
        observable$.subscribe((value) => {
          collect.push(value);
        });
        flushAsync();
        expect(collect).toStrictEqual([2,4,6]);
      }
    ));

    it(testCases[1].description, fakeAsync(
      () => {
        const observable$ = testCases[1].observable as Observable<number>;

        const collector: number[] = [];
        observable$.subscribe((value) => {
          collector.push(value);
        });
        flushAsync();
        expect(collector).toStrictEqual([11,12,13]);
      }
    ));

    it(testCases[2].description, fakeAsync(
      () => {
        const collector: number[] = [];
        const observable$ = testCases[2].observable as Observable<number>;
        observable$.subscribe((value) => {
          collector.push(value);
        });
        flushAsync();

        expect(collector).toStrictEqual([1,2]);
      }
    ));

    it(testCases[3].description, fakeAsync(
      () => {
        const observable$ = testCases[3].observable as Observable<number[]>;
        observable$.subscribe((value) => {
          expect(value).toStrictEqual([2,4,6,8,10,12]);
        });
        flushAsync();
      }
    ));

  })
});
