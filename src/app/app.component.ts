import { Component, OnDestroy } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
})
export class AppComponent implements OnDestroy {
  title = 'app';
  watcher: Subscription;
  sideNavMode = 'side';
  sideNavOpened = true;

  constructor(private media: ObservableMedia) {
    if (this.media.isActive('xs') && this.media.isActive('sm')) {
      this.sideNavOpened = false;
    }
    this.watcher = media.subscribe((change: MediaChange) => {
      switch (true) {
        case change.mqAlias === 'xs':
        case change.mqAlias === 'sm':
          this.sideNavMode = 'over';
          this.sideNavOpened = false;
          break;
        default:
          this.sideNavMode = 'side';
          this.sideNavOpened = true;
          break;
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
