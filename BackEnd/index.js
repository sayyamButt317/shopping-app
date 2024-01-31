const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.use(expess.urlencoded({
extended:true
}));

const productData =[];

app.listen(port, () => {
  console.log(' app listening on port ${port}');
})

//post api method
app.post("/api/add_product",(req,res) => {
    console.log("Result",req.body);

constpdata =[
    "id" = productData.length+1,
    "pname" = req.body.pname,
    "pdescription" = req.body.pdescription,
    "pprice" = req.body.pprice,
];
productData.push(pdata);
console.log("Final",pdata);


res.status(200).send({
  "status_code":200,
  "message":"Product added successfully",
  "product": pdata,
});
})