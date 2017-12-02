import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';
// app
import { PageComponent } from './page.component';

const routes: Routes = [
  { path: ':page-slug', component: PageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ]
})
export class PageRoutingModule {
}
