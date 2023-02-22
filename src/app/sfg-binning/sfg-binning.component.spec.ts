import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfgBinningComponent } from './sfg-binning.component';

describe('SfgBinningComponent', () => {
  let component: SfgBinningComponent;
  let fixture: ComponentFixture<SfgBinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfgBinningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfgBinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
