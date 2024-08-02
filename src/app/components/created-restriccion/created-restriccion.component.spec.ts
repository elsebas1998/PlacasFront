import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedRestriccionComponent } from './created-restriccion.component';

describe('CreatedRestriccionComponent', () => {
  let component: CreatedRestriccionComponent;
  let fixture: ComponentFixture<CreatedRestriccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedRestriccionComponent]
    });
    fixture = TestBed.createComponent(CreatedRestriccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
