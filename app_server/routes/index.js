const express = require('express');
const router = express.Router();
const ctrlIsraelScrappers = require("../controllers/israeliScrapers")

router.post("/scrapper/api/leumi", ctrlIsraelScrappers.leumi);
router.post("/scrapper/api/otsar", ctrlIsraelScrappers.otsar);
router.post("/scrapper/api/max", ctrlIsraelScrappers.max);
router.post("/scrapper/api/cal", ctrlIsraelScrappers.cal);

module.exports = router;
