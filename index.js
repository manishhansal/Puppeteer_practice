const puppeteer = require('puppeteer');

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://food.grab.com/sg/en/');
    await page.screenshot({ path: "food-grab.png" });
}

start();
