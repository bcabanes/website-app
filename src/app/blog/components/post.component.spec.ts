import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = {
      image: { value: { main: { url: '/url' } } },
      title: { value: [ { text: 'some text' } ] },
      content: { value: [ { text: 'some text' } ] }
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
