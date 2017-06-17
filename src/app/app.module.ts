import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrismicModule } from './prismic/prismic.module';
import { CookieModule } from 'ngx-cookie';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CookieModule.forRoot(),
    AppRoutingModule,
    PrismicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
