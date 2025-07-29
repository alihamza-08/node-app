// ~/simple-node-app/app1.js
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('🚀 Hello from App 1 (Port 3001)');
});

app.listen(PORT, () => {
  console.log(`App 1 running on http://localhost:${PORT}`);
});
