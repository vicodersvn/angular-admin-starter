import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { MasterComponent } from './master.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [MasterComponent, MainComponent, BaseComponent, PageNotFoundComponent, HomepageComponent],
  imports: [CommonModule, RouterModule, NgxSpinnerModule, ThemeModule.forRoot(), NbMenuModule.forRoot()],
  providers: [NgxSpinnerService]
})
export class ComponentsModule {}
