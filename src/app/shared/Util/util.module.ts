import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryParser } from './query-parser';
import { TimeService } from './time.service';

@NgModule({
  imports: [CommonModule],
  providers: [QueryParser, TimeService],
  declarations: []
})
export class UtilModule {}
