const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Dummy data
let shops = [];
let items = [];

// Routes
// Shops
app.get("/api/shops", (req, res) => {
  res.json(shops);
});

app.post("/api/shops", (req, res) => {
  const newShop = req.body;
  shops.push(newShop);
  res.status(201).json(newShop);
});

// Items
app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
