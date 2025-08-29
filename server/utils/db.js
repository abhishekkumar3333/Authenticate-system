const mongoose = require("mongoose")
const connectDb = async () =>{
    try {
        console.log("🔑 MONGO URI:", process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connected")
    } catch (error) {
        console.log("database connetion failed");
        console.error(error);
    }
}
module.exports = connectDb;