import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './components/post-list.component';
import { PostDetailComponent } from './components/post-detail.component';
import { BlogComponent } from './components/blog.component';
import { BlogPostListGuardService } from './blog-post-list-guard.service';
import { BlogPostDetailGuardService } from './blog-post-detail-guard.service';

const routes: Routes = [
  { path: '', component: BlogComponent, children: [
    { path: '', component: PostListComponent, canActivate: [ BlogPostListGuardService ] },
    { path: 'page/:pageNumber', component: PostListComponent, canActivate: [ BlogPostListGuardService ] },
    { path: ':uid', component: PostDetailComponent, canActivate: [ BlogPostDetailGuardService ] }
  ] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class BlogRoutingModule {}
