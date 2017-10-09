import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  RouterModule,

  FlexLayoutModule
];

@NgModule({
  imports     : [
    ...MODULES
  ],
  declarations: [],
  exports     : [
    ...MODULES
  ]
})
export class SharedModule {
}
