const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const { PRODUCTS, recommendProducts } = require("./snack-match.js");

test("recommends a resealable strawberry pouch for a fruit-first topping shopper", () => {
  const result = recommendProducts({
    buyer: "self",
    occasion: "topping",
    priority: "simple",
    size: "regular",
    mix: "fruit",
  });

  assert.equal(result.primary.id, "strawberries-single");
  assert.equal(result.primary.price, 12.99);
  assert.match(result.primary.packLabel, /46g resealable pouch/);
});

test("recommends a 3 × 16g pack for a fruit-first lunchbox shopper", () => {
  const result = recommendProducts({
    buyer: "children",
    occasion: "lunchbox",
    priority: "portable",
    size: "snack-size",
    mix: "fruit",
  });

  assert.equal(result.primary.id, "crispy-strawberries-3-pack");
  assert.match(result.primary.packLabel, /3 × 16g/);
});

test("recommends a regular yogurt pouch for an at-home yogurt shopper", () => {
  const result = recommendProducts({
    buyer: "household",
    occasion: "at-home",
    priority: "taste",
    size: "regular",
    mix: "yogurt",
  });

  assert.equal(result.primary.id, "strawberry-yogurt-single");
  assert.match(result.primary.packLabel, /44g resealable pouch/);
});

test("recommends the 8-pack for a portable yogurt variety shopper", () => {
  const result = recommendProducts({
    buyer: "household",
    occasion: "on-the-go",
    priority: "portable",
    size: "snack-size",
    mix: "yogurt",
  });

  assert.equal(result.primary.id, "yogurt-snack-8-pack");
  assert.equal(result.primary.price, 39.99);
});

test("recommends the All-In bundle for an even-mix sharing occasion", () => {
  const result = recommendProducts({
    buyer: "sharing",
    occasion: "at-home",
    priority: "satisfying",
    size: "both",
    mix: "even",
  });

  assert.equal(result.primary.id, "all-in-bundle");
  assert.equal(result.primary.price, 99.99);
});

test("returns three unique, available recommendations ordered by score", () => {
  const result = recommendProducts({
    buyer: "household",
    occasion: "topping",
    priority: "taste",
    size: "both",
    mix: "yogurt",
  });

  assert.equal(result.recommendations.length, 3);
  assert.equal(new Set(result.recommendations.map((product) => product.id)).size, 3);
  assert.ok(result.recommendations.every((product) => product.available));
  assert.ok(result.recommendations[0].score >= result.recommendations[1].score);
  assert.ok(PRODUCTS.length >= 7);
});

test("keeps one complete Snack Match flow without a duplicate preview", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  assert.equal((html.match(/id="snack-match"/g) || []).length, 1);
  assert.equal((html.match(/href="#snack-match"/g) || []).length, 2);
  assert.doesNotMatch(html, /href="\.\.\/index\.html"/);
  assert.doesNotMatch(html, /match-journey|Find your OHME moment|Start with three quick signals/);
  assert.match(html, /id="snack-match-form"/);
  assert.match(html, /src="snack-match\.js"/);
});

test("uses four package questions plus the separate crunch-family choice", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  assert.match(html, /Who do you usually buy packaged snacks for\?/);
  assert.match(html, /When would you most often eat OHME!/);
  assert.match(html, /When you buy snacks, what matters most\?/);
  assert.match(html, /If both sizes were available in your preferred flavour, which would you buy\?/);
  assert.doesNotMatch(html, /If you bought an OHME! bundle/);
  assert.match(html, /3 × 16g/);
  assert.match(html, /44g · resealable/);
  assert.match(html, /data-match-key="buyer"/);
  assert.match(html, /data-match-key="occasion"/);
  assert.match(html, /data-match-key="priority"/);
  assert.match(html, /data-match-key="size"/);
  assert.doesNotMatch(html, /data-match-key="mix"/);
  assert.equal((html.match(/class="match-question"/g) || []).length, 4);
  assert.equal((html.match(/data-crunch=/g) || []).length, 2);
});

test("adds a brand-safe, keyboard-accessible category comparison scroller", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  assert.match(html, /id="read-track"/);
  assert.match(html, /id="read-previous"/);
  assert.match(html, /id="read-next"/);
  assert.match(html, /scroll-snap-type: inline mandatory/);
  assert.match(html, /assets\/ohme-match-yogurt-yum\.png/);
  assert.match(html, /Other freeze-dried fruit/);
  assert.match(html, /General granola bars &amp; bites/);
  assert.match(html, /class="category-visual category-fruit"/);
  assert.match(html, /class="category-visual category-granola"/);
  assert.match(html, /event\.key !== "ArrowLeft"/);
});

test("makes OHME! Snack Match the project homepage", () => {
  const rootHtml = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

  assert.match(rootHtml, /snack-match\//);
  assert.doesNotMatch(rootHtml, /competitor-comparator\//);
  assert.match(rootHtml, /window\.location\.replace/);
  assert.match(rootHtml, /window\.location\.search/);
  assert.match(rootHtml, /window\.location\.hash/);
});

test("matches the OHME brand-home reference with moment imagery and interactive entry points", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  assert.match(html, /How will you OHME\?/);
  assert.match(html, /Pick your crunch/);
  assert.match(html, /ohme-moment-on-the-go\.jpg/);
  assert.match(html, /ohme-moment-topping\.jpg/);
  assert.match(html, /ohme-moment-lunchbox\.jpg/);
  assert.match(html, /ohme-moment-sharing\.jpg/);
  assert.match(html, /data-moment="on-the-go"/);
  assert.match(html, /data-crunch="yogurt"/);
  assert.match(html, /data-compare-tab="ingredients"/);
});

test("connects the crunch choice to Snack Match and hides the empty result panel", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  const crunchIndex = html.indexOf('class="crunch-section"');
  const formIndex = html.indexOf('id="snack-match-form"');
  assert.ok(crunchIndex > -1 && crunchIndex < formIndex);
  assert.match(html, /selectMatchAnswer\("mix", button\.dataset\.crunch\)/);
  assert.match(html, /matchForm\.scrollIntoView/);
  assert.match(html, /id="match-result"[^>]*hidden/);
  assert.match(html, /matchResult\.hidden = false/);
  assert.match(html, /matchResult\.hidden = true/);
  assert.doesNotMatch(html, /Five survey-based choices\. One useful shortlist/);
});

test("keeps the OHME comparison image contained below its label", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  assert.match(html, /\.read-media img \{[^}]*min-width: 0;[^}]*min-height: 0;[^}]*max-width: 100%;[^}]*max-height: 100%;[^}]*object-fit: contain;/s);
  assert.match(html, /padding: 52px 28px 28px;/);
  assert.match(html, /padding: 48px 24px 24px;/);
  assert.match(html, /OHME yogurt crunch pouches in strawberry, mango, and blueberry flavours/);
});

test("removes competitor branding, the shelf map, and the standalone sources section", () => {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

  assert.doesNotMatch(html, /id="shelf-map"|class="product-card"|data-filter=/);
  assert.doesNotMatch(html, /id="sources"|sources-section|Sources stay visible/);
  assert.doesNotMatch(html, /Origo|Crispy Green|MadeGood|That's It|SmartSweets/);
  assert.doesNotMatch(html, /origofresh\.com|crispygreen\.com|madegoodfoods\.ca|thatsitfruit\.com|smartsweets\.ca/);
  assert.match(html, /category-level comparison/i);
  assert.match(html, /What makes OHME different/);
});
