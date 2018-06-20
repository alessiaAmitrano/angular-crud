import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesLibraryLandingComponent } from './games-library-landing.component';

describe('GamesLibraryLandingComponent', () => {
  let component: GamesLibraryLandingComponent;
  let fixture: ComponentFixture<GamesLibraryLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesLibraryLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesLibraryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
