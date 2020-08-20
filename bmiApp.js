const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

app.listen("3000", function(){
    console.log("Welcome to our server at port 3000, we are listening!")
});

app.get("/bmiCalculater",function(req,res){
res.sendFile(__dirname+"/bmiCalculater.html");
});

app.post("/bmiCalculater", function(req,res){
    const weight  = req.body.weight;
    const height = req.body.height;
    const bmiResult = (weight / Math.pow(height,2));
    res.send("Your BMI Value is  "+bmiResult);
        
    
});
   