import { chromium } from "playwright";
import { pathToFileURL } from "url";
import path from "path";

(async () => {
  const browser = await chromium.launch({ headless: true, channel: "msedge" });
  const page = await browser.newPage();

  page.on("console", (msg) => {
    console.log("CONSOLE", msg.type(), msg.text());
  });

  page.on("pageerror", (err) => {
    console.log("PAGEERROR", err.message);
  });

  const url = pathToFileURL(path.resolve("dist/index.html")).href;
  console.log("OPEN", url);
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(3000);

  console.log("TITLE", await page.title());
  console.log("URL", page.url());

  const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 200));
  console.log("BODY_PREVIEW", JSON.stringify(bodyText));

  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
