import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismicService } from './prismic.service';
import { PreviewComponent } from '../preview/preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PrismicService]
})
export class PrismicModule { }
