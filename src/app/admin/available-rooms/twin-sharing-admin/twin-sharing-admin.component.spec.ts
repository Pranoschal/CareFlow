import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinSharingAdminComponent } from './twin-sharing-admin.component';

describe('TwinSharingAdminComponent', () => {
  let component: TwinSharingAdminComponent;
  let fixture: ComponentFixture<TwinSharingAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwinSharingAdminComponent]
    });
    fixture = TestBed.createComponent(TwinSharingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
