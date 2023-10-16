import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPatientComponent } from './search-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('SearchPatientComponent', () => {
  let component: SearchPatientComponent;
  let fixture: ComponentFixture<SearchPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule],
      declarations: [SearchPatientComponent]
    });
    fixture = TestBed.createComponent(SearchPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
