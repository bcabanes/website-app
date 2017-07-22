import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../ngrx/index';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public postList$: Observable<any>;

  constructor(private router: Router,
              private store: Store<IAppState>) { }

  ngOnInit() {
    this.postList$ = this.store.select(s => s.blogPostList)
  }

  public navigateTo(uid: string) {
    this.router.navigateByUrl(`blog/${uid}`);
  }

}
