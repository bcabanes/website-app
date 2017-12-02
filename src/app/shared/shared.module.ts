import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
// app
import { MaterialModule } from './material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './logo/logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TagComponent } from './tag/tag.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MdToHtmlPipe } from './md-to-html.pipe';

const COMPONENTS: any[] = [
  LogoComponent,
  NavBarComponent,
  MdToHtmlPipe,
  SidebarComponent,
  TagComponent,
  TopBarComponent
];

const MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  RouterModule,

  FlexLayoutModule,
  MaterialModule,

  TranslateModule
];

@NgModule({
  imports     : [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports     : [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule {
}
