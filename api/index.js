const express = require('express');
const app = express();


app.get('/api/records', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});


module.exports = app;