const mongoose = require("mongoose")

//Database Connection
// const URI = "mongodb://127.0.0.1:27017/mern_admin"
// mongoose.connect(URI)

const URI = "mongodb+srv://sammedsb71:38DsrgjqkOfZi5y9@cluster0.tsqsd9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectdb = async(req,res)=>{
    try {
        await mongoose.connect(URI);
        console.log("Connected Sucessfull")
    } catch (error) {
        console.log("database connection failed..!");
        process.exit(0);
    }
}

module.exports = connectdb;