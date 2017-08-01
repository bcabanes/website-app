import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './components/event-list.component';
import { EventPostDetailComponent } from './components/event-detail.component';

import { EventPostListGuardService } from './event-post-list-guard.service';
import { EventPostDetailGuardService } from './event-post-detail-guard.service';

const routes: Routes = [
  { path: '', component: EventListComponent, canActivate: [ EventPostListGuardService ] },
  { path: 'page/:pageNumber', component: EventListComponent, canActivate: [ EventPostListGuardService ] },
  { path: ':uid', component: EventPostDetailComponent, canActivate: [ EventPostDetailGuardService ] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class EventRoutingModule {}
