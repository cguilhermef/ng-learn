import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRxjsComponent } from './training-rxjs/training-rxjs.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrainingRxjsComponent
      }
    ])
  ],
  declarations: [TrainingRxjsComponent],
})
export class RxjsFeatureShellModule {}
