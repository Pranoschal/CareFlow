import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeAdminComponent } from './deluxe-admin.component';

describe('DeluxeAdminComponent', () => {
  let component: DeluxeAdminComponent;
  let fixture: ComponentFixture<DeluxeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeluxeAdminComponent]
    });
    fixture = TestBed.createComponent(DeluxeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
