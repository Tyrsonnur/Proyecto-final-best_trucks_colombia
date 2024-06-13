const express = require("express");
const conectarDB = require("./config/db")


const app = express();

conectarDB();

app.use("/productos", require("./routes/productos"));

//app.get("/", (req, res) => {
//  res.send("Hello World");
//})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})