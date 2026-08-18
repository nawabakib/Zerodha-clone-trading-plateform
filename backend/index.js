require('dotenv').config();

const mongoose =require("mongoose");
const PORT = process.env.PORT || 3002
const uri = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");



const express = require("express");
 const app = express();


app.use(cors());
app.use(bodyParser.json());
 
 mongoose.connect(uri)
    console.log("DB connect");




app.get('/allHoldings' , async(req, res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get('/allPositions' , async(req, res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});
app.use("/api/auth", authRoutes);

// PROTECTED DASHBOARD API

app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to Zerodha Dashboard",
    userId: req.user.id,
  });
});
app.get("/", (req, res) => {
  res.send("Backend is running");
});

 app.listen(PORT, ()=>{
    console.log("app started")
 })