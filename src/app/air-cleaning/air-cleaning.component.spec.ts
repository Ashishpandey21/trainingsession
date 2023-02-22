import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCleaningComponent } from './air-cleaning.component';

describe('AirCleaningComponent', () => {
  let component: AirCleaningComponent;
  let fixture: ComponentFixture<AirCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirCleaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
