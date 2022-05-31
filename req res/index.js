const express = require("express");
const app = express();

const products = [
  { id: 1, name: "t-shirt", price: 50, quantity: 3 },
  { id: 2, name: "skirt", price: 89, quantity: 10 },
  { id: 3, name: "blouse", price: 120, quantity: 3 },
  { id: 4, name: "shoes", price: 190, quantity: 4 },
  { id: 5, name: "sandal", price: 87, quantity: "out of stock" },
  { id: 6, name: "leather jacket", price: 180, quantity: 2 },
  { id: 7, name: "jean jacket", price: 70, quantity: "out of stock" },
  { id: 8, name: "clock", price: 500, quantity: 1 },
  { id: 9, name: "straight-jean", price: 99, quantity: 2 },
  { id: 10, name: "high heels", price: 500, quantity: 1 },
];

app.get("/", function (req, res) {
  res.json(products);
});

app.get("/:id", function (req, res) {
    res.send(
        JSON.stringify(products.find((product) => product.id == req.params.id))
      );
});

app.listen(3000, ()=>{
    console.log('server is started');
  });
