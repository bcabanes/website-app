import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { PageService } from './page.service';
import { PageEffect } from './ngrx/page.effect';

@NgModule({
  imports  : [
    EffectsModule.forFeature([ PageEffect ]),
  ],
  providers: [
    PageService
  ]
})
export class PageModule {
}
