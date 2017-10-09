import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieModule, CookieService } from 'ngx-cookie';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// app
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PrismicModule } from './prismic';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { appReducers, developmentReducerFactory } from './ngrx/index';
import { PageModule } from './page/page.module';
import { SettingModule } from './setting/setting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let DEV_TOOLS: any[] = [];
let reducersConfiguration = undefined;
if (!environment.production) {
  DEV_TOOLS = [
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ];
  reducersConfiguration = {
    reducerFactory: developmentReducerFactory
  };
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
    CookieModule.forRoot(),

    StoreModule.forRoot(appReducers, reducersConfiguration),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,

    PageModule,
    SettingModule,

    SharedModule,

    PrismicModule,

    // Developer tools (configured only in development mode).
    DEV_TOOLS,

    // AppRoutingModule should be the last because of `**` route wildcard.
    AppRoutingModule
  ],
  providers   : [ CookieService ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {
}
