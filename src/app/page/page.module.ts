import { NgModule } from '@angular/core';
// app
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared';
import { PageDetailComponent } from './page-detail.component';

@NgModule({
  declarations: [
    PageComponent,
    PageDetailComponent
  ],
  imports  : [
    SharedModule,
    PageRoutingModule
  ]
})
export class PageModule {
}
