import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
// app
import { ContentfulService } from 'app/contentful/contentful.service';
import { EventModel } from '../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  currentEvent: EventModel;
  pastEventList: EventModel[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.subscription = this.contentfulService.getContentList('event')
      .subscribe(data => {
        const eventList = data.map(item => ({
          ...item,
          banner: item.banner.fields.file.url,
          tags: item.tags ? item.tags.trim().split(',') : []
        } as EventModel));
        this.currentEvent = eventList[0];
        this.pastEventList = eventList.slice(1);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
