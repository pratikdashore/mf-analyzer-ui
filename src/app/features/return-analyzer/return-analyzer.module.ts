import { NgModule } from '@angular/core';

import { ReturnAnalyzerRoutingModule } from './return-analyzer-routing.module';
import { ReturnAnalyzerComponent } from './return-analyzer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavDataTableComponent, SearchFormComponent } from './components';


@NgModule({
  declarations: [ReturnAnalyzerComponent, SearchFormComponent, NavDataTableComponent, ReturnAnalyzerRoutingModule.components],
  imports: [
    SharedModule,
    ReturnAnalyzerRoutingModule
  ]
})
export class ReturnAnalyzerModule { }
