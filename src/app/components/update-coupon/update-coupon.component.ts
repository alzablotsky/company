import { Component, OnInit } from '@angular/core';

import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public _coupons: Coupon[];

  public id: number;

  public coupon :  Coupon= new Coupon();
  
  public couponForm: HTMLFormElement;

  constructor( private _service: CouponService ) {}

  ngOnInit() {
      this.coupon.image="";
      this.getAllCoupons();
      this.couponForm = <HTMLFormElement>document.getElementById("couponForm");
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
       

     
  public updateCoupon () {
   var self = this;
  this._service.putCoupon(this.id, this.coupon)
  .subscribe(
               response =>
                {
                 console.log(response);
                 swal({
                  type: 'success',
                  title:'Congratulations!',
                  text:'Coupon ' + self.coupon.title + ' was updated.'
                  });
                 self.reset();
                },
               error =>
                  {
                  console.log(error);  
                   swal({
                    type: 'error',
                    title: 'Error occured!',
                    text: 'Coupon ' + self.coupon.title + ' cannot be updated.',
                    });
                  self.reset();
                }  
                );
   }
  
   public reset () {
   this.coupon.image="";  
   this.couponForm.reset();
  }

}
