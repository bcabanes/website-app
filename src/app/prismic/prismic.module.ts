import { NgModule } from '@angular/core';
import { PrismicService } from './prismic.service';
import { SharedModule } from '../shared/shared.module';
import { PrismicProvider } from './prismic';

@NgModule({
  imports     : [
    SharedModule
  ],
  declarations: [],
  providers   : [
    PrismicProvider,
    PrismicService
  ]
})
export class PrismicModule {
}
