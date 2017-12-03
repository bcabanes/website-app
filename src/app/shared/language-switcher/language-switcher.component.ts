import { Component } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div fxLayout="center center" class="box-container">
      <div (click)="switchLang('en')" [ngClass]="{ 'active': active === 'en'}" class="box">en</div>
      <div (click)="switchLang('fr')" [ngClass]="{ 'active': active === 'fr'}" class="box">fr</div>
    </div>
  `,
  styleUrls: [ './language-switcher.component.scss' ]
})
export class LanguageSwitcherComponent {
  active: string;

  constructor(private localizeService: LocalizeRouterService) {
    this.active = this.localizeService.parser.currentLang;
    this.localizeService.routerEvents.subscribe(language => this.active = language);
  }

  switchLang(language: string) {
    this.localizeService.changeLanguage(language);
  }
}
