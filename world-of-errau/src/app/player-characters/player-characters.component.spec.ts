import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerCharactersComponent } from './player-characters.component';

describe('PlayerCharactersComponent', () => {
  let component: PlayerCharactersComponent;
  let fixture: ComponentFixture<PlayerCharactersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
