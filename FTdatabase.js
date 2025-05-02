// import mongoose
const mongoose = require("mongoose");

//connect to mongodb
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/fitness")
        console.log("Success")
    }catch (error){
        console.error(error);
        process.exit(1);
    }
};


// mongoose.connect("mongodb://127.0.0.1:27017/users")
// .then(() => console.log("Success"))
// .catch((err) => console.error(err));

module.exports = connectDB;