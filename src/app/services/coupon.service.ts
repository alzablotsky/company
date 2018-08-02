import { Injectable} from '@angular/core';
import { Coupon } from '../components/common/Coupon';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Injectable()
export class CouponService  {

  public url = 'getcoupon';
  public urlType = 'getcouponbytype'; 
  public urlPrice = 'getcouponbyprice';
  public urlEndDate = 'getcouponbyenddate';  
  public urlLoginComp = 'getlogincompany';
  public urlCouponTypes = 'getcoupontypes';  

  // dependency injection for http object
  constructor(private _http : Http, private _datepipe: DatePipe ) {
    
  }


  public getLoginCompanyName()  {
    return this._http.get(this.urlLoginComp)
       .map(response=> response.text());
   }

   public getCouponTypes()  {
    return this._http.get(this.urlCouponTypes)
       .map(response=> response.json());
   }

   

public getAllCoupons()  {
  return this._http.get(this.url)
     .map(response=> response.json());
 }

 public getAllCouponsByPrice(price: number)  {
  return this._http.get(this.urlPrice +'/'+price)
     .map(response=> response.json());
 }
 
 public getAllCouponsByType(type: string)  {
  return this._http.get(this.urlType +'/' + type) 
     .map(response=> response.json());
 } 

 public getAllCouponsByEndDate(endDate: Date)  {
  var stringdate = this.dateToString(endDate);
 return this._http.get(this.urlEndDate +'/'+stringdate)
    .map(response=> response.json());
 } 
 
 public getCoupon (id: number) {
    return this._http.get(this.url +'/'+id)
    .map(response=> response.json());
 }

public postCoupon (coupon: Coupon) {
   return this._http.post(this.url, coupon)
 }
 
 public putCoupon (id: number, coupon: Coupon) {
   return this._http.put(this.url +'/'+id, coupon);
 }
 
 public deleteCoupon (id: number) {
   return this._http.delete(this.url +'/'+id);
 }



 public dateToString(date: Date){
 return this._datepipe.transform(date, 'yyyy-MM-dd');
  
 }

public getDecodedImage(value) {
  if(typeof value=== "undefined") return "";
  else return 'data:image/jpeg;base64,' + value;
  }
 
}


