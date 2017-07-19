import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  // { path: 'preview', loadChildren: 'app/preview/preview.module#PreviewModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
