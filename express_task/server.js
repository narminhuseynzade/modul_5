const express = require('express');
const app = express();

app.listen(3000, ()=>{
  console.log('server is started');
});

const user = [
  [0, "Jim", 65],
  [1, "Ebrar Kurt", 22],
  [2, "Dani", 45],
  [3, "Ibrahimovic", 40]
];

app.get('/', (req, res) => {
  res.json(user);
});
