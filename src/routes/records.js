const express = require("express");
const router = express.Router();
const { createRecord, retireRecord, getRecord ,getAllRecords} = require("../controllers/recordsController");
router.get("/records", getAllRecords);
router.post("/records", createRecord);
router.post("/records/:id/retire", retireRecord);
router.get("/records/:id", getRecord);

module.exports = router;
