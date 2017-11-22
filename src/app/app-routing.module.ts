import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// app
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'events', loadChildren: 'app/event/event.module#EventModule' },
  { path: 'page', loadChildren: 'app/page/page.module#PageModule' },
  { path: 'style-guide', loadChildren: 'app/style-guide/style-guide.module#StyleGuideModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
