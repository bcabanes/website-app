import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
// app
import { PageDetailComponent } from './page-detail.component';
import { MdToHtmlPipe } from 'app/shared/md-to-html.pipe';

describe('PageDetailComponent', () => {
  let component: PageDetailComponent;
  let fixture: ComponentFixture<PageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [ RouterTestingModule ],
      declarations: [
        PageDetailComponent,
        MdToHtmlPipe
      ],
      schemas     : [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailComponent);
    component = fixture.componentInstance;
    component.page = {
      content: 'some content',
      slug: 'some-title',
      title: 'Some title',
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
