import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatIconModule, MatIconRegistry } from '@angular/material';

import 'hammerjs';

const MATERIALS_MODULES: any[] = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [
    HttpModule,
    ...MATERIALS_MODULES
  ],
  exports: [ ...MATERIALS_MODULES ]
})
export class MaterialModule {

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('facebook',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/facebook.svg'));
    iconRegistry.addSvgIcon('twitter',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/twitter.svg'));
    iconRegistry.addSvgIcon('slack',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/slack.svg'));
  }
}
