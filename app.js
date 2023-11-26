const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(__dirname));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
