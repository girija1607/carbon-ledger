// Final test api/index.js
// Ismein Express ya Mongoose kuch bhi nahi hai

module.exports = (req, res) => {
  // CORS header manually add kar rahe hain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Seedha ek JSON response bhej rahe hain
  res.status(200).json({
    message: "Serverless function is working directly!",
    path: req.url
  });
};