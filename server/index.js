const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const helmet=require('helmet')
const morgan=require('morgan')
const userRoute=require('./routes/users')
const postRoute=require('./routes/post')
const authRoute=require('./routes/auth')
const conversationRoute=require('./routes/coversations')
const messageRoute=require('./routes/messages')

var cors = require('cors')

dotenv.config();

//port connection
app.listen(4000,()=>{
    console.log("server redy");
})
//database connection
mongoose.connect(process.env.URL,{useNewUrlParser:true},()=>{
    console.log("Mongoose connected");
});
//middile ware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use('/user',userRoute)
app.use('/post',postRoute)
app.use('/auth',authRoute)
app.use('/conversation',conversationRoute)
app.use('/message',messageRoute)



