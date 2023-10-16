import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BodyComponent } from '../body/body.component';
import { CrousalComponent } from '../body/crousal/crousal.component';
import { ServiceCardComponent } from '../body/service-card/service-card.component';
import { BannerComponent } from '../body/banner/banner.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,BodyComponent,CrousalComponent,ServiceCardComponent,BannerComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
