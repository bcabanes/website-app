import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { EVENT_COMPONENTS } from './components/index';
import { EventRoutingModule } from './event-routing.module';
import { EventPostService } from './event-post.service';
import { EventPostListGuardService } from './event-post-list-guard.service';
import { EventPostDetailGuardService } from './event-post-detail-guard.service';

@NgModule({
  imports     : [
    SharedModule,
    EventRoutingModule
  ],
  declarations: [ ...EVENT_COMPONENTS ],
  providers: [
    EventPostDetailGuardService,
    EventPostListGuardService,
    EventPostService
  ]
})
export class EventModule {
}
