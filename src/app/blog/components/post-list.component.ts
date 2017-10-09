import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../ngrx/index';
import { getCurrentBlogPostList } from '../ngrx/blog-post.selector';
import { IBlogPostPaginationData } from '../blog-post-pagination.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public postList$: Observable<IBlogPostPaginationData>;

  constructor(private router: Router,
              private store: Store<IAppState>) { }

  ngOnInit() {
    this.postList$ = this.store.select(getCurrentBlogPostList);
  }

  public navigateTo(uid: string) {
    this.router.navigateByUrl(`blog/${uid}`);
  }

}
