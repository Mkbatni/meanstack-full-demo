/*        Rest API call to consume and produce the data
BackEnd:  
    View -> app.js or server.js (node.js) -> router -> controller -> model -< database

    FrontEnd: View(Angular)    
    Template -> components -> User-defined service -> HttpClient(get/post/put/del)

1. we import express | mongoose | bodyparser 
2. create a connection to db
3. if the path is the product than it will be redirected to product
   var Product = require("./router/product.router.js");  from there it will pass the flow
   to the sub links


   >npm install cors
let cors = require("cors");
app.use(cors()) //to enable communication policy between port 4040 and 4200


*/

//Load all required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");


//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  for Post 
app.use(bodyParser.json());   

                      // json data. 
app.use(cors()) //to enable communication policy between port 4040 and 4200




//upable to load the static files(anngular file new s )
app.use(express.static(process.cwd()));
//load the fronten  dfhsdjsdd file ie angular program
//Database URL Details 
let url = "mongodb://localhost:27017/meanStack";


app.get('/', (req,res) => {
 res.sendFile(__dirname+"/index.html")
});



//Database connection without warning 
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
//ready to connect 
mongoose.connect(url,mongooseDbOption);   

//Connect the data 
mongoose.connection

//link to router module like a import concept. 
var Product = require("./router/product.router.js");

//it is vertifing  path if its product than it will import Product from router
//than send the flow to router 
app.use("/product",Product);
//app.use("/",Product);
//app.use("/order",Order)
//app.use("/customer",Customer)

//URL 
//Middleware 

// http://localhost:9090/product/allProductDetails   Get App Product Details 
// http://localhost:9090/product/retrieveProductById/102   Get App Product Details by Id  
// http://localhost:9090/product/storeProductDetails   rest client or post man {"pid":103,"pname":"Computer","price":43000}
// http://localhost:9090/product/deleteProductById/101
// http://localhost:9090/product/updateProductPrice  update price using pid {"pid":103,"price":48000}



app.listen(9090,()=>console.log("Server running on port number 9090"));

