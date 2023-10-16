import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeComponent } from './discharge.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DischargeComponent', () => {
  let component: DischargeComponent;
  let fixture: ComponentFixture<DischargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DischargeComponent]
    });
    fixture = TestBed.createComponent(DischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
