import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PrismicService } from '../../prismic/prismic.service';
import { IPrismic } from '../../prismic/query-result.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public queryResult: Observable<IPrismic.SingleQueryResult>;

  constructor(private prismicService: PrismicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.queryResult = this.route.params
      .map((params: Params): string => params['uid'])
      .flatMap((uid: string): Observable<IPrismic.SingleQueryResult> =>
        this.prismicService.getByUID('blog-post', uid))
  }

}
