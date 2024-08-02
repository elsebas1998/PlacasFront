import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestriccionListComponent } from './restriccion-list.component';

describe('RestriccionListComponent', () => {
  let component: RestriccionListComponent;
  let fixture: ComponentFixture<RestriccionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestriccionListComponent]
    });
    fixture = TestBed.createComponent(RestriccionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
