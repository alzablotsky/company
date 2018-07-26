import { Component, OnInit } from '@angular/core';

import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-coupons-by-type',
  templateUrl: './get-coupons-by-type.component.html',
  styleUrls: ['./get-coupons-by-type.component.css']
})
export class GetCouponsByTypeComponent implements OnInit {

  public  _coupons: Coupon[];

  public  _selectedCoupons: Coupon[];
  
  public type: string;
   
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

       public getAllCouponsByType() {
       var self = this;
       this._service.getAllCouponsByType(this.type)
         .subscribe(
             coupons =>
             {
             for(let c of coupons) {
             console.log(c);
                 }
                 self._selectedCoupons = coupons;
               },
             error =>  console.log(error) 
            );
        }
  
}
