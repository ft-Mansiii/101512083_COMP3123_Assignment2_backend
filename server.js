//express and mongo db setup
const express = require("express");
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

require("dotenv").config();  //loads values from .env file into process.env.
 
const app = express();
app.use(express.json()); //middleware that tells Express: “if the request has a JSON body, parse it and make it available as req.body.”
app.use("/uploads", express.static("uploads"));


mongoose.connect(process.env.MONGO_URI, {
  dbName: "assign01"
});


//test 
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" }); //printed on http://localhost:5000/
});

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

//start server
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//routes

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/employee", require("./routes/employeeRoutes"));
