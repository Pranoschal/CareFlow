import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyAdminComponent } from './economy-admin.component';

describe('EconomyAdminComponent', () => {
  let component: EconomyAdminComponent;
  let fixture: ComponentFixture<EconomyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconomyAdminComponent]
    });
    fixture = TestBed.createComponent(EconomyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
