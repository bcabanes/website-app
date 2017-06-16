import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrismicService } from '../prismic/prismic.service';
import { SingleQueryResult } from '../prismic/query-result.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public queryResult: Observable<SingleQueryResult>;

  constructor(private prismicService: PrismicService) { }

  ngOnInit() {
    this.queryResult = this.prismicService.getSingleType('homepage');
  }
}
