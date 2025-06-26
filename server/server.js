require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic Route
app.get('/', (req, res) => {
  res.send('Smart Meals API Running');
});

// User Routes (we'll add these next)
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));