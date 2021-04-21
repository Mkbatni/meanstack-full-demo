import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product-by-id',
  templateUrl: './delete-product-by-id.component.html',
  styleUrls: ['./delete-product-by-id.component.css']
})
export class DeleteProductByIdComponent implements OnInit {
delMsg:String = '';
  constructor(public productServ:ProductService) { }

  ngOnInit(): void {
  }
  deleteById(id:any)
  {
    this.productServ.deleteProductById(id).subscribe((result:String) => this.delMsg = result)
  }
}
