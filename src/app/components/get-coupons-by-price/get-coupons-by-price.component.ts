import { Component, OnInit } from '@angular/core';

import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';

@Component({
  selector: 'app-get-coupons-by-price',
  templateUrl: './get-coupons-by-price.component.html',
  styleUrls: ['./get-coupons-by-price.component.css']
})
export class GetCouponsByPriceComponent implements OnInit {

  public  _coupons: Coupon[];

  public  _selectedCoupons: Coupon[];
  
  public price: number;
   
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

       public getAllCouponsByPrice() {
       var self = this;
        this._service.getAllCouponsByPrice(this.price)
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
