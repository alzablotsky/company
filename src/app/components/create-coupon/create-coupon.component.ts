import { Component, OnInit } from '@angular/core';
import { Coupon } from '../common/Coupon';
import {CouponService} from '../../services/coupon.service';
import swal,{ SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  public coupon :  Coupon= new Coupon();
  
  public couponForm: HTMLFormElement;

  public _types: String[];
  
  public url;
   
    constructor(private _service: CouponService ) {}
 
  
    ngOnInit() {
      this.getCouponTypes();
      this.couponForm = <HTMLFormElement>document.getElementById("couponForm");
   }
  
   public getCouponTypes() {
    var self = this;
   this._service.getCouponTypes()
     .subscribe(
         types =>
         {
           self._types = types;
           },
         error =>  console.log(error) 
        );
    }

     
  public createCoupon () {
   var self = this;
  this._service.postCoupon(this.coupon)
  .subscribe(
               response =>
                {
                 console.log(response);
                  swal({
                  type: 'success',
                  title:'Congratulations!',
                  text:'Coupon ' + self.coupon.title + ' was created.'
                  });
                  self.reset();
                },
               error =>
                  {
                  console.log(error);  
                 swal({
                    type: 'error',
                    title: 'Error occured!',
                    text: 'Coupon ' + self.coupon.title + ' cannot be created.',
                    });
                  self.reset();
                }  
                );
   }
  
 public reset () {
     this.coupon.image="";
     this.url="";
     this.couponForm.reset();
  } 


public readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
      this.coupon.image = (<FileReader>event.target).result.split(',')[1];
      //console.log('coupon.image: '+ this.coupon.image);
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}




}
