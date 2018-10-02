import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSlideshowComponent } from './photo-slideshow.component';

describe('PhotoSlideshowComponent', () => {
  let component: PhotoSlideshowComponent;
  let fixture: ComponentFixture<PhotoSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
