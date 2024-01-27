const express = require('express');
const app = express();
let { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));

// HTTP Methods
// GET - Read Data
// POST - Insert Data
// PUT - Update Data
// DELETE - Delete Data

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
