const express = require('express');
const router = express.Router();
const ctrlIsraelScrappers = require("../controllers/israeliScrapers")

router.get("/scrapper/api/leumi", ctrlIsraelScrappers.leumi);
router.get("/scrapper/api/otsar", ctrlIsraelScrappers.otsar);

module.exports = router;
