import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilModule } from './Util/util.module';
import { DirectivesModule } from './directives/directives.module';
import { MetaService } from './services/meta/meta.service';
import { UntilsService } from './services/utils/untils.service';

@NgModule({
  imports: [CommonModule, UtilModule, DirectivesModule],
  exports: [DirectivesModule],
  providers: [MetaService, UntilsService],
  declarations: []
})
export class SharedModule {}
