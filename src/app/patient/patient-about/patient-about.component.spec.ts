import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAboutComponent } from './patient-about.component';

describe('PatientAboutComponent', () => {
  let component: PatientAboutComponent;
  let fixture: ComponentFixture<PatientAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientAboutComponent]
    });
    fixture = TestBed.createComponent(PatientAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
