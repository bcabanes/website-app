import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { ContentfulModule } from './contentful/contentful.module';
import { environment } from 'environments/environment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.i18nFilePath, environment.i18nFileExt);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule, // Material animations.
    CoreModule,

    SharedModule,
    ContentfulModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [ HttpClient ]
      }
    }),

    // AppRoutingModule should be the last because of `**` route wildcard.
    AppRoutingModule
  ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }
}
