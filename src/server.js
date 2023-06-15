const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
