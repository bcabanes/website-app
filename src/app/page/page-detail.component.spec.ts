import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
// app
import { PageDetailComponent } from './page-detail.component';
import { MdToHtmlPipe } from 'app/shared/md-to-html.pipe';
import { By } from '@angular/platform-browser';

describe('PageDetailComponent', () => {
  let component: PageDetailComponent;
  let fixture: ComponentFixture<PageDetailComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [ RouterTestingModule ],
      declarations: [
        PageDetailComponent,
        MdToHtmlPipe
      ],
      schemas     : [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PageDetailComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        component.page = {
          content: 'some content',
          slug: 'some-title',
          title: 'Some title',
        };
      });
  }));

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should handle page passed as input', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(de.query(By.css('h1')).nativeElement.innerText).toEqual(component.page.title);
    });
  }));
});
