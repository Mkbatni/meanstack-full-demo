import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model.product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) {    }


/* 
By defualt return type of all observable 
if the return type is string than we have to perform {responseType:'text'} 

--------------
if return type is json from express module
http.get ("url")
http.post ("url", jsonData)
http.delete ("url")
http.put ("url", jsonData)

if return type is non json format
http.get ("url" , {responseType:'text'})
http.post ("url", jsonData , {responseType:'text'})
http.delete ("url" , {responseType:'text'})
http.put ("url", jsonData , {responseType:'text'})
*/


  ipAddress:string = "http://18-191-23-67:9090";

    //post method 1st parameter url and 2nd parameter json data
    storeProductDetailInfo(productRef:any)
    {
     /*  this.http.post("http://localhost:9090/product/storeProductDetails", productRef  ).
      subscribe(result => console.log(result), error => console.log(error)); */
      //return this.http.post("http://localhost:9090/product/storeProductDetails", productRef ,{responseType:'text'} )
      return this.http.post( this.ipAddress+ "/product/storeProductDetails", productRef ,{responseType:'text'} )

    }

    retrieveAllProductDetails() : Observable<Product[]> {
    return   this.http.get<Product[]>( this.ipAddress+ "/product/allProductDetails");

    }
    retrieveProductById(id:any) : Observable<Product>
    {
      return this.http.get<Product>(  this.ipAddress+ "/product/retrieveProductById/" + id);
    }
    deleteProductById(id:any) 
    {
      return this.http.delete(this.ipAddress+"/product/deleteProductById/" + id,  {responseType:'text'} );
    }
    updateProductPrice(id:any) : any
    {
      return this.http.put(this.ipAddress+"/product/updateProductPrice" , id, {responseType:'text'});
    }
}
