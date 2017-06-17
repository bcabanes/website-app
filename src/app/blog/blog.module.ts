import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { BlogRoutingModule } from './blog-routing.module';
import { BLOG_COMPONENTS } from './components/index';

@NgModule({
  imports     : [
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [ ...BLOG_COMPONENTS ]
})
export class BlogModule {
}
