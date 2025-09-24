// src/models/Record.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  type: { type: String, required: true },   // e.g. created, retired
  timestamp: { type: Date, default: Date.now },
}, { _id: false });

const RecordSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // deterministic ID
  project_name: String,
  registry: String,
  vintage: String,
  quantity: Number,
  events: { type: [EventSchema], default: [] }
});

module.exports = mongoose.model("Record", RecordSchema);
