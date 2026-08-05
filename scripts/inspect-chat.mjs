import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"]
});

for (const url of ["http://localhost:3140/", "http://localhost:3140/get-started"]) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });

  const info = await page.evaluate(() => {
    const cards = [...document.querySelectorAll("article")].filter((a) => /^\$/.test(a.textContent.trim().replace(/^[^$]*/, "")) && a.querySelector("a"));
    const priced = [...document.querySelectorAll("article")].filter((a) => /\$\d/.test(a.textContent));
    return priced.map((a) => ({
      price: a.textContent.match(/\$[\d,]+/)?.[0],
      checklistItems: a.querySelectorAll("ul li").length,
      hasChecklist: Boolean(a.querySelector("ul"))
    }));
  });

  console.log(`\n=== ${url} ===`);
  console.log(JSON.stringify(info, null, 2));
  await page.close();
}

await browser.close();
