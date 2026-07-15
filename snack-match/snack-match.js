(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.OhmeSnackMatch = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const PRODUCTS = [
    {
      id: "strawberries-single",
      name: "Freeze Dried Strawberries (Sliced)",
      shortName: "Sliced Strawberries",
      price: 12.99,
      compareAtPrice: null,
      available: true,
      packLabel: "46g resealable pouch",
      buyers: ["self", "household"],
      occasions: ["topping", "at-home"],
      priorities: ["taste", "value", "simple"],
      sizes: ["regular"],
      mixes: ["fruit", "one-flavour"],
      image: "assets/ohme-match-strawberries.png",
      url: "https://www.ohmefoods.com/products/freeze-dried-strawberries",
      description: "A simple fruit-first pouch that works as a light snack or a crisp topping.",
    },
    {
      id: "strawberry-yogurt-single",
      name: "Freeze Dried Strawberry Yogurt Crunch",
      shortName: "Strawberry Yogurt Crunch",
      price: 12.99,
      compareAtPrice: null,
      available: true,
      packLabel: "44g resealable pouch",
      buyers: ["self", "household"],
      occasions: ["topping", "at-home", "on-the-go"],
      priorities: ["taste", "value", "simple"],
      sizes: ["regular"],
      mixes: ["yogurt", "one-flavour"],
      image: "assets/ohme-match-strawberry-yogurt.png",
      url: "https://www.ohmefoods.com/products/freeze-dried-strawberry-yogurt-crunch",
      description: "Creamy yogurt flavour and freeze-dried crunch in a full-size pouch.",
    },
    {
      id: "crispy-strawberries-3-pack",
      name: "Crispy Strawberries Snack Size (3 Pack)",
      shortName: "Crispy Strawberries 3-Pack",
      price: 16.49,
      compareAtPrice: null,
      available: true,
      packLabel: "3 × 16g snack-size pouches",
      buyers: ["self", "children", "household"],
      occasions: ["lunchbox", "on-the-go"],
      priorities: ["portable", "value", "simple"],
      sizes: ["snack-size"],
      mixes: ["fruit", "one-flavour"],
      image: "assets/ohme-match-crispy-strawberries-3.png",
      url: "https://www.ohmefoods.com/products/crispy-strawberries-snack-size-pack-of-3",
      description: "Three snack-size fruit pouches for bags, desks, lunchboxes, or small sharing moments.",
    },
    {
      id: "yogurt-snack-8-pack",
      name: "Snack Size Yogurt Crunch Pack (8 Pack)",
      shortName: "Yogurt Crunch 8-Pack",
      price: 39.99,
      compareAtPrice: 43.97,
      available: true,
      packLabel: "8 snack-size pouches · mixed flavours",
      buyers: ["self", "children", "household", "sharing"],
      occasions: ["lunchbox", "on-the-go", "at-home"],
      priorities: ["portable", "taste", "satisfying", "value"],
      sizes: ["snack-size"],
      mixes: ["yogurt"],
      image: "assets/ohme-match-yogurt-8-pack.jpg",
      url: "https://www.ohmefoods.com/products/snack-size-yogurt-crunch-pack",
      description: "Eight snack-size bags across strawberry, blueberry, mango, and passion fruit protein crunch.",
    },
    {
      id: "very-berry-yum-pack",
      name: "Very Berry Yum Pack",
      shortName: "Very Berry Yum Pack",
      price: 34,
      compareAtPrice: 36,
      available: true,
      packLabel: "3 full-size resealable fruit pouches",
      buyers: ["household", "sharing"],
      occasions: ["topping", "at-home"],
      priorities: ["taste", "satisfying", "simple", "value"],
      sizes: ["regular"],
      mixes: ["fruit"],
      image: "assets/ohme-match-very-berry.png",
      url: "https://www.ohmefoods.com/products/very-berry-yum-pack",
      description: "A full-size strawberry, blueberry, and raspberry trio for berry fans and sharing.",
    },
    {
      id: "yogurt-yum-pack",
      name: "Oh-My Yogurt Crunch Yum Pack",
      shortName: "Yogurt Crunch Yum Pack",
      price: 34,
      compareAtPrice: 36,
      available: true,
      packLabel: "3 × 44g resealable pouches",
      buyers: ["household", "sharing"],
      occasions: ["topping", "at-home"],
      priorities: ["taste", "satisfying", "value"],
      sizes: ["regular"],
      mixes: ["yogurt"],
      image: "assets/ohme-match-yogurt-yum.png",
      url: "https://www.ohmefoods.com/products/oh-my-yogurt-crunch-yum-pack",
      description: "Three full-size yogurt crunch flavours for topping, tasting, and sharing.",
    },
    {
      id: "all-in-bundle",
      name: "All-In Snackable Bundle",
      shortName: "All-In Snackable Bundle",
      price: 99.99,
      compareAtPrice: null,
      available: true,
      packLabel: "Mixed full-size and snack-size assortment",
      buyers: ["household", "sharing"],
      occasions: ["topping", "lunchbox", "on-the-go", "at-home"],
      priorities: ["taste", "satisfying", "portable"],
      sizes: ["both"],
      mixes: ["even"],
      image: "assets/ohme-match-all-in.png",
      url: "https://www.ohmefoods.com/products/snack-drawer-bundle",
      description: "The broadest OHME assortment for a snack drawer, a group, or someone who wants everything.",
    },
  ];

  function sizeScore(product, size) {
    if (size === "not-sure") return 0;
    if (size === "both") return product.sizes.includes("both") ? 8 : 1;
    return product.sizes.includes(size) ? 6 : -4;
  }

  function scoreProduct(product, answers) {
    let score = sizeScore(product, answers.size);
    if (product.buyers.includes(answers.buyer)) score += 4;
    if (product.occasions.includes(answers.occasion)) score += 5;
    if (product.priorities.includes(answers.priority)) score += 3;
    if (answers.mix !== "no-preference" && product.mixes.includes(answers.mix)) score += 6;
    return score;
  }

  function buildReasons(product, answers) {
    const reasons = [];
    const buyerLabels = { self: "for yourself", children: "younger-family fit", household: "household fit", sharing: "made for sharing" };
    const occasionLabels = { topping: "topping occasion", lunchbox: "lunchbox or work/school", "on-the-go": "on-the-go fit", "at-home": "at-home fit" };
    const priorityLabels = { taste: "taste and texture", value: "price and value", satisfying: "larger multi-pouch format", portable: "easy to carry", simple: "simple-ingredient cue" };
    const mixLabels = { fruit: "mostly fruit", yogurt: "mostly yogurt crunch", even: "fruit + yogurt discovery", "one-flavour": "one-flavour fit" };
    if (product.buyers.includes(answers.buyer)) reasons.push(buyerLabels[answers.buyer]);
    if (product.occasions.includes(answers.occasion)) reasons.push(occasionLabels[answers.occasion]);
    if (product.priorities.includes(answers.priority)) reasons.push(priorityLabels[answers.priority]);
    if (answers.mix !== "no-preference" && product.mixes.includes(answers.mix)) reasons.push(mixLabels[answers.mix]);
    reasons.push(product.packLabel);
    reasons.push(`CAD $${product.price.toFixed(2)}`);
    return reasons;
  }

  function recommendProducts(answers) {
    const required = ["buyer", "occasion", "priority", "size", "mix"];
    const missing = required.filter((key) => !answers || !answers[key]);
    if (missing.length) throw new Error(`Missing snack-match answers: ${missing.join(", ")}`);

    const recommendations = PRODUCTS
      .filter((product) => product.available)
      .map((product) => ({
        ...product,
        score: scoreProduct(product, answers),
        reasons: buildReasons(product, answers),
      }))
      .sort((a, b) => b.score - a.score || a.price - b.price || a.name.localeCompare(b.name))
      .slice(0, 3);

    return { primary: recommendations[0], recommendations };
  }

  return { PRODUCTS, recommendProducts, scoreProduct };
});
