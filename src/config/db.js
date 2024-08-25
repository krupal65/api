const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://krupalbalar65k:5ezPcDoFiJwA9gOU@cluster0.9jgh475.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}