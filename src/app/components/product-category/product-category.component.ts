import { Component, OnInit } from '@angular/core';
import { EcommerceAppService } from 'src/app/services/ecommerce-app.service';
import { ProductCategory } from 'src/app/product-category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productcat:ProductCategory[]

  constructor(private ecomservice:EcommerceAppService) { }

  ngOnInit(): void {
    this.getAllProductsCategory()
  }
  getAllProductsCategory(){

    this.ecomservice.getAllProductsCategory().subscribe(data => {console.log(data)
    this.productcat = data
    })

  }
}
