const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('oi');
})

app.listen(3000, ()=> {
  console.log(`Server started at http://localhost:3000`)
})