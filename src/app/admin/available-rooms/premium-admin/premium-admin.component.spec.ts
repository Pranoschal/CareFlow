import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAdminComponent } from './premium-admin.component';

describe('PremiumAdminComponent', () => {
  let component: PremiumAdminComponent;
  let fixture: ComponentFixture<PremiumAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumAdminComponent]
    });
    fixture = TestBed.createComponent(PremiumAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
