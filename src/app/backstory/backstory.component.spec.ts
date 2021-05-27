import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BackstoryComponent } from './backstory.component';

describe('BackstoryComponent', () => {
  let component: BackstoryComponent;
  let fixture: ComponentFixture<BackstoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
