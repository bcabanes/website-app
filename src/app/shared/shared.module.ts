import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

const MODULES: any[] = [
  CommonModule,
  HttpModule,
  RouterModule
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
