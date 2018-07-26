import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {

public  _coupons: Coupon[];

public coupon :  Coupon= new Coupon(); 

public id: number;

  constructor(private _service: CouponService) {}

   ngOnInit() {
     this.getAllCoupons();
     this.coupon.image="";
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


     public getCoupon() {
      var self = this;
      this._service.getCoupon(this.id)
         .subscribe(
             coupon => {
               console.log(coupon);
               self.coupon=coupon;
              }, 
             error =>  console.log(error) 
            );
        }
}
