const express = require('express');
const router = express.Router();
const ctrlIsraelScrappers = require("../controllers/israeliScrapers")

router.get("/api/leumi", ctrlIsraelScrappers.leumi);
router.get("/api/otsar", ctrlIsraelScrappers.otsar);

module.exports = router;