# Monson Savings Bank — Static Website

A fully static marketing site for Monson Savings Bank, built from the original
`index.html` design that was delivered inside `monsonsavings.zip`.

## What's here

- **`index.html`** — the home page (hero, community, news, metrics, testimonials, FAQ, contact).
- **`app.css`** — the compiled utility/theme stylesheet (extracted from the original inline `<style>`).
- **`css2.css` / `css2-1.css`** — web-font declarations.
- **`script.js`** — front-end behaviour: FAQ accordion, mobile navigation menu, and smooth anchor scrolling.
- **News post pages** — one page per announcement, linked from the *Latest Updates* section:
  `miracle-league.html`, `quaboag-valley.html`, `revitalize-cdc.html`, `scholarships.html`,
  `promotions.html`, `magic-for-maddie.html`, `mba-grants.html`, `springfield-ballers.html`,
  `monson-free-library.html`, `heather-arbour.html`.
- **Navbar / footer pages** — `locations.html` (all branch & ATM locations),
  `contact.html` (phones, email, and official social media), `life-and-money.html`,
  `homeownership.html`, `community-impact.html`, `career.html`, `privacy-policy.html`,
  `terms-of-service.html`.

All third-party (Webild) references were removed and every link now points to a local page or asset.

## Running locally

It's a plain static site — open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```