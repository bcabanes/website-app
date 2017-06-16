import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent, children: [
    { path: '', component: PostListComponent },
    { path: ':uid', component: PostDetailComponent }
  ] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class BlogRoutingModule {}
