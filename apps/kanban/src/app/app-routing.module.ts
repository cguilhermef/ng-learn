import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks'
      },
      {
        path: 'tasks',
        loadChildren: () => import('@ng-learn/kanban/main/feature-shell').then(
          (m) => m.KanbanMainFeatureShellModule
        )
      },
      {
        path: 'rxjs',
        loadChildren: () => import('@ng-learn/rxjs/feature-shell').then(
          (m) => m.RxjsFeatureShellModule
        )
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}