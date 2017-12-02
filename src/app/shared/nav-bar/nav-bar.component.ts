import { Component } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-nav-bar',
  template: `
    <div fxFill fxLayout="row" fxLayoutGap="24px"
         fxFlexAlign="space-between center"
         class="nav-bar" >
      <a *ngFor="let link of linkList"
         [routerLink]="link.path"
         routerLinkActive="active"
         fxFlex="none" fxFlex.lt-md="auto"
         class="nav-link">{{link.name}}</a>
    </div>
  `,
  styleUrls:  [ './nav-bar.component.scss' ]
})
export class NavBarComponent {
  linkList: { name: string, path: string }[];

  constructor(private localizeRouterService: LocalizeRouterService) {
    this.linkList = [
      { name: 'Events', path: <string>this.localizeRouterService.translateRoute('/events') },
      { name: 'Team', path: <string>this.localizeRouterService.translateRoute('/page/team') },
      { name: 'Partners', path: <string>this.localizeRouterService.translateRoute('/page/partners') }
    ];
  }
}
