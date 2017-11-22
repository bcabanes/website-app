import { Component } from '@angular/core';

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

  linkList: { name: string, path: string }[] = [
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/page/team' },
    { name: 'Partners', path: '/page/partners' }
  ];
}
