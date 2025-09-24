// src/utils/idGen.js
const crypto = require("crypto");

function generateId({ project_name, registry, vintage, quantity }) {
  const input = `${project_name}-${registry}-${vintage}-${quantity}`;
  return crypto.createHash("sha256").update(input).digest("hex").slice(0, 10); 
  // short 10-char ID
}
module.exports = { generateId };