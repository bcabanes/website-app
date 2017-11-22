import { Component, Input } from '@angular/core';
// app
import { EventModel } from '../event.model';


@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent {
  @Input() event: EventModel;
}
