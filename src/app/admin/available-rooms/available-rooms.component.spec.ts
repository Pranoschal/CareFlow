import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableRoomsComponent } from './available-rooms.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AvailableRoomsComponent', () => {
  let component: AvailableRoomsComponent;
  let fixture: ComponentFixture<AvailableRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [AvailableRoomsComponent]
    });
    fixture = TestBed.createComponent(AvailableRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
