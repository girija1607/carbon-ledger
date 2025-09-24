const Record = require("../models/Record");
const { generateId } = require("../utils/idGen");

async function getAllRecords(req, res) {
  try {
    const records = await Record.find({}); // find({}) saare documents laata hai
    res.json(records);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

// POST /records
async function createRecord(req, res) {
  try {
    const { project_name, registry, vintage, quantity } = req.body;
    if (!project_name || !registry || !vintage || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const id = generateId({ project_name, registry, vintage, quantity });

    let record = await Record.findById(id);
    if (record) {
      return res.status(200).json(record); // return existing if same input
    }

    record = new Record({
      _id: id,
      project_name,
      registry,
      vintage,
      quantity,
      events: [{ type: "created", timestamp: new Date() }],
    });

    await record.save();
    res.status(201).json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

// POST /records/:id/retire
async function retireRecord(req, res) {
  try {
    const id = req.params.id;
    let record = await Record.findById(id);

    if (!record) return res.status(404).json({ error: "Record not found" });

    if (record.events.find((e) => e.type === "retired")) {
      return res.status(400).json({ error: "Already retired" });
    }

    record.events.push({ type: "retired", timestamp: new Date() });
    await record.save();

    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

// GET /records/:id
async function getRecord(req, res) {
  try {
    const id = req.params.id;
    const record = await Record.findById(id);

    if (!record) return res.status(404).json({ error: "Record not found" });

    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { createRecord, retireRecord, getRecord , getAllRecords};
