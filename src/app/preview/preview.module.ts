import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview.component';
import { PrismicService } from '../prismic/prismic.service';
import { PreviewRoutingModule } from './preview-routing.module';
import { CookieService } from 'ngx-cookie';

@NgModule({
  imports     : [
    CommonModule,
    PreviewRoutingModule
  ],
  declarations: [ PreviewComponent ],
  providers   : [ CookieService, PrismicService ]
})
export class PreviewModule {
}
