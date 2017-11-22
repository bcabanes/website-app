import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// app
import { EventComponent } from './components/event.component';

const routes: Routes = [
  { path: '', component: EventComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class EventRoutingModule {}
