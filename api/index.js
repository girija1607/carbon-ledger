// // server.js
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.enable('trust proxy');
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// const PORT = process.env.PORT || 4000;
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/carbon_ledger';

// // connect to MongoDB
// mongoose.connect(MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch(err => {
//     console.error("❌ MongoDB connection error:", err);
//     process.exit(1);
//   });

// app.get('/', (req, res) => {
//   res.send('Carbon Ledger API running');
// });

// const recordsRouter = require("./src/routes/records");
// app.use("/api", recordsRouter);


// app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));

// api/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Database Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes

const recordsRouter = require("../src/routes/records"); // Path aache se check kar lena
app.use("/api", recordsRouter);


module.exports = app;