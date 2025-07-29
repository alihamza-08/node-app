// ~/simple-node-app/app2.js
const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('🌟 Hello from App 2 (Port 3002)');
});

app.listen(PORT, () => {
  console.log(`App 2 running on http://localhost:${PORT}`);
});
