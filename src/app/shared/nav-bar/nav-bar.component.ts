import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  template: `
    <div fxFill fxLayout="row" fxLayoutGap="24px"
         fxFlexAlign="space-between center"
         class="nav-bar" >
      <a *ngFor="let link of linkList | async"
         [routerLink]="link.path"
         routerLinkActive="active"
         fxFlex="none" fxFlex.lt-md="auto"
         class="nav-link">{{link.name}}</a>
    </div>
  `,
  styleUrls:  [ './nav-bar.component.scss' ]
})
export class NavBarComponent implements OnInit {
  linkList: Observable<{ name: string, path: string }[]>;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.linkList = this.translateService.onLangChange.pipe(
      map((langChangeEvent: LangChangeEvent) => langChangeEvent.lang),
      map(language => [
        { name: 'Events', path: `${language}/events` },
        { name: 'Team', path: `${language}/page/team` },
        { name: 'Partners', path: `${language}/page/partners` }
      ])
    );
  }
}
