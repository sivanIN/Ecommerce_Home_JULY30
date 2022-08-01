import { Component, OnInit, ViewChild } from '@angular/core';
import { EcommerceAppService } from 'src/app/services/ecommerce-app.service';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  

  product:Product
  products : Product[] 

  constructor(private ecomservice:EcommerceAppService,private route:Router) { }


  ngOnInit(): void {
   
    this.getAllProduct()

  }

  getAllProduct(){
    this.ecomservice.getAllProducts().subscribe(data => {console.log(data)
    this.products = data
    })
  }

  // open(id:number){
  //   this.route.navigateByUrl("/modal/" + id)
  // }


  open(id:number){
     
     if(id > 0){
       this.ecomservice.getProductById(id).subscribe(data => {this.product = data
       
       console.log(data)
       })
     }
   }

   addCart(id:number){

    this.route.navigateByUrl("/cart/" + id )
   
   }





}
