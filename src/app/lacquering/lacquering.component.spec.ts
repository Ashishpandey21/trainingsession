import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacqueringComponent } from './lacquering.component';

describe('LacqueringComponent', () => {
  let component: LacqueringComponent;
  let fixture: ComponentFixture<LacqueringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacqueringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LacqueringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
