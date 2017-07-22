import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared';
import { BlogRoutingModule } from './blog-routing.module';
import { BLOG_COMPONENTS } from './components/index';
import { BlogPostEffect } from './ngrx/blog-post.effect';
import { BlogPostService } from './blog-post.service';

@NgModule({
  imports     : [
    SharedModule,
    BlogRoutingModule,
    EffectsModule.forFeature([ BlogPostEffect ])
  ],
  declarations: [ ...BLOG_COMPONENTS ],
  providers: [ BlogPostService ]
})
export class BlogModule {
}
