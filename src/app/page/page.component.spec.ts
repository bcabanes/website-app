import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
// app
import { PageComponent} from './page.component';
import { ContentfulService } from 'app/contentful/contentful.service';

const response = [{'title': 'team', 'slug': 'team', 'content': 'Nous existons grâce à ces personnes qui donnent de leur temps  et beaucoup d’énergie pour faire grandir cette belle communauté de designers et développeurs.\n\n![img1](//images.contentful.com/1bjpy3iiywbc/34FAHzXrbqaaWSEKYE8uWy/d5b0d93232736b6f9bd5c2fbbe5c059f/2.jpg)'}];

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;
  let contentfulService: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComponent ],
      providers: [
        { provide: ContentfulService,
          useValue: jasmine.createSpyObj('ContentfulService', [ 'getContentList' ])
        }
      ],
      imports: [ RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    contentfulService = TestBed.get(ContentfulService);
    contentfulService.getContentList.and.returnValue(of(response));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
