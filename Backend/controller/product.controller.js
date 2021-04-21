/* use the schema from product model and perform crud operation 
the return type of each operation is json and we export that json to router */


/* 
params for query string, data for request body. Simple.
best practice would be that you should use params when doing a get, 
    but use body for post, put and patch.

   url/post, data = data  --> get it from the body
    url/get , data = data --> get it from params
    5 operations
    1 update | 1 insert | 1 delete  | 2 retrieve 
getProductDetails, getProductById,storeProductDetails ,deleteProductById , updateProductPrice
*/
/* 
    //To return only 1 object 
    res.json(data[0])
    //to return array
    // res.json(data);
    res.json({"msg":"record Stored succesfulle"})
*/
let ProductModel = require("../model/product.model.js");

//Retrieve all product details 
let getProductDetails =(req,res)=> {

    ProductModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
        else{
            res.write("eror" , err)
        }
    })

}

//so app.js send the flow here where we can get the id from req.param and look for it in db
let getProductById = (req, res) => {

//passing id path throught param
    let pid = req.params.pid;  
    //Was created in modole 
    ProductModel.find({_id:pid}, (err,data) =>{
        if(!err)
        {
            //To return only 1 object 
                res.json(data[0])
            //to return array
           // res.json(data);
        }
    })

}

//Using http post method to retrieve data
    //Data will come from post method when we use post method we use body
let storeProductDetails = (req,res) => {

    let product = new ProductModel({
        //Variables must match the schema in module 
        _id: req.body.pid,
        pname: req.body.pname,
        price: req.body.price
    });
    product.save((err,result)=>{
        if(!err){
  
           //     res.json({"msg":"record Stored succesfulle"})
           
            res.send("Record stored successfully");
        }
        else
        {
            res.send("Record did not stored " + err);

        }
    });

}

//on delete we use param
let deleteProductById = (req,res) => {
let pid = req.params.pid;
ProductModel.deleteOne({_id : pid}, (err, result)=> {
    if(!err)
    {
        if(result.deletedCount > 0 )
        {
            res.send("Record " + pid + "deleted successfully");
        }
          
        else
          {  res.send("record was not present" + pid ) ; 
        }
    }
    else
    {
        res.send("Error genereated: " + err);

    }
});


}

//Updating product  rtakes 2 parameter id and price 
let updateProductPrice= (req,res)=> {
    let pid = req.body.pid;
    let updatedPrice = req.body.price;
    ProductModel.updateMany({_id:pid},{$set:{price:updatedPrice}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Record updated succesfully")
            }else {
                    res.send("Record is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}




//If we export multiple operations we use curly braceled
module.exports={getProductDetails, getProductById,storeProductDetails ,deleteProductById , updateProductPrice}