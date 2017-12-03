import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div fxLayout.xs="column" fxLayoutAlign="space-between start" class="footer-container">
      <p>© 2017 Sketch MTL.</p>
      <p>
        Design: Matt Preston, Fabien Laborie. <br>
        Development: Benjamin Cabanes, Hamsa Alboukhari.
      </p>
    </div>
  `,
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent {

}
