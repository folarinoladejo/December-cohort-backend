const express = require("express")
const env = require('dotenv')
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")


const productRoute = require("./Routes/products")


env.config()
app.use(express.json());
app.use(cors())

app.use("/api/", productRoute)


//Second Step: Connect Server to mongoDB using connection
//string
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successful"))
.catch((err)=> {
    console.log(err);
})


app.listen(process.env.PORT || 5000, ()=> {
    console.log("Server running on port 5000")
})

