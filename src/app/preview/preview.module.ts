import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PreviewComponent } from './preview.component';
import { PreviewRoutingModule } from './preview-routing.module';

@NgModule({
  imports     : [
    SharedModule,
    PreviewRoutingModule
  ],
  declarations: [ PreviewComponent ],
  providers   : []
})
export class PreviewModule {
}
