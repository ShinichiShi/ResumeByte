const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('server side')
})

app.listen(3000,()=>{
    console.log('listening bruh on 3000')
})  