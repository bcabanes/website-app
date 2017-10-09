import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IBlogPost } from '../blog-post.model';
import { IAppState } from '../../ngrx/index';
import { getBlogPostList } from '../ngrx/blog-post.selector';

@Component({
  selector   : 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls  : [ './post-detail.component.scss' ]
})
export class PostDetailComponent implements OnInit {
  public post$: Observable<IBlogPost>;

  constructor(private route: ActivatedRoute,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.post$ = this.store.select(getBlogPostList)
      .map(itemList => itemList.get(this.route.snapshot.params[ 'uid' ]));
  }

}
