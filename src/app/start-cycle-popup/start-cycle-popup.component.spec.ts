import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCyclePopupComponent } from './start-cycle-popup.component';

describe('StartCyclePopupComponent', () => {
  let component: StartCyclePopupComponent;
  let fixture: ComponentFixture<StartCyclePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartCyclePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartCyclePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
