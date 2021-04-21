
/* one router used for multiple operations(CRUD)   
export the Product to app.js so app.js can use it for direction to here after vertifing the
    path /product  than it will guild the flow here
 
1. import express
2.check what is the subpath and perform nessasasry operation by importing it from controller 
    product operation will return a json  
*/

let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../controller/product.controller.js");


//The actual map is product/ subpath if subpath match than do this
//mapping sub path with http methods. 
// get the data through req.body 
router.get("/allProductDetails",ProductController.getProductDetails);
router.get("/retrieveProductById/:pid",ProductController.getProductById)
router.delete("/deleteProductById/:pid",ProductController.deleteProductById);
///deleteProductById/102

//Got the data through req.params  | we use a json for both 
router.post("/storeProductDetails",ProductController.storeProductDetails);
router.put("/updateProductPrice",ProductController.updateProductPrice);


module.exports=router;