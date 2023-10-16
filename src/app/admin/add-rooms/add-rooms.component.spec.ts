import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomsComponent } from './add-rooms.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AddRoomsComponent', () => {
  let component: AddRoomsComponent;
  let fixture: ComponentFixture<AddRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule],
      declarations: [AddRoomsComponent]
    });
    fixture = TestBed.createComponent(AddRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
