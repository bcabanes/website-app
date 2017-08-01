import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { EventPostDetailComponent } from './event-detail.component';

describe('EventPostDetailComponent', () => {
  let component: EventPostDetailComponent;
  let fixture: ComponentFixture<EventPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [ RouterTestingModule ],
      declarations: [ EventPostDetailComponent ],
      schemas     : [ CUSTOM_ELEMENTS_SCHEMA ],
      providers   : [
        {
          provide : Store,
          useClass: class {
            select = () => Observable.of(new Map());
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
