// Create web server
// Create a new web server using the express module
const express = require('express');
const app = express();

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

// Data
const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'so funny' },
  { username: 'Tammy', comment: 'rofl' },
  { username: 'FishBoi', comment: 'hehehe' },
];