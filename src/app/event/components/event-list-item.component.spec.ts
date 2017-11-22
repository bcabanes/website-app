import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// app
import { EventListItemComponent } from './event-list-item.component';


describe('EventListItemComponent', () => {
  let component: EventListItemComponent;
  let fixture: ComponentFixture<EventListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ EventListItemComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListItemComponent);
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
