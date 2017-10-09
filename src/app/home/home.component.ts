import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../ngrx/index';
import { PageService } from '../page/page.service';

@Component({
  selector   : 'app-home',
  templateUrl: './home.component.html',
  styleUrls  : [ './home.component.scss' ]
})
export class HomeComponent {

  constructor(private store: Store<IAppState>) {
  }

}
