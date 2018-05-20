import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// app
import { HomeComponent } from './home';
import { LocalizeComponent } from './localize/localize.component';
import { LocalizeGuard } from './localize/localize.guard';


const routes: Routes = [
  {
    canActivate: [LocalizeGuard],
    path: ':lang',
    component: LocalizeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'events', loadChildren: 'app/event/event.module#EventModule' },
      { path: 'page', loadChildren: 'app/page/page.module#PageModule' },
      { path: 'style-guide', loadChildren: 'app/style-guide/style-guide.module#StyleGuideModule' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
