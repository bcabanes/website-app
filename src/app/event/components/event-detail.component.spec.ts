import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
// app
import { EventDetailComponent } from './event-detail.component';
import { MdToHtmlPipe } from 'app/shared/md-to-html.pipe';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [ RouterTestingModule ],
      declarations: [
        EventDetailComponent,
        MdToHtmlPipe
      ],
      schemas     : [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    component.event = {
      banner: 'banner url',
      companyAddress: 'some address',
      companyName: 'some company name',
      date: new Date().toISOString(),
      description: 'some description',
      eventbriteLink: 'some link',
      location: {
        lon: 15,
        lat: 20
      },
      slug: 'some-title',
      tags: [ 'tag1', 'tag2' ],
      title: 'Some title',
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
