import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PrismicService } from '../prismic/prismic.service';
import { BlogRoutingModule } from './blog-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports     : [
    CommonModule,
    BlogRoutingModule,
    RouterModule
  ],
  declarations: [ PostComponent, PostListComponent, PostDetailComponent, BlogComponent ],
  providers: [ PrismicService ]
})
export class BlogModule {
}
