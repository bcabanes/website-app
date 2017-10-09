import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const MODULES: any[] = [
  CommonModule,
  HttpClientModule,
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
