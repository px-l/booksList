const { chromium } = require('playwright');
const expect = require('chai').expect;

(async () => {
  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/books/list');
  // other actions...
  const content = await page.textContent('#btn');
  expect(content).equal('点击');
  await browser.close();
})();