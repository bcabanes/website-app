import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

const MODULES: any[] = [
  CommonModule,
  HttpModule
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
