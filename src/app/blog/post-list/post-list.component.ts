import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrismicService } from '../../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { PaginatedQueryResult } from '../../prismic/query-result.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public queryResult: Observable<PaginatedQueryResult>;

  constructor(private prismicService: PrismicService, private router: Router) { }

  ngOnInit() {
    this.queryResult = this.prismicService.getCustomType('blog-post');
  }

  public navigateTo(uid: string) {
    this.router.navigateByUrl(`blog/${uid}`);
  }

}
