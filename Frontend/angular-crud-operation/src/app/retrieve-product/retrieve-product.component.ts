import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve-product',
  templateUrl: './retrieve-product.component.html',
  styleUrls: ['./retrieve-product.component.css']
})
export class RetrieveProductComponent implements OnInit {


  products?:Array<Product>;
  constructor(public productServ:ProductService) { }

  ngOnInit(): void {
    this.productServ.retrieveAllProductDetails().subscribe(result => this.products=result)
  }



}
