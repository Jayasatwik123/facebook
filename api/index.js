const express=require("express");
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const helmet=require("helmet")
const morgan=require("morgan")
const userRoute=require("./routes/users")

const authRoute=require("./routes/auth")
const postRoute=require("./routes/posts")
mongoose.set('strictQuery', false)
dotenv.config()
mongoose.connect("mongodb+srv://jaya:jayasatwik1234@cluster0.f2iyvoz.mongodb.net/facebook?retryWrites=true&w=majority",()=>{

    console.log("connected to mongo"); 
});

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute )
app.listen(8800,()=>{
    console.log("Backend server is running");
})