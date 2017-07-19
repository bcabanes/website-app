import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieModule, CookieService } from 'ngx-cookie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PrismicModule } from './prismic';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers, developmentReducerFactory } from './ngrx/index';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageEffect } from './page/ngrx/page.effect';
import { PageModule } from './page/page.module';
import { SettingModule } from './setting/setting.module';

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
