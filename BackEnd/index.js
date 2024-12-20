const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
require('dotenv').config()
const port=process.env.PORT ||8080
const mainRoute=require('./ROUTES/mainRouter')
//middlewares
app.use(bodyparser.json())
app.use(cors())
require('./MODELS/db')


//router
app.use('/main',mainRoute)

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})