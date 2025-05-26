import express from "express";
const app=express();
const port =6969;

app.get('/',(req,res)=>{
    res.json({msg:"Hello World!"});
});


app.listen(port,()=>{
    console.log(`the server is running on port http://localhost:${port}`);
});

//dry principal 
//kiss principle
// dry - don't repeat yourself