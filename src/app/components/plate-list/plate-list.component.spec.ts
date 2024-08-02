import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateListComponent } from './plate-list.component';

describe('PlateListComponent', () => {
  let component: PlateListComponent;
  let fixture: ComponentFixture<PlateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlateListComponent]
    });
    fixture = TestBed.createComponent(PlateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
