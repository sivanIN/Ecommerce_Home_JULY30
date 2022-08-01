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
import {FormsModule} from  '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component'



const route:Routes=[
  {path:"",component:WelcomeComponent},
  {path: "product",component:ProductComponent},
  {path:"newproduct",component:NewProductComponent},
  {path:"newcategory",component:NewProductCategoryComponent},
  {path:"modal/:id",component:ModalComponent},
  {path:"cart/:id",component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCategoryComponent,
    NewProductComponent,
    NewProductCategoryComponent,
    WelcomeComponent,
    ModalComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
