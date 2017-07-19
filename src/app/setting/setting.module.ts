import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SettingService } from './setting.service';
import { SettingEffect } from './ngrx/setting.effect';

@NgModule({
  imports  : [
    EffectsModule.forFeature([ SettingEffect ]),
  ],
  providers: [
    SettingService
  ]
})
export class SettingModule {
}
