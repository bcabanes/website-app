import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IEventPost } from '../event.model';
import { IAppState } from '../../ngrx/index';
import { getEventPostList } from '../ngrx/event-post.selector';

@Component({
  selector   : 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls  : [ './event-detail.component.css' ]
})
export class EventPostDetailComponent implements OnInit {
  public post$: Observable<IEventPost>;

  constructor(private route: ActivatedRoute,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.post$ = this.store.select(getEventPostList)
      .map(itemList => itemList.get(this.route.snapshot.params[ 'uid' ]));
  }

}
