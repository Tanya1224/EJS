const express = require('express');
const path = require("path");
const ejs=require('ejs');
const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(path.resolve(),'public')));


let todos=[
    {
        id:1,
        content:"be happy"
    },
    {
        id:2,
        content:"be sad"

    }
]
app.get("/:param",(req,res)=>{
    res.render('index',{
        data:todos,param:req.params.param,msg:''
    })
})


app.post("/:param",(req,res)=>{
    console.log(req.body);
    todos.push({
        id:todos.length,
    content:req.body.todos});
    res.render('index',{
        data:todos,
        params:req.params.param,
        msg:"data added successfully"
    })
})

app.listen(8000,(err)=>console.log("started",err));