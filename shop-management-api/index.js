// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());

// // Dummy data
// let shops = [];
// let items = [];

// // Routes
// // Shops
// app.get('/api/shops', (req, res) => {
//     res.json(shops);
// });

// app.post('/api/shops', (req, res) => {
//     const newShop = req.body;
//     shops.push(newShop);
//     res.status(201).json(newShop);
// });

// // Items
// app.get('/api/items', (req, res) => {
//     res.json(items);
// });

// app.post('/api/items', (req, res) => {
//     const newItem = req.body;
//     items.push(newItem);
//     res.status(201).json(newItem);
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Dummy data
let shops = [
  { id: 1, name: "Shop1", city: "Kaunas" },
  { id: 2, name: "Shop2", city: "Vilnius" },
  { id: 3, name: "Shop3", city: "Klaipeda" },
];

let items = [
  { id: 1, name: "Item1", price: 1, shopId: 3 },
  { id: 2, name: "Item2", price: 2, shopId: 3 },
  { id: 3, name: "Item3", price: 3, shopId: 2 },
  { id: 4, name: "Item4", price: 4, shopId: 2 },
  { id: 5, name: "Item5", price: 5, shopId: 1 },
  { id: 6, name: "Item6", price: 6, shopId: 1 },
];

// Get all shops
app.get("/api/shops", (req, res) => {
  res.json(shops);
});

// Create new shop
app.post("/api/shops", (req, res) => {
  const { name, city } = req.body;
  const id = shops.length + 1;
  const newShop = { id, name, city };
  shops.push(newShop);
  res.status(201).json(newShop);
});

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Create new item
app.post("/api/items", (req, res) => {
  const { name, price, shopId } = req.body;
  const id = items.length + 1;
  const newItem = { id, name, price, shopId };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
