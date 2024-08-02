import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationStatusComponent } from './circulation-status.component';

describe('CirculationStatusComponent', () => {
  let component: CirculationStatusComponent;
  let fixture: ComponentFixture<CirculationStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculationStatusComponent]
    });
    fixture = TestBed.createComponent(CirculationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
