const express = require('express');
const bodyParser = require('body-parser');
const pollRoutes = require('./routes/pollRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/polls', pollRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});