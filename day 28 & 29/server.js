const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./Product');

app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/day28')
.then(()=>{
    console.log('connected successfully ');
})
.catch(err=>console.log(err));

require('./Product');

// QUERY 3
app.post('/AddProducts',async (req,res)=>{
    let newProduct = new Product;
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.description = req.body.description;
    newProduct.expirationDate = req.body.expirationDate;
    await newProduct.save();
    res.json("product created !!!")

})
// QUERY 4
app.get('/sortProduct',async(req,res)=>{
  let products = await Product.find().sort({price:1});
  console.log(products);
})
// QUERY 5
app.get('/pagination',async(req,res)=>{
  let limit = 5;
  let product = await Product.find().limit(limit);

  console.log(product);


  
})
// QUERY 6
app.get('/CustomPagination',async (req,res)=>{
  let pageNumber = 3;
  let pageSize = 2;

  let products = await Product.find().skip((pageNumber - 1 )* pageSize).limit(pageSize)
  console.log(products);
})
// QUERY 7
app.get('/CountProduct',async(req,res)=>{
  let products = await Product.aggregate([{$match:{inStock : false}} , {$count : "number of products not in stock"}]);
  console.log(products);

})
// QUERY 8
app.get('/AvgPrice',async(req,res)=>{
  let products = await Product.aggregate([ {$group:{_id:null,"AveragePrice":{$avg:"$price"}}} , {$project:{_id:0 , AveragePrice:1}}])
  console.log(products);

})
// QUERY 9
app.get('/SortByName',async (req,res)=>{
  let products = await Product.find().sort({name:1});
  res.send(products);
})
// QUERY 11
app.get('/group',async (req,res)=>{
  let products = await Product.aggregate( [{$group:{_id:"$category" , numberOfProduct:{$sum:1}}}])
  console.log(products[1]._id);
})

// QUERY OF DAY 29

// QUERY 1
app.post('/updatePrice/:name',async(req,res)=>{
  let productName = req.params.name;
  let newPrice = req.body.newPrice;
  let product = await Product.findOneAndUpdate({name:productName},{$set:{price:newPrice}});
  product.length !=0 ? res.send(product) : res.json({message:"product not found"});
  
})
// QUERY 3
app.get('/deleteExpDate',async(res,req)=>{
  let dateNow = new Date()
 let deleteCount =  (await Product.deleteMany({expirationDate:{$lte:dateNow}})).deletedCount;
 console.log(deleteCount);
})

// QUERY 4
app.get('/BulkUpdate',async(req,res)=>{
  let upadtedProducts = await Product.updateMany({inStock:true},{$set:{description:"description changed...."}}); 
  console.log(upadtedProducts.modifiedCount)
})

// QUERY 5
app.get('/BulkDelete',async(req,res)=>{
  let deleteProductOutOfStock = await Product.deleteMany({inStock:false});
  console.log(deleteProductOutOfStock.deletedCount);
})


// SERVER
app.listen(9500,()=>{
    console.log('sever is runing in port 9500...');
});