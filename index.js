const express= require('express');
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended:false}))

app.use('/api/users',require('./routes/api/users'))
app.listen(8080,console.log("server running....!"))


// app.listen(3000,(req, res) =>{
//     res.send(console.log("listening on 3000"))
// })
