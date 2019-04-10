var mysql = require('mysql');
var bodyParser = require("body-parser");
const express = require('express');
const app=express();
const PORT=8080;
app.listen(PORT);
console.log('Listening to '+PORT);

var con = mysql.createConnection({
  host: "localhost",
  user: "yashp",
  password: "123456"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('handle',function(request,response){
    var query1=request.body.name;
    var query2=request.body.pass;
    console.log(query1+"\t"+query2);
});