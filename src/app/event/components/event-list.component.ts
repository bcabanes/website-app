import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../ngrx/index';
import { getCurrentEventList } from '../ngrx/event-post.selector';
import { IEventPostPaginationData } from '../event-pagination.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public eventList$: Observable<IEventPostPaginationData>;

  constructor(private router: Router,
              private store: Store<IAppState>) { }

  ngOnInit() {
    this.eventList$ = this.store.select(getCurrentEventList);
  }

  public navigateTo(uid: string) {
    this.router.navigateByUrl(`blog/${uid}`);
  }

}
