import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { NewProductCategoryComponent } from './components/new-product-category/new-product-category.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const route:Routes=[
  {path:"",component:WelcomeComponent},
  {path: "product",component:ProductComponent},
  {path:"newproduct",component:NewProductComponent},
  {path:"newcategory",component:NewProductCategoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCategoryComponent,
    NewProductComponent,
    NewProductCategoryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
