import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundMusicPlayerComponent } from './background-music-player.component';

describe('BackgroundMusicPlayerComponent', () => {
  let component: BackgroundMusicPlayerComponent;
  let fixture: ComponentFixture<BackgroundMusicPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundMusicPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
