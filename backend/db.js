const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/airstay"
// mongodb+srv://singhshivanshu455:humma1234@shivanshuapi.74ycbsv.mongodb.net/Shivanshuapi?retryWrites=true&w=majority

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");
}
module.exports = connectToMongo;