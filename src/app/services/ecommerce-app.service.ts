import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { Observable,map } from 'rxjs';
import { ProductCategory } from '../product-category';

@Injectable({
  providedIn: 'root'
})
export class EcommerceAppService {
  
  produrl= "http://localhost:8080/api/prod"
  prodcaturl= "http://localhost:8080/api/prodcat"

  constructor(private httpclient:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.httpclient
    .get<getProductResponse>(this.produrl)
    .pipe(map(response => response._embedded.products))
  }


  getAllProductsCategory():Observable<ProductCategory[]>{
    return this.httpclient
    .get<getProductCategoryResponse>(this.prodcaturl)
    .pipe(map(response => response._embedded.productCategories))
  }
}

interface getProductResponse{
  _embedded:{
    products : Product[]
  }
}
interface getProductCategoryResponse{
  _embedded:{
    productCategories : ProductCategory[]
  }
}

