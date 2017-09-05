// jshint esversion: 6
 const express = require('express');
 const path = require('path');

 const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) =>{
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log("Server started in port 3000..." );
});
