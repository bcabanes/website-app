import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { IAppState } from './ngrx/index';
import { SettingState } from './setting/ngrx/setting.state';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'app';
  settings: Observable<SettingState.IState>;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.settings = this.store.select(s => s.settings);
  }
}
