import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// app
import { LocalizeService } from '../../localize/localize.service';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div *ngIf="activeLanguage | async as language" fxLayout="center center" class="box-container">
      <div (click)="switchLang('en')" [ngClass]="{ 'active': language === 'en'}" class="box">en</div>
      <div (click)="switchLang('fr')" [ngClass]="{ 'active': language === 'fr'}" class="box">fr</div>
    </div>
  `,
  styleUrls: [ './language-switcher.component.scss' ]
})
export class LanguageSwitcherComponent implements OnInit {
  activeLanguage: Observable<string>;

  constructor(private localizeService: LocalizeService, private translateService: TranslateService) {
  }

  ngOnInit() {
    this.activeLanguage = this.translateService.onLangChange.pipe(
      map((langChangeEvent: LangChangeEvent) => langChangeEvent.lang)
    );
  }

  switchLang(language: string) {
    this.localizeService.switchLanguage(language);
  }
}
