import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// app
import { StyleGuideComponent } from './style-guide.component';

const routes: Routes = [
  { path: '', component: StyleGuideComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class StyleGuideRoutingModule {
}
