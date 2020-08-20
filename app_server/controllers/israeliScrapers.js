var moment = require('moment');
const {createScraper} = require('israeli-bank-scrapers');

module.exports.leumi = function (req, res) {
    process.env.args = ['--no-sandbox', '--disable-setuid-sandbox'];
    let options = {
        companyId: "leumi", // mandatory; one of 'hapoalim', 'hapoalimBeOnline', leumi', 'discount', 'mizrahi', 'otsarHahayal', 'visaCal', 'max', 'isracard', 'amex'
        startDate: moment().startOf('month'), // the date to fetch transactions from (can't be before the minimum allowed time difference for the scraper)
        combineInstallments: false, // if set to true, all installment transactions will be combine into the first one
        showBrowser: false, // shows the browser while scraping, good for debugging (default false)
        verbose: false//, // include more debug info about in the output
        // browser : Browser, // optional option from init puppeteer browser instance outside the libary scope. you can get browser diretly from puppeteer via `puppeteer.launch()` command.
        // executablePath: string // optional. provide a patch to local chromium to be used by puppeteer. Relevant when using `israeli-bank-scrapers-core` library
    }

    const credentials = {
        username: req.query.username,
        password: req.query.password
    };

    (async function () {
        try {
            const scraper = createScraper(options);
            const scrapeResult = await scraper.scrape(credentials);

            if (scrapeResult.success) {
                res.json(scrapeResult.accounts);
                scrapeResult.accounts.forEach((account) => {
                    console.log(`found ${account.txns.length} transactions for account number ${account.accountNumber}`);
                });
            } else {
                throw new Error(scrapeResult.errorType);
            }
        } catch (e) {
            console.error(`scraping failed for the following reason: ${e.message}`);
        }
    })();
};

module.exports.otsar = function (req, res) {
    process.env.args = ['--no-sandbox', '--disable-setuid-sandbox'];
    let options = {
        companyId: "otsarHahayal", // mandatory; one of 'hapoalim', 'hapoalimBeOnline', leumi', 'discount', 'mizrahi', 'otsarHahayal', 'visaCal', 'max', 'isracard', 'amex'
        startDate: moment().startOf('month'), // the date to fetch transactions from (can't be before the minimum allowed time difference for the scraper)
        combineInstallments: false, // if set to true, all installment transactions will be combine into the first one
        showBrowser: false, // shows the browser while scraping, good for debugging (default false)
        verbose: false//, // include more debug info about in the output
        // browser : Browser, // optional option from init puppeteer browser instance outside the libary scope. you can get browser diretly from puppeteer via `puppeteer.launch()` command.
        // executablePath: string // optional. provide a patch to local chromium to be used by puppeteer. Relevant when using `israeli-bank-scrapers-core` library
    }

    const credentials = {
        username: req.query.username,
        password: req.query.password
    };

    (async function () {
        try {
            const scraper = createScraper(options);
            const scrapeResult = await scraper.scrape(credentials);

            if (scrapeResult.success) {
                res.json(scrapeResult.accounts);
                scrapeResult.accounts.forEach((account) => {
                    console.log(`found ${account.txns.length} transactions for account number ${account.accountNumber}`);
                });
            } else {
                throw new Error(scrapeResult.errorType);
            }
        } catch (e) {
            console.error(`scraping failed for the following reason: ${e.message}`);
        }
    })();
}