const mongoose = require("mongoose");
require("dotenv").config({ path: "config.env" });

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {

        })
    } catch (error) {
        console.log("BD conectada")
        process.exit(1)
    }
}

module.exports = connectDB;