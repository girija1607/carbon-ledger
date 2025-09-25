// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve the frontend
app.use(express.static('public'));

// Database Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// API Routes
const recordsRouter = require("./src/routes/records");
app.use("/api", recordsRouter);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));