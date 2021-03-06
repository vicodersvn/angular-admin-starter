import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NbSidebarModule } from '@nebular/theme';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './store/store.module';
import { ExceptionHandler } from './shared/Exceptions/ExceptionHandler';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    NbSidebarModule.forRoot(),
    SharedModule,
    AppStoreModule,
    ComponentsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ExceptionHandler },
    { provide: 'Notification', useValue: Notification }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
