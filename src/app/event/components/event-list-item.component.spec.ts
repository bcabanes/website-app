import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
// app
import { EventListItemComponent } from './event-list-item.component';


describe('EventListItemComponent', () => {
  let component: EventListItemComponent;
  let fixture: ComponentFixture<EventListItemComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ EventListItemComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(EventListItemComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

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
      });
  }));

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should handle event passed as input', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(de.query(By.css('h1')).nativeElement.innerText).toEqual(component.event.title);
    });
  }));
});
