import { NgModule } from '@angular/core';
// app
import { ContentfulService } from './contentful.service';

@NgModule({
  providers: [ ContentfulService ]
})
export class ContentfulModule {
}
