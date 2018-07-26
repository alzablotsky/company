import { Component, OnInit } from '@angular/core';

import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';


@Component({
  selector: 'app-remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})
export class RemoveCouponComponent implements OnInit {

  public _coupons: Coupon[];
  
    public id: number;
  
    public coupon :  Coupon= new Coupon();
    
    public couponForm: HTMLFormElement;
  
      
    constructor( private _service: CouponService) {}

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
  
  public removeCoupon() {
    var self = this;
    swal({
      title: 'Are you sure?',
      text: 'Do you want to remove coupon ' + this.coupon.title +'?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this._service.deleteCoupon(this.id)
        .subscribe(
                     response =>
                      {
                       console.log(response);
                       swal(
                        'Deleted!',
                        'The coupon was removed.',
                        'success'
                      );
                       self.reset();
                      },
                     error =>
                        {
                        console.log(error);  
                        swal(
                          'Error Occured',
                          'The coupon was not removed.',
                          'error'
                        );
                        self.reset();
                      }  
                      );
      }
      else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
          'Cancelled',
          'The coupon was not removed.',
          'error'
        );
        self.reset(); 
      }
    })
  }
     
     public reset () {
      this.coupon.image=""; 
      this.getAllCoupons();
      this.couponForm.reset();
    }

}
