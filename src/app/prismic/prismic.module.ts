import { NgModule } from '@angular/core';
import { PrismicService } from './prismic.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports     : [
    SharedModule
  ],
  declarations: [],
  providers   : [ PrismicService ]
})
export class PrismicModule {
}
