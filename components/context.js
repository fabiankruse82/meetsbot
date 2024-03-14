const puppeteer = require('puppeteer');

// Function to create context object
async function createContext() {
  const browser = await puppeteer.launch({ headless: false }); // You might need to set headless to true for production use
  return {
    browser,
    async close() {
      if (this.browser) {
        await this.browser.close();
      }
    },
  };
}

module.exports = {
  createContext,
};
