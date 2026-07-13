const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to your simple backend app!" });
});

// A simple POST route to test sending data
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.status(201).json({
    status: "success",
    received: receivedData
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});