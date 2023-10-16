import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientContactsComponent } from './patient-contacts.component';

describe('PatientContactsComponent', () => {
  let component: PatientContactsComponent;
  let fixture: ComponentFixture<PatientContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientContactsComponent]
    });
    fixture = TestBed.createComponent(PatientContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
