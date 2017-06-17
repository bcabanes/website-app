import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieModule, CookieService } from 'ngx-cookie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PrismicModule } from './prismic';
import { CoreModule } from './core';
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
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
