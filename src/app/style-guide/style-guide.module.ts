import { NgModule } from '@angular/core';
// app
import { SharedModule } from '../shared';
import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideComponent } from './style-guide.component';

@NgModule({
  declarations: [ StyleGuideComponent ],
  imports: [
    SharedModule,
    StyleGuideRoutingModule
  ]
})
export class StyleGuideModule {
}
