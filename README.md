# 🕷️ Spider-Gwen Birthday Site

An interactive, comic-style birthday surprise themed around Spider-Gwen / Earth-65.

## 🚀 Run it

Just open `index.html` in a browser. No build step. No frameworks.

For best results (audio autoplay, lazy loading), serve via a local server:
```bash
# Python 3
python -m http.server 8000
# or VS Code Live Server extension
```

## ✏️ Personalize it

All customization happens in **`script.js`** at the top, in the `CONFIG` object:

| Setting | What it does |
|---|---|
| `recipientName` | The big name on the hero (replaces "GWEN-FAN!") |
| `birthdayMessage` | The heartfelt typed-out message |
| `photos` | Array of `{src, caption}` for the gallery |
| `randomPopups` | Floating kind-message bubbles |
| `compliments` | Random surprises from the "SURPRISE ME" button |

## 📁 Drop your assets

```
assets/
├── images/      ← put photo1.jpg ... photo8.jpg here
└── audio/       ← put background.mp3 here
```

If an image is missing, the gallery card auto-falls-back to a comic-panel placeholder so the layout never breaks.

## ✨ Features

- Animated comic hero with glitch typography
- Background music (toggle in top-right)
- Comic-panel photo grid + lightbox with arrow-key navigation
- Typed-out heartfelt message (auto-plays when scrolled into view)
- "Surprise me" compliment generator
- Confetti finale (canvas)
- Random kind-message popups during browsing
- Hidden 🕷️ easter egg in the hero (look bottom-right)
- Custom Spider-Gwen cursor
- Universe-switch button (top-right ↻) — Gwen ↔ Miles palette
- Spider-Verse glitch transitions between sections
- Click sound effects (Web Audio — no asset needed)
- Mobile-responsive

## 🎵 Audio note

Browsers block autoplay until the user interacts. The site starts muted; clicking **Start** or the music toggle unmutes it. If you don't have a `background.mp3`, the site still works — only the music toggle becomes a no-op.

---
Made with ❤️ across the Spider-Verse
