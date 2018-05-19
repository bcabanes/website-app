import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';

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

  constructor(private localizeRouterService: LocalizeRouterService) {}

  ngOnInit() {
    this.linkList = this.localizeRouterService.routerEvents.asObservable()
      .pipe(
        startWith(this.localizeRouterService.parser.currentLang),
        map(language => [
          { name: 'Events', path: <string>this.localizeRouterService.translateRoute('/events') },
          { name: 'Team', path: <string>this.localizeRouterService.translateRoute('/page/team') },
          { name: 'Partners', path: <string>this.localizeRouterService.translateRoute('/page/partners') }
        ])
      );
  }
}
