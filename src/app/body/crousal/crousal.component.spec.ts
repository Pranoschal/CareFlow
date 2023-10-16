import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrousalComponent } from './crousal.component';

describe('CrousalComponent', () => {
  let component: CrousalComponent;
  let fixture: ComponentFixture<CrousalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrousalComponent]
    });
    fixture = TestBed.createComponent(CrousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
