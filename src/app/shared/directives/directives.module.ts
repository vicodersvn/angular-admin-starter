import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerPageComponent } from './per-page/per-page.component';
import { FormsModule } from '@angular/forms';
import { LengthAwarePaginatorComponent } from './length-aware-paginator/length-aware-paginator.component';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { NbInputModule, NbButtonModule } from '@nebular/theme';
import { SpinnerDirective } from './spinner/spinner.directive';

@NgModule({
  declarations: [PerPageComponent, LengthAwarePaginatorComponent, SearchFormComponent, SpinnerDirective],
  imports: [CommonModule, FormsModule, RouterModule, NbInputModule, NbButtonModule],
  exports: [PerPageComponent, LengthAwarePaginatorComponent, SearchFormComponent]
})
export class DirectivesModule {}
