import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = process.env.TARGET_URL ?? "http://localhost:3140/";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"]
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: "networkidle2", timeout: 90000 });

const result = await page.evaluate(() => {
  const heading = [...document.querySelectorAll("h3")].find((el) =>
    el.textContent?.includes("Every reply handled")
  );
  const article = heading?.closest("article");
  const frame = article?.querySelector("ol")?.closest("div.overflow-hidden");
  const chrome = frame?.firstElementChild;
  const body = frame?.lastElementChild;

  const describe = (el, name) => {
    if (!el) return { name, missing: true };
    const cs = getComputedStyle(el);
    return {
      name,
      className: el.className,
      width: Math.round(el.getBoundingClientRect().width),
      bg: cs.backgroundColor,
      boxShadow: cs.boxShadow,
      borderColor: cs.borderColor
    };
  };

  const bubbles = [...(article?.querySelectorAll("ol > li") ?? [])].map((li) => {
    const p = li.querySelector("p");
    return {
      who: li.querySelector("span")?.textContent?.trim(),
      text: p.textContent.slice(0, 24),
      width: Math.round(p.getBoundingClientRect().width),
      align: getComputedStyle(li).alignItems
    };
  });

  return {
    frame: describe(frame, "frame"),
    chrome: describe(chrome, "chrome"),
    body: describe(body, "body"),
    bubbles
  };
});

console.log(JSON.stringify(result, null, 2));
await browser.close();
