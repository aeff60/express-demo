const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Jenkins! This is a simple Express.js app.');
});

app.get('/about', (req, res) => {
    res.send('This is a simple Express.js app.');
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
