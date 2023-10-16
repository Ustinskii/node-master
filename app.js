const express = require("express");
const app = express();
const port='3000';

app.get('/',(req,res)=>{
res.end("Welcome");
})
app.listen(port,function(){
console.log("Север запушщен порт"+port);
});