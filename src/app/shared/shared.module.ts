import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
// app
import { MaterialModule } from './material.module';

const MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  RouterModule,

  FlexLayoutModule,
  MaterialModule
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
