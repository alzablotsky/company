import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { RemoveCouponComponent } from './components/remove-coupon/remove-coupon.component';
import { GetCouponComponent } from './components/get-coupon/get-coupon.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { GetCouponsByTypeComponent } from './components/get-coupons-by-type/get-coupons-by-type.component';
import { GetCouponsByPriceComponent } from './components/get-coupons-by-price/get-coupons-by-price.component';
import { GetCouponsByEndDateComponent } from './components/get-coupons-by-end-date/get-coupons-by-end-date.component';
import { HeaderComponent } from './components/header/header.component';

import {CouponService} from './services/coupon.service';
import { DatePipe } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    UpdateCouponComponent,
    RemoveCouponComponent,
    GetCouponComponent,
    GetAllCouponsComponent,
    GetCouponsByTypeComponent,
    GetCouponsByPriceComponent,
    GetCouponsByEndDateComponent,
    HeaderComponent,
    SafePipe,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: 'createcoupon',
      component: CreateCouponComponent
  },

    {
      path: 'updatecoupon',
      component: UpdateCouponComponent
  },

  {
    path: 'removecoupon',
    component: RemoveCouponComponent
},

{
  path: 'getcoupon',
  component: GetCouponComponent
},

{
  path: 'getallcoupons',
  component: GetAllCouponsComponent
},

{
  path: 'getcouponsbytype',
  component: GetCouponsByTypeComponent
},


{
  path: 'getcouponsbyprice',
  component: GetCouponsByPriceComponent
},


{
  path: 'getcouponsbyenddate',
  component: GetCouponsByEndDateComponent
},

{
  path: 'header',
  component: HeaderComponent
}
])
  ],
  providers: [CouponService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
