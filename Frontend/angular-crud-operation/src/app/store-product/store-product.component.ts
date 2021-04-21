import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
})
export class StoreProductComponent implements OnInit {

  constructor(public prodServ:ProductService) { }

  ngOnInit(): void {
  }
  //has been blocked by CORS policy: <-- i get this error <--
  //cross origin Resource sharing
  //since 2 domain angular 4200 and nodeJS9090 is communication
  //Therefore we need to enable the cos policy 
  //we have to install cors module in node js in app.js  app.user()
  /* 
  in node.js cmd  >npm install cors 
  */ 
  storeProduct(productRef:any)
  {
    console.log(productRef);
    this.prodServ.storeProductDetailInfo(productRef).
     subscribe(result => console.log(result), error => console.log(error));;

  
  }

}
