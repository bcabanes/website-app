import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader
} from 'localize-router';
// app
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', loadChildren: 'app/event/event.module#EventModule' },
  { path: 'page', loadChildren: 'app/page/page.module#PageModule' },
  { path: 'style-guide', loadChildren: 'app/style-guide/style-guide.module#StyleGuideModule' },
];

export function HttpLoaderFactory(translate, location, settings) {
  return new ManualParserLoader(translate, location, settings, [ 'en', 'fr' ]);
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [ TranslateService, Location, LocalizeRouterSettings, HttpClient ]
      }
    })
  ],
  exports: [ RouterModule, LocalizeRouterModule ]
})
export class AppRoutingModule {
}
