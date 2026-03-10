# Shannon For A.S. Vice President — Campaign Website

A React campaign website for Shannon Lo, running for SJSU Associated Students Vice President.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm start

# 3. Build for production
npm run build
```

---

## Project Structure

```
src/
├── App.jsx               # Root — assembles all sections
├── App.css               # Global styles & CSS variables
├── index.js              # Entry point
├── index.css             # Body/html resets
├── assets/               # All images (jpg)
│   ├── headshot.jpg
│   ├── swe1-3.jpg
│   ├── dsc1-3.jpg
│   ├── spartan.jpg / spartan2.jpg
│   ├── img4361-3.jpg
│   ├── hiking.jpg
│   └── ...
└── components/
    ├── Nav.jsx / Nav.css             # Fixed nav bar
    ├── Hello.jsx / Hello.css         # Hero — floats down from top
    ├── LogoPage.jsx / LogoPage.css   # Sticky logo page (covered by scroll)
    ├── About.jsx / About.css         # About Shannon
    ├── Volunteers.jsx / .css         # Spinning bubble team cards
    ├── Endorsements.jsx / .css       # Floating endorsement bubbles
    ├── Involvement.jsx / .css        # Tabbed orgs + hover-blur cards
    ├── Letter.jsx / .css             # Candidate biography letter
    ├── Priorities.jsx / .css         # Fixed box + feedback form
    ├── Hobbies.jsx / .css            # Horizontal scroll photo strip
    └── LetsTalk.jsx / .css           # Contact (email + Instagram)
```

---

## Things to Update

### Volunteers (`src/components/Volunteers.jsx`)
- Line 8–9: Change `title` for each volunteer to whatever title they want
- Line 10: Replace `linkedin` URLs with their real LinkedIn profile URLs

### Endorsements (`src/components/Endorsements.jsx`)
- Update the `endorsements` array with real endorsers once you have permission

### Involvement (`src/components/Involvement.jsx`)
- HerCampus tab has no photos yet — add images to `src/assets/` and import them
- Update roles/positions as needed

### Feedback Form (`src/components/Priorities.jsx`)
- Line 24: Wire up `handleSubmit` to a real form backend
  - Recommended: [Formspree](https://formspree.io) (free, no backend needed)
  - Or: [EmailJS](https://emailjs.com)

### Colors (`src/App.css`)
- All colors are CSS variables at the top of `App.css` — easy to change globally

---

## CSS Variables (App.css)

| Variable | Value       | Use                  |
|----------|-------------|----------------------|
| `--gd`   | `#1a5c3a`   | Deep green (primary) |
| `--gm`   | `#2d8a57`   | Mid green            |
| `--gl`   | `#a8d5b5`   | Light green          |
| `--gp`   | `#d6eedf`   | Pale green           |
| `--bd`   | `#1a4a7a`   | Deep blue            |
| `--bm`   | `#3a7bc8`   | Mid blue             |
| `--bl`   | `#a8c8e8`   | Light blue           |
| `--bp`   | `#d6e8f5`   | Pale blue            |
