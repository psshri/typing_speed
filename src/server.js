const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const fs = require('fs');

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('/api/fileContent', (req, res) => {
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Failed to read file' });
    } else {
      res.json({ content: data });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
