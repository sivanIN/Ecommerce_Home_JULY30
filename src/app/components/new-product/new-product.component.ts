import { Component, OnInit } from '@angular/core';
import { EcommerceAppService } from 'src/app/services/ecommerce-app.service';
import { ProductCategory } from 'src/app/product-category';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  
  productcat:ProductCategory[]

  products:Product = new Product(0," "," "," ",0," ",0,0,new Date(),new Date(),0)

  constructor(private ecomservice:EcommerceAppService,private route:Router) { }

  ngOnInit(): void {
    this.getAllProductsCategory()
    }

  getAllProductsCategory(){

    this.ecomservice.getAllProductsCategory().subscribe(data => {console.log(data)
    this.productcat = data
    })

  }

  newProduct(){

    this.ecomservice.saveProduct(this.products).subscribe(()=>{
      this.route.navigateByUrl("/product")
    })
    console.log(this.products)
  }

}
