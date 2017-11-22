import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-label',
  template: `
    <span class="tag"><ng-content></ng-content></span>
  `,
  styles: [`
    .tag {
      margin-right: 6px;
      padding: 6px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      display: inline-block;
      font-size: 70%;
      font-weight: bold;
      text-transform: uppercase;
    }
  `]
})
export class TagComponent {
  @Input() label: string;
}
