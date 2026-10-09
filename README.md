# Which Star Are You?

An interactive personality quiz, built with vanilla JavaScript, that matches the user to one of six stars based on how they answer six situational questions.

**Live site:** https://ank-8818.github.io/which-star-are-you/

---

## About this project

This was my second portfolio project, built right after Pulp & Peel, specifically to move past Bootstrap and practice JavaScript fundamentals from scratch: state, DOM manipulation, and scoring logic, with no framework underneath.

Each answer adds points toward one or two of six stars (the Sun, Polaris, Proxima Centauri, Betelgeuse, the Crab Pulsar, and Sirius). After six questions, the highest-scoring star wins, with a fixed tie-break order for close results. The result screen pairs each star with a short, metaphorical read on what it says about you, alongside a toggleable scientific fact about the real star.

## Features

- **Six situational questions**, four options each, with points distributed across stars for a fair, non-obvious mapping
- **Score tracking with tie-break logic**: ties are resolved by a fixed priority order, not left to chance
- **Single-selection option cards**, each with its own accent color on selection
- **A unique sound for each of the four answer positions**, played on selection
- **Animated progress bar** that fills as the quiz advances
- **Result screen** with a star-specific illustration, a written metaphor/takeaway, and a "want the science?" toggle revealing a real astronomical fact
- **Restart flow** that fully resets state (scores, progress, selections) for a clean replay
- **A custom star-shaped cursor** on desktop, with a hover/click glow effect, hidden automatically on touch devices
- Accessibility touches throughout: proper ARIA attributes on the toggle and progress elements, keyboard-operable controls
- Fully responsive layout

## Tech stack

Plain HTML, CSS, and JavaScript. No frameworks, no dependencies, the scoring, DOM rendering, and animation are all written from scratch.

## Running it locally

1. Clone the repo
2. Open `index.html` in a browser, or serve the folder with any static server

No build step, no install step.

## Project structure

```
├── index.html
├── index.js      # questions, scoring, rendering and all interactivity
├── styles.css
├── images/        # star illustrations and the cursor SVG
└── sounds/        # one chime per answer option
```

## Notes

This is a portfolio piece built to demonstrate core JavaScript skills (state, scoring, DOM updates, animation) before moving on to more complex, client-style projects like Bloom & Co.