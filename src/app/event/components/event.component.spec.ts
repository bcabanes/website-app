import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
// app
import { EventComponent } from './event.component';
import { ContentfulService } from '../../contentful/contentful.service';

const response = [{"title":"Lorem ipsum 2","description":"Venez donc rencontrer des designers et developers passionné-es comme vous et discuter de Sketch App autour d'un verre et d'une part de pizza!\n\nHôtes : \n- Fabien Laborie, Product Designer indépendant \n- Matt Preston, Product Designer @Ubisoft","tags":"meetup, workshop","date":"2017-11-28T18:00","location":{"lon":-73.59550619999999,"lat":45.5241622},"companyName":"Ulule","companyAddress":"5248 boulevard Saint-Laurent Montréal, QC H2T 1S1","eventbriteLink":"https://www.eventbrite.ca/","banner":{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"1bjpy3iiywbc"}},"id":"34FAHzXrbqaaWSEKYE8uWy","type":"Asset","createdAt":"2017-11-19T20:19:14.250Z","updatedAt":"2017-11-19T20:19:14.250Z","revision":1,"locale":"en-US"},"fields":{"title":"img1","description":"img1","file":{"url":"//images.contentful.com/1bjpy3iiywbc/34FAHzXrbqaaWSEKYE8uWy/d5b0d93232736b6f9bd5c2fbbe5c059f/2.jpg","details":{"size":78587,"image":{"width":720,"height":480}},"fileName":"2.jpg","contentType":"image/jpeg"}}},"slug":"lorem-ipsum-2"},{"title":"Lorem ipsum","description":"Venez donc rencontrer des designers et developers passionné-es comme vous et discuter de Sketch App autour d'un verre et d'une part de pizza!\n\nHôtes : \n- Fabien Laborie, Product Designer indépendant \n- Matt Preston, Product Designer @Ubisoft","tags":"meetup, workshop","date":"2017-11-28T18:00","location":{"lon":-73.59550619999999,"lat":45.5241622},"companyName":"Ulule","companyAddress":"5248 boulevard Saint-Laurent Montréal, QC H2T 1S1","eventbriteLink":"https://www.eventbrite.ca/","banner":{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"1bjpy3iiywbc"}},"id":"34FAHzXrbqaaWSEKYE8uWy","type":"Asset","createdAt":"2017-11-19T20:19:14.250Z","updatedAt":"2017-11-19T20:19:14.250Z","revision":1,"locale":"en-US"},"fields":{"title":"img1","description":"img1","file":{"url":"//images.contentful.com/1bjpy3iiywbc/34FAHzXrbqaaWSEKYE8uWy/d5b0d93232736b6f9bd5c2fbbe5c059f/2.jpg","details":{"size":78587,"image":{"width":720,"height":480}},"fileName":"2.jpg","contentType":"image/jpeg"}}},"slug":"lorem-ipsum"},{"title":"We <3 Sketch: The Kick-off Meeting","description":"Venez donc rencontrer des designers et developers passionné-es comme vous et discuter de Sketch App autour d'un verre et d'une part de pizza!\n\nHôtes : \n- Fabien Laborie, Product Designer indépendant \n- Matt Preston, Product Designer @Ubisoft","tags":"meetup, workshop","date":"2017-11-28T18:00","location":{"lon":-73.59550619999999,"lat":45.5241622},"companyName":"Ulule","companyAddress":"5248 boulevard Saint-Laurent Montréal, QC H2T 1S1","eventbriteLink":"https://www.eventbrite.ca/","banner":{"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"1bjpy3iiywbc"}},"id":"34FAHzXrbqaaWSEKYE8uWy","type":"Asset","createdAt":"2017-11-19T20:19:14.250Z","updatedAt":"2017-11-19T20:19:14.250Z","revision":1,"locale":"en-US"},"fields":{"title":"img1","description":"img1","file":{"url":"//images.contentful.com/1bjpy3iiywbc/34FAHzXrbqaaWSEKYE8uWy/d5b0d93232736b6f9bd5c2fbbe5c059f/2.jpg","details":{"size":78587,"image":{"width":720,"height":480}},"fileName":"2.jpg","contentType":"image/jpeg"}}},"slug":"we-less-than-3-sketch-the-kick-off-meeting"}];

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let contentfulService: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventComponent ],
      providers: [
        { provide: ContentfulService,
          useValue: jasmine.createSpyObj('ContentfulService', [ 'getContentList' ])
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    contentfulService = TestBed.get(ContentfulService);
    contentfulService.getContentList.and.returnValue(of(response));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
