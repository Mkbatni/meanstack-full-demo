import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-price',
  templateUrl: './update-product-price.component.html',
  styleUrls: ['./update-product-price.component.css']
})
export class UpdateProductPriceComponent implements OnInit {

  constructor(public productServ:ProductService) { }

  ngOnInit(): void {
  }
  updateMsg:String = "";
  updatePrice (productRef?:any)
  {
    console.log(productRef)
    this.productServ.updateProductPrice(productRef).subscribe((result:String) => {this.updateMsg = result})
  }
}
