import { NgModule } from '@angular/core';
// app
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { PageDetailComponent } from './page-detail.component';

@NgModule({
  declarations: [
    PageComponent,
    PageDetailComponent
  ],
  imports  : [
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule {
}
