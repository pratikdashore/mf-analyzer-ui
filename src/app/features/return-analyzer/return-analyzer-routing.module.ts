import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './components';
import { SearchContainerComponent } from './containers';

import { ReturnAnalyzerComponent } from './return-analyzer.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnAnalyzerComponent,
    children: [
      { path: 'search', component: SearchContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnAnalyzerRoutingModule {
  static components = [SearchContainerComponent]
}
