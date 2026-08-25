# IDEAS website

Static site (plain HTML/CSS, no build step) for GitHub Pages. Palette and fonts are
defined once in `assets/css/style.css`.

```
index.html            home page (latest edition hero + past editions list)
editions/2026.html     full page for one edition (program, speakers, venue)
assets/css/style.css   shared styles for every page
public/logos/          logo assets (UniSA, DIEM, KnowMIS, IDEAS, IDEAS 2026)
```

## Adding a new edition (e.g. 2027)

1. Get a logo for the new edition (`ideas_2027_logo_nobg.png` + `_light_nobg.png`)
   and drop it in `public/logos/`, following the existing naming pattern.
2. Copy `editions/2026.html` to `editions/2027.html` and update: the logo image
   references, dates/venue in the facts list, theme text, program timeline,
   speakers, and venue section.
3. In `index.html`:
   - Point the hero section at the new edition's logo/facts/CTA (it should
     always describe the *latest* edition).
   - Move the outgoing edition's summary out of the hero and into the
     "Previous editions" section as a new card, e.g.:
     ```html
     <div class="edition-list">
       <a class="card" href="editions/2026.html">
         <div class="year">IDEAS 2026</div>
         <p>One-line summary and dates.</p>
       </a>
     </div>
     ```
     Delete the `.empty-state` block the first time you do this.
4. Update `<title>`/`og:image`/favicon on any page you copied.

No JS, no build tooling — just edit the HTML and it's live on GitHub Pages.
