import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { BLOG_COMPONENTS } from './components/index';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostService } from './blog-post.service';
import { BlogPostListGuardService } from './blog-post-list-guard.service';
import { BlogPostDetailGuardService } from './blog-post-detail-guard.service';

@NgModule({
  imports     : [
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [ ...BLOG_COMPONENTS ],
  providers: [
    BlogPostDetailGuardService,
    BlogPostListGuardService,
    BlogPostService
  ]
})
export class BlogModule {
}
