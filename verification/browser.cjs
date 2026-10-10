const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const fs = require("fs");
const assert = require("node:assert/strict");
(async () => {
  const b = await chromium.launch({ channel: "chrome", headless: true });
  const out = require("path").resolve(__dirname, "../docs/research/titan");
  let report = [];
  for (const [name, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
    ["small-mobile", 320, 740],
    ["wide", 1920, 1080],
  ]) {
    const page = await b.newPage({ viewport: { width, height } });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(process.env.BASE_URL || "http://localhost:3107", {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `${out}/dw-${name}.png` });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    );
    assert(!overflow, `${name} overflow`);
    await page.getByRole("button", { name: "開啟選單" }).click();
    await page.screenshot({ path: `${out}/dw-${name}-menu.png` });
    assert(await page.getByRole("dialog").isVisible());
    assert(await page.locator("main").evaluate((e) => e.inert));
    await page.getByRole("button", { name: "關閉選單", exact: true }).focus();
    await page.keyboard.press("Shift+Tab");
    assert(
      await page
        .getByRole("dialog")
        .evaluate((e) => e.contains(document.activeElement)),
    );
    await page.keyboard.press("Escape");
    assert((await page.getByRole("dialog").count()) === 0);
    assert(!(await page.locator("main").evaluate((e) => e.inert)));
    await page.getByRole("button", { name: "開啟選單" }).click();
    await page.getByRole("button", { name: "關閉選單", exact: true }).click();
    assert((await page.getByRole("dialog").count()) === 0);
    await page.locator("#details").scrollIntoViewIfNeeded();
    await page.getByRole("tab", { name: "拇指環的選擇" }).click();
    assert(
      await page
        .getByRole("tabpanel")
        .innerText()
        .then((x) => x.includes("取捨")),
    );
    await page.locator(".detail-photo img").evaluate(async (e) => {
      await e.decode();
    });
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${out}/dw-${name}-details.png` });
    await page.getByRole("tab", { name: "拇指環的選擇" }).press("ArrowRight");
    assert.equal(
      await page
        .getByRole("tab", { name: "日常重量訓練" })
        .getAttribute("aria-selected"),
      "true",
    );
    await page.locator("#faq").scrollIntoViewIfNeeded();
    await page.locator("summary").first().click();
    assert(
      (await page.locator("details").first().getAttribute("open")) !== null,
    );
    await page.locator("summary").first().press("Enter");
    assert(
      (await page.locator("details").first().getAttribute("open")) === null,
    );
    const links = await page
      .locator('a[href^="https:"]')
      .evaluateAll((es) => es.map((e) => e.href));
    assert(
      links.every(
        (x) =>
          x.startsWith("https://myship.7-11.com.tw/") ||
          x.startsWith("https://line.me/"),
      ),
    );
    await page
      .locator("img")
      .evaluateAll((es) => es.forEach((e) => (e.loading = "eager")));
    await page
      .locator("img")
      .evaluateAll((es) => Promise.all(es.map((e) => e.decode())));
    const broken = await page
      .locator("img")
      .evaluateAll((es) =>
        es.filter((e) => e.complete && e.naturalWidth === 0).map((e) => e.src),
      );
    assert.equal(broken.length, 0);
    assert.equal(errors.length, 0);
    report.push({
      viewport: name,
      width,
      height,
      overflow,
      errors,
      brokenImages: broken,
      menu: true,
      tabs: true,
      keyboardTabs: true,
      faq: true,
      outboundLinks: true,
    });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const scene = await page.locator(".collage-scene").boundingBox();
    const child = await page.locator(".collage-sticky").boundingBox();
    assert(child.height <= scene.height + 1, "Reduced motion collage overlaps");
    await page.close();
  }
  fs.writeFileSync(`${out}/verification.json`, JSON.stringify(report, null, 2));
  await b.close();
  console.log(JSON.stringify(report, null, 2));
})();
