import { Component, OnInit } from '@angular/core';

import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-coupons-by-end-date',
  templateUrl: './get-coupons-by-end-date.component.html',
  styleUrls: ['./get-coupons-by-end-date.component.css']
})
export class GetCouponsByEndDateComponent implements OnInit {


  public  _coupons: Coupon[];

  public  _selectedCoupons: Coupon[];
  
  public endDate: Date;
  
    constructor( private _service: CouponService) { 
    }
   
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

       public getAllCouponsByEndDate() {
        var self = this;
       this._service.getAllCouponsByEndDate(this.endDate)
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
