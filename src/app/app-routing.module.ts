import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'event', loadChildren: 'app/event/event.module#EventModule' },
  { path: 'style-guide', loadChildren: 'app/style-guide/style-guide.module#StyleGuideModule' },
  // { path: 'preview', loadChildren: 'app/preview/preview.module#PreviewModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
