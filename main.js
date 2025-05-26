import express from "express";
const app=express();
const port =6969;

app.get('/',(req,res)=>{
    res.json({msg:"Hello World!"});
});
//crud functionality of movies

//R-reading data
app.get('/movies',()=>{

})

//C-creating data
app.post('/movies',()=>{

})

//U-update data
app.put('/movies',()=>{

})

//D-delete data
app.delete('/movies/:id',()=>{
    
})

app.listen(port,()=>{
    console.log(`the server is running on port http://localhost:${port}`);
});

//dry principal 
//kiss principle
// dry - don't repeat yourself