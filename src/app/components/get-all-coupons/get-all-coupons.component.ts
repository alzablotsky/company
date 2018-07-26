import { Component, OnInit } from '@angular/core';

import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  _coupons: Coupon[];
  
  constructor( private _service: CouponService) {}
 
   ngOnInit() {
     this.getAllCoupons();
   }
 
   public getAllCoupons() {
     var self = this;
    this._service.getAllCoupons()
      .subscribe(
          coupons =>
          {
          for(let c of coupons) {
            console.log(c);
            }
              self._coupons = coupons;
            },
          error =>  console.log(error) 
         );
     }

}
