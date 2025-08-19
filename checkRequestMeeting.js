const fs = require("fs");
const puppeteer = require("puppeteer");


const booths = [
    {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1748405927054001couI",
    "name": "Crown Equipment Corporation"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713189550720001dUQC",
    "name": "Wayfair"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1754886601927001iXR0",
    "name": "Adyen"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1720020857770001nrcJ",
    "name": "Amazon"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1718199651644001Sh56",
    "name": "Apollo"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1712942120293001LSc4",
    "name": "Apple"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1722441485393001ZFzy",
    "name": "Arete"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1714576726046001Gbye",
    "name": "Audible"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1712944582844001LZAP",
    "name": "Bank Of America"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188687180001PRnl",
    "name": "Capital One"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1754886602618001ip4b",
    "name": "CBRE"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713189549333001dJUV",
    "name": "Chewy"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713189549413001dSU4",
    "name": "Chubb"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188687495001PD35",
    "name": "Citadel"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713361999237001RCeP",
    "name": "Cloudflare"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713912142591001YeKA",
    "name": "Deere & Company (John Deere)"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1720020857878001njZu",
    "name": "Deloitte Services LP"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1716336263629001WWCH",
    "name": "DTCC"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188687826001P5dy",
    "name": "EY"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1722441485163001Z0f4",
    "name": "Five Rings"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713361999165001RGIP",
    "name": "Goldman Sachs"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188687975001PkXb",
    "name": "Google"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713189549743001dLGN",
    "name": "InterSystems"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188688172001PAPx",
    "name": "Intuit"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188688221001PBYL",
    "name": "Jane Street"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1717597285016001U6Os",
    "name": "John Hancock"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1754493196793001TMGt",
    "name": "Lumen"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188688480001Pktf",
    "name": "McDonalds"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1716993408943001dxfK",
    "name": "Meta"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713912142724001YIax",
    "name": "Morgan Stanley"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188688528001PZX4",
    "name": "Navy Federal Credit Union"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1722441485475001ZHyz",
    "name": "Next Insurance"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1749533408322001SdGx",
    "name": "PayPal"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1715175150917001JdxX",
    "name": "Prudential"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1747784539000001oRmx",
    "name": "RedHat"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1723484257530001Vy9c",
    "name": "Rivian"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1748405927235001cDQn",
    "name": "Rocket"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1721836626068001VVzc",
    "name": "Snapchat"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188689116001PesZ",
    "name": "Sony"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1716993409019001dWrK",
    "name": "D.E Shaw"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1750881473389001gMnU",
    "name": "RAI Institute"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188689461001PWIM",
    "name": "Vanguard"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1719414268768001c7dq",
    "name": "Two Sigma"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713189550555001dQJZ",
    "name": "USAA"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713189550644001dUTp",
    "name": "Voya Financial"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1754886605671001is2j",
    "name": "Walleye Capital"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1714576726611001G3IM",
    "name": "Wex"
  },
  {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713189550799001dCWs",
    "name": "Xero"
  },
    {
    "url": "https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog/exhibitor/1713188690247001Pw4B",
    "name": "Wells Fargo"
  },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "./user_data"
  });
  const page = await browser.newPage();
  await page.goto("https://gracehoppercelebration.com/flow/anitab/vcf25/exhcatalog/page/ghc25sponsorcatalog", { waitUntil: "networkidle2" });
  console.log("Please log in manually if needed, then press Enter in the terminal to continue...");  
  process.stdin.resume();
  await new Promise(resolve => process.stdin.once("data", () => resolve()));
  process.stdin.pause();
  const results = [];
  for (const booth of booths) {
    console.log(`Checking: ${booth.name} -> ${booth.url}`);
    await page.goto(booth.url, { waitUntil: "networkidle0" }).catch(() => {
        console.log(`⚠️ networkidle2 failed for ${booth.url}, falling back to domcontentloaded`);
        return page.goto(booth.url, { waitUntil: "domcontentloaded" });
    });
    const result = await page.evaluate(() => {
    const norm = s => (s || "").replace(/\s+/g, " ").trim();
    const btn = Array.from(document.querySelectorAll("button, a")).find(el => {
      const txt = norm(el.textContent || "");
      const aria = norm(el.getAttribute("aria-label") || "");
      return /Request\s*Meeting/i.test(txt) || /request\s*meeting/i.test(aria);
    });
    if (!btn) return { hasRequestMeeting: false };
    const disabled =
      btn.disabled ||
      btn.getAttribute("aria-disabled") === "true" ||
      btn.classList.contains("disabled") ||
      btn.classList.contains("rfc-button--disabled") ||
      btn.classList.contains("rfc-state-disabled") ||
      btn.hasAttribute("disabled");
    return {
      hasRequestMeeting: true,
      enabled: !disabled,
      buttonText: norm(btn.textContent || ""),
      aria: btn.getAttribute("aria-label") || "",
      classes: btn.className
    };
});
    
    results.push({ booth: booth.name, url: booth.url, ...result });
    console.log(result);
    
  }

  await browser.close();

  fs.writeFileSync("request_meeting_results.json", JSON.stringify(results, null, 2));
  console.log("Done! Results saved to request_meeting_results.json");
})();
