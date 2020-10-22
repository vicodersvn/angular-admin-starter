import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MasterComponent } from './components/master.component';
import { MainComponent } from './components/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            component: HomepageComponent
          }
        ]
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule)
      },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
