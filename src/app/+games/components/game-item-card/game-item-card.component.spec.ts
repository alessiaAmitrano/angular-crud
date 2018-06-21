import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemCardComponent } from './game-item-card.component';

describe('GameItemCardComponent', () => {
  let component: GameItemCardComponent;
  let fixture: ComponentFixture<GameItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
