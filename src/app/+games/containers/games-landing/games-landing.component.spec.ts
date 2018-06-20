import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesLandingComponent } from './games-landing.component';

describe('GamesLandingComponent', () => {
  let component: GamesLandingComponent;
  let fixture: ComponentFixture<GamesLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
