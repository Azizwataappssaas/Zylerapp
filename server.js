
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the build/client directory
app.use(express.static(path.join(__dirname, 'build/client')));

// Handle all routes for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/client', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
