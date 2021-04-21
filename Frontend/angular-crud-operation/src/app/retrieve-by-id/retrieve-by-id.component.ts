import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve-by-id',
  templateUrl: './retrieve-by-id.component.html',
  styleUrls: ['./retrieve-by-id.component.css']
})
export class RetrieveByIdComponent implements OnInit {
  resultMsg:String = ""
  constructor(public productServ:ProductService) { }

  ngOnInit(): void {
  }
  searchDetail(idRef:any)
  {
    
     this.productServ.retrieveProductById(idRef).subscribe(result => {
     // console.log("id is " + idRef + " " + result[0]._id)
       if(result._id == idRef)
       {
        this.resultMsg = "id is " + result._id + " Product Name " + result.pname + " price " + result.price ; 
       // this.resultMsg = "id is " + result[0]._id + " Product Name " + result[0].pname + " price " + result[0].price ; 
       }
       else
       {
        this.resultMsg = "The id was not found.."
       }
     })
  }
}
