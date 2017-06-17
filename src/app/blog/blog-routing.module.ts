import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list.component';
import { PostComponent } from './components/post.component';
import { PostDetailComponent } from './components/post-detail.component';
import { BlogComponent } from './components/blog.component';

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
