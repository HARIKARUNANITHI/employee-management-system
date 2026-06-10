const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("MongoDB Connection Error:");
    console.log(err);
});

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.use("/employees", employeeRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});