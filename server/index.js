const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4444, () => {
  console.log('Server is listening on port 4444');
});
