import { Component, OnInit } from '@angular/core';
import { EcommerceAppService } from 'src/app/services/ecommerce-app.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] 

  constructor(private ecomservice:EcommerceAppService) { }


  ngOnInit(): void {
   
    this.getAllProduct()

  }

  getAllProduct(){
    this.ecomservice.getAllProducts().subscribe(data => {console.log(data)
    this.products = data
    })
  }

}
