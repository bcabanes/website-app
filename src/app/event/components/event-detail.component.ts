import { Component, Input } from '@angular/core';
// app
import { EventModel } from '../event.model';

@Component({
  selector   : 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls  : [ './event-detail.component.scss' ]
})
export class EventDetailComponent {
  @Input() event: EventModel;
}
