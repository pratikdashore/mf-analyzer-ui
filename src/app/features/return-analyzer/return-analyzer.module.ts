import { NgModule } from '@angular/core';

import { ReturnAnalyzerRoutingModule } from './return-analyzer-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [ReturnAnalyzerRoutingModule.components],
  imports: [SharedModule, ReturnAnalyzerRoutingModule],
})
export class ReturnAnalyzerModule {}
