import { NgModule } from '@angular/core';
// app
import { SharedModule } from '../shared';
import { EVENT_COMPONENTS } from './components';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  imports     : [
    SharedModule,
    EventRoutingModule
  ],
  declarations: [ ...EVENT_COMPONENTS ],
})
export class EventModule {
}
