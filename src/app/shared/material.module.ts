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
    this.registerIcons();
  }

  private registerIcons(): void {
    this.iconRegistry.addSvgIcon('calendar',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/calendar.svg'));
    this.iconRegistry.addSvgIcon('cross',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/cross.svg'));
    this.iconRegistry.addSvgIcon('facebook',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/facebook.svg'));
    this.iconRegistry.addSvgIcon('locator',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/locator.svg'));
    this.iconRegistry.addSvgIcon('open',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/open.svg'));
    this.iconRegistry.addSvgIcon('slack',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/slack.svg'));
    this.iconRegistry.addSvgIcon('twitter',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/twitter.svg'));
  }
}
