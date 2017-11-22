import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PageModel } from './page.model';
// app


@Component({
  selector: 'app-page-detail',
  encapsulation: ViewEncapsulation.None,
  template: `
    <article *ngIf="page">
      <header>
        <h1 class="mat-headline">{{page.title}}</h1>
      </header>
      <div [innerHtml]="page.content | mdToHtml" class="content mat-body-1"></div>
      <!-- /.content -->
    </article>
  `,
  styles: [`
    .content img { max-width: 100%; }
  `]
})
export class PageDetailComponent {
  @Input() page: PageModel;
}
