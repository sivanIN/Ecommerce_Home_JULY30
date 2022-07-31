export class Product {

    constructor(
      public id : number,
      public sku : String,
      public name : String,
      public description : String,
      public unitprice : number,
      public imageurl : String,
      public active : number,
      public unitsinstock : number,
      public datecreated : Date ,
      public lastupdated : Date,
      public categoryid : number,
    ){}
}
