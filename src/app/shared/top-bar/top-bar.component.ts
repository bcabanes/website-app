import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-top-bar',
  template: `
    <div class="top-bar-spacer"></div>
    <!-- /.top-bar-spacer -->
    <div class="top-bar-container">
      <div fxFill fxLayout="row" fxLayoutAlign="space-between center">
        <app-logo fxFlex="50" fxFlex.gt-xs="30"></app-logo>
        <div fxFlex="35" class="language-switcher">
          language switcher
        </div>
        <!-- /.language-switcher -->
        <button md-button (click)="sidenavRef.toggle()">
          <mat-icon svgIcon="menu"></mat-icon>
        </button>
      </div>
    </div>
    <!-- /.top-bar-container -->
  `,
  styleUrls: [ './top-bar.component.scss' ]
})
export class TopBarComponent {
  @Input() sidenavRef: MatSidenav;
}
