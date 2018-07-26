export class Coupon {

    constructor (public id?:number,
                 public title?:string,
                 public startDate?: Date,
                 public endDate?: Date,
                 public amount?: number,
                 public type?: string,
                 public price?: number,
                 public message?: string,
                 public image?: string,
                 ){ }

             

    
}