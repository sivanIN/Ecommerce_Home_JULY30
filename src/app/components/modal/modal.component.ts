import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { EcommerceAppService } from 'src/app/services/ecommerce-app.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  products:Product 
  constructor(private ecomservice:EcommerceAppService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    // this.activatedRoute.paramMap.subscribe(() => {this.getProductByID()})
  }

  // getProductByID(){
  //  const  empid = + this.activatedRoute.snapshot.paramMap.get("id");  
  //   if(empid > 0){
  //     this.ecomservice.getProductById(empid).subscribe(data => {this.products = data
      
  //     console.log(data)
  //     })
  //   }
  // }
  

}
