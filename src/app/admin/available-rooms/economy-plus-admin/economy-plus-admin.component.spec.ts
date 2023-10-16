import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyPlusAdminComponent } from './economy-plus-admin.component';

describe('EconomyPlusAdminComponent', () => {
  let component: EconomyPlusAdminComponent;
  let fixture: ComponentFixture<EconomyPlusAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconomyPlusAdminComponent]
    });
    fixture = TestBed.createComponent(EconomyPlusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
