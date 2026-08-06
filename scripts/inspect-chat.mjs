import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"]
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3140/sales-ai", { waitUntil: "networkidle2", timeout: 90000 });

const info = await page.evaluate(() => {
  const rect = (el) => {
    const r = el.getBoundingClientRect();
    return { top: Math.round(r.top), bottom: Math.round(r.bottom), height: Math.round(r.height), width: Math.round(r.width) };
  };
  const frame = document.querySelector("div.overflow-hidden");
  const chrome = frame.firstElementChild;
  const body = frame.lastElementChild;
  const firstBubble = frame.querySelector("ol > li p");
  const lastBadgeRow = frame.querySelector("div.flex.flex-wrap.items-center.justify-center");

  const statsGrid = document.querySelectorAll("main .grid")[0];
  const statCells = [...statsGrid.children].map((cell) => {
    const value = cell.querySelector("p");
    const label = value.nextElementSibling;
    const cs = getComputedStyle(cell);
    return {
      cellPadding: cs.padding,
      value: value.textContent,
      labelLines: Math.round(label.getBoundingClientRect().height / 18)
    };
  });

  return {
    panel: rect(frame),
    bodyPaddingTop: Math.round(body.getBoundingClientRect().top - chrome.getBoundingClientRect().bottom),
    bodyPaddingBottom: Math.round(frame.getBoundingClientRect().bottom - lastBadgeRow.getBoundingClientRect().bottom),
    firstBubbleGapFromTop: Math.round(firstBubble.getBoundingClientRect().top - body.getBoundingClientRect().top),
    statCells
  };
});

console.log(JSON.stringify(info, null, 2));
await browser.close();
