import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { ContentfulModule } from './contentful/contentful.module';

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

    // AppRoutingModule should be the last because of `**` route wildcard.
    AppRoutingModule
  ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {
}
