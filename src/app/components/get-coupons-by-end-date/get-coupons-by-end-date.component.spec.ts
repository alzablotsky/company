import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCouponsByEndDateComponent } from './get-coupons-by-end-date.component';

describe('GetCouponsByEndDateComponent', () => {
  let component: GetCouponsByEndDateComponent;
  let fixture: ComponentFixture<GetCouponsByEndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCouponsByEndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCouponsByEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
