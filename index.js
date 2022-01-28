import express from "express"
import  mongoose from "mongoose";
import Post from "./Post.js";
import fileUpload from "express-fileupload";
import router from "./router.js";
const PORT = 1017;

const DB_URL = `mongodb+srv://user:<password>@cluster0.yqrxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use('/api',router)

async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true})
        app.listen(PORT,() => console.log(`Server is running on ${PORT}`))
    }
    catch(e){
        console.log(e)  
    }
}



startApp()
