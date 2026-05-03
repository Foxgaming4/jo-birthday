/* =============================================
   SPIDER-GWEN BIRTHDAY for JO (aka JOOOMUUU 🐾)
   ============================================= */

// --- CONFIG: edit these to personalize ---------------------------------
const CONFIG = {
  recipientName: "JO!",
  nickname: "JOOOMUUU",

  audio: {
    click:      "assets/audio/Fahh by JO.mp3",     // every button click
    background: "assets/audio/ElevenLabs_Bayside_Breeze.mp3",  // looping bg music — drop your bday song here
    special:    "assets/audio/thendi by JO.mp3",   // finale moment
    puppy:      "assets/audio/Puppy by JO.mp3",    // easter egg find
  },

  // Heartfelt + funny birthday letter to Jo (the funny idiot we love)
  birthdayMessage:
    "Hey Jooomuuu... 🐾✨\n\n" +
    "Here's the thing about you: you're 50% genius, 50% absolute disaster, " +
    "and 100% the reason everyone's day is better.\n\n" +
    "You don't TRY to be funny. You just exist, ask things like " +
    "'wait... is sand just tiny rocks?' and somehow the whole room is on the floor laughing.\n\n" +
    "Your questions are stupid. Your jokes are stupider. Your timing is divine. " +
    "We love every single second of it.\n\n" +
    "You're the kind of idiot the world desperately needs more of — " +
    "loud, chaotic, beautifully unserious, accidentally profound. " +
    "The vibes? immaculate. The brain cells? questionable. The energy? exactly what we needed.\n\n" +
    "Thanks for being you. Thanks for the laughs, the chaos, the absolute brain-cell-deficient moments, " +
    "and for being the human equivalent of a really good plot twist with no plot.\n\n" +
    "Happy birthday, Jo. The world is canonically funnier with you in it. 💖\n\n" +
    "— with all my love (and another stupid question saved for later)",

  // Photo gallery — using actual files from assets/photos/
  photos: [
    { src: "assets/photos/photo 1.jpg",         caption: "currently asking 'is water wet?' 💭" },
    { src: "assets/photos/photo 2.jpg",         caption: "the queen of unhinged questions 👑" },
    { src: "assets/photos/photo 3.jpg",         caption: "main character of a sitcom we're all extras in 🎬" },
    { src: "assets/photos/photo 4.png",         caption: "joke incoming. brace yourself. 💥" },
    { src: "assets/photos/photo 5.png",         caption: "she said something dumb. we all laughed. classic. 😂" },
    { src: "assets/photos/Minecraft-pic1.png",  caption: "Minecraft arc: full-time architect, part-time chaos 🟫" },
    { src: "assets/photos/Minecraft-pic2.png",  caption: "building a portal to nowhere specifically 🌀" },
    { src: "assets/photos/Minecraft-pic3.png",  caption: "her biggest threat: gravity (allegedly) 🪦" },
  ],

  // Random encouraging popups
  randomPopups: [
    "Jooomuuu detected being stupid in a cute way 🐾",
    "ALERT: someone just laughed because of you 🚨",
    "stupid question alert! ...love that for us 💭",
    "Jo-meter: 100% funny / 0% serious / 1000% loved 📊",
    "BREAKING: another bad joke incoming 🎤",
    "scientifically proven: rooms with Jo in them = louder",
    "you have made the world a better place by being a menace 🌍",
    "spider-sense says: she's about to ask something dumb",
    "Jooomuuu confirmed online 🟢",
    "your dumb questions deserve their own podcast",
    "vibes: immaculate. brain cells: questionable. perfect.",
    "if comedy was a power level, you'd be over 9000",
  ],

  // Surprise compliments — Jo flavor
  compliments: [
    "your dumb questions deserve their own podcast",
    "you ask the stupidest things and somehow they're profound 🤔",
    "scientifically proven to make any room 47% funnier",
    "your laugh is in everyone's top 3 sounds",
    "an idiot? maybe. a legend? definitely. 🏆",
    "you make 'just hanging out' the funniest 4 hours of someone's week",
    "the world needs more Jos. terrifyingly few in stock.",
    "if comedy was a superpower you'd be in the Avengers",
    "how do you make everyone happy by being you? science is baffled.",
    "your stupid questions started philosophical debates we're still recovering from",
    "you're 50% chaos, 50% genius, 100% iconic",
    "Jooomuuu = top tier human. this is fact, not opinion.",
    "your jokes are bad. we love them. don't change.",
    "you're the upgrade everyone needs and the patch notes are GORGEOUS",
    "Spider-Gwen wishes she had your comedic timing",
    "objectively, 'Jooomuuu' is the best nickname any human has ever had",
    "even when you say nothing, you're somehow already funny",
    "you make stupid look genius and we'd like the recipe",
    "if vibes were currency you'd own a planet by now",
    "your brain has zero filter and we ADORE that about it",
  ],

  // Comic SFX bursts
  burstWords: [
    "POW!", "BAM!", "THWIP!", "FAHH!", "JOOOMUUU!", "KAPOW!",
    "WHAM!", "ZAP!", "HAHAHA!", "WHAT?!", "IDIOT!", "GENIUS!",
    "BLOOP!", "WOOF!", "🐾!", "BOOM!",
  ],
};
// -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  applyConfig();
  splitTitleLetters();
  initCursor();
  initAudio();
  initControls();
  initStartButton();
  initEasterEgg();
  initGallery();
  initLightbox();
  initIntersectionAnimations();
  initSurprise();
  initCake();
  initGame();
  initReplayButton();
  initRandomPopups();
  initGlitchTitles();
  initRandomBursts();
});

// =======================================================
//  CONFIG APPLICATION + LETTER SPLIT
// =======================================================
function applyConfig() {
  const heroName = document.querySelector(".title-line.line-3");
  if (heroName && CONFIG.recipientName && document.getElementById("hero")?.contains(heroName)) {
    heroName.textContent = CONFIG.recipientName;
    heroName.setAttribute("data-text", CONFIG.recipientName);
  }
}

function splitTitleLetters() {
  document.querySelectorAll(".title-line.split").forEach((el) => {
    const text = el.textContent;
    el.innerHTML = "";
    let i = 0;
    text.split("").forEach((ch) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = ch === " " ? " " : ch;
      span.style.setProperty("--i", i++);
      el.appendChild(span);
    });
  });
}

// =======================================================
//  CUSTOM CURSOR
// =======================================================
function initCursor() {
  const web = document.getElementById("cursorWeb");
  const dot = document.getElementById("cursorDot");
  if (!web || !dot) return;

  let targetX = 0, targetY = 0, webX = 0, webY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.left = targetX + "px";
    dot.style.top = targetY + "px";
  });

  function animate() {
    webX += (targetX - webX) * 0.18;
    webY += (targetY - webY) * 0.18;
    web.style.left = webX + "px";
    web.style.top = webY + "px";
    requestAnimationFrame(animate);
  }
  animate();

  const hoverables = "a, button, .comic-card, .easter-spider";
  document.querySelectorAll(hoverables).forEach((el) => {
    el.addEventListener("mouseenter", () => web.classList.add("hover"));
    el.addEventListener("mouseleave", () => web.classList.remove("hover"));
  });
}

// =======================================================
//  AUDIO — pool of Fahh.mp3 instances for clicks
// =======================================================
const clickPool = [];
let clickIdx = 0;
const CLICK_POOL_SIZE = 4;
const CLICK_VOLUME = 0.55;

function initAudio() {
  for (let i = 0; i < CLICK_POOL_SIZE; i++) {
    const a = new Audio(CONFIG.audio.click);
    a.volume = CLICK_VOLUME;
    a.preload = "auto";
    clickPool.push(a);
  }

  const bg = document.getElementById("bgMusic");
  if (bg) bg.volume = 0.32;

  const sp = document.getElementById("specialAudio");
  if (sp) sp.volume = 0.7;

  const pup = document.getElementById("puppyAudio");
  if (pup) pup.volume = 0.7;
}

function playClickSound() {
  if (!clickPool.length) return;
  try {
    const a = clickPool[clickIdx];
    clickIdx = (clickIdx + 1) % clickPool.length;
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch (e) {}
}

function playSpecialSound() {
  const sp = document.getElementById("specialAudio");
  if (!sp) return;
  try { sp.currentTime = 0; sp.play().catch(() => {}); } catch (e) {}
}

function playPuppySound() {
  const pup = document.getElementById("puppyAudio");
  if (!pup) return;
  try { pup.currentTime = 0; pup.play().catch(() => {}); } catch (e) {}
}

// =======================================================
//  CONTROLS
// =======================================================
function initControls() {
  const music = document.getElementById("bgMusic");
  const muteBtn = document.getElementById("muteBtn");
  const universeBtn = document.getElementById("universeBtn");

  let muted = true;
  if (music) music.muted = true;
  muteBtn?.classList.add("muted");

  muteBtn?.addEventListener("click", () => {
    muted = !muted;
    if (music) {
      music.muted = muted;
      if (!muted) music.play().catch(() => {});
    }
    muteBtn.classList.toggle("muted", muted);
  });

  universeBtn?.addEventListener("click", () => {
    triggerGlitch(() => {
      document.body.classList.toggle("universe-gwen");
      document.body.classList.toggle("universe-miles");
      spawnBurst("UNIVERSE SWAP!");
    });
  });

  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound();
      if (Math.random() < 0.35) spawnBurst();
    });
  });
}

// =======================================================
//  START BUTTON
// =======================================================
function initStartButton() {
  const startBtn = document.getElementById("startBtn");
  startBtn?.addEventListener("click", () => {
    spawnBurst("LET'S GO!");
    triggerGlitch(() => {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
      const music = document.getElementById("bgMusic");
      const muteBtn = document.getElementById("muteBtn");
      if (music && music.muted) {
        music.muted = false;
        music.play().catch(() => {});
        muteBtn?.classList.remove("muted");
      }
    });
  });
}

// =======================================================
//  GLITCH TRANSITION
// =======================================================
function triggerGlitch(callbackMid) {
  const overlay = document.getElementById("glitchOverlay");
  if (!overlay) { callbackMid?.(); return; }
  overlay.classList.add("active");
  setTimeout(() => callbackMid?.(), 250);
  setTimeout(() => overlay.classList.remove("active"), 500);
}

// =======================================================
//  EASTER EGG — hidden spider triggers Puppy + spider rain
// =======================================================
function initEasterEgg() {
  const spider = document.getElementById("easterSpider");
  if (!spider) return;

  spider.addEventListener("click", () => {
    spider.classList.add("found");
    showPopup("🕷️ EASTER EGG FOUND! welcome to the 1% club, Jooomuuu");
    rainSpiders();
    spawnBurst("JOOOMUUU!");
    setTimeout(() => spawnBurst("🐾!"), 200);
    setTimeout(() => spawnBurst("WOOF!"), 400);
    playPuppySound();
  });
}

function rainSpiders() {
  const symbols = ["🕷️", "🕸️", "💖", "✨", "🐾", "🎂"];
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    s.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: -40px;
      font-size: ${20 + Math.random() * 30}px;
      pointer-events: none;
      z-index: 9999;
      transition: transform ${2 + Math.random() * 2}s linear, opacity .5s;
    `;
    document.body.appendChild(s);
    requestAnimationFrame(() => {
      s.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`;
    });
    setTimeout(() => s.remove(), 4500);
  }
}

// =======================================================
//  PHOTO GALLERY
// =======================================================
function initGallery() {
  const grid = document.getElementById("comicGrid");
  if (!grid) return;

  CONFIG.photos.forEach((photo, idx) => {
    const card = document.createElement("div");
    card.className = "comic-card";
    card.dataset.index = idx;
    card.style.setProperty("--i", idx);

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption || `Photo ${idx + 1}`;
    img.loading = "lazy";

    img.addEventListener("error", () => {
      card.classList.add("placeholder");
      card.innerHTML = `<span>PANEL ${idx + 1}<br/>add image</span>`;
    });

    const cap = document.createElement("div");
    cap.className = "card-caption";
    cap.textContent = photo.caption || "";

    card.appendChild(img);
    if (photo.caption) card.appendChild(cap);

    card.addEventListener("click", () => {
      if (!card.classList.contains("placeholder")) {
        openLightbox(idx);
      } else {
        showPopup("📁 image missing — drop it in assets/photos/");
      }
    });
    grid.appendChild(card);
  });
}

// =======================================================
//  LIGHTBOX
// =======================================================
let currentLightboxIdx = 0;
function initLightbox() {
  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lbPrev")?.addEventListener("click", () => navLightbox(-1));
  document.getElementById("lbNext")?.addEventListener("click", () => navLightbox(1));
  document.getElementById("lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("lightbox")?.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });
}
function openLightbox(idx) {
  currentLightboxIdx = idx;
  updateLightbox();
  document.getElementById("lightbox")?.classList.remove("hidden");
}
function closeLightbox() {
  document.getElementById("lightbox")?.classList.add("hidden");
}
function navLightbox(dir) {
  currentLightboxIdx = (currentLightboxIdx + dir + CONFIG.photos.length) % CONFIG.photos.length;
  updateLightbox();
}
function updateLightbox() {
  const photo = CONFIG.photos[currentLightboxIdx];
  if (!photo) return;
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  if (img) { img.src = photo.src; img.alt = photo.caption || ""; }
  if (cap) cap.textContent = photo.caption || "";
}

// =======================================================
//  SECTION ANIMATIONS + TYPED MESSAGE + CONFETTI TRIGGER
// =======================================================
function initIntersectionAnimations() {
  const sections = document.querySelectorAll(".section");
  let messageStarted = false;
  let confettiStarted = false;

  // Tag stat rows with --si for stagger
  document.querySelectorAll("#dossier .stat-row").forEach((row, i) => {
    row.style.setProperty("--si", i);
  });

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");

          if (entry.target.id === "message" && !messageStarted) {
            messageStarted = true;
            startTyping();
          }
          if (entry.target.id === "finale" && !confettiStarted) {
            confettiStarted = true;
            startConfetti();
            playSpecialSound();
            spawnBurst("HAPPY!");
            setTimeout(() => spawnBurst("BIRTHDAY!"), 250);
            setTimeout(() => spawnBurst("JOOOMUUU!"), 500);
            setTimeout(() => spawnBurst("🐾!"), 750);
          }
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach((s) => obs.observe(s));
}

function startTyping() {
  const target = document.getElementById("typedMessage");
  const cursor = document.getElementById("typingCursor");
  if (!target) return;
  const msg = CONFIG.birthdayMessage;
  let i = 0;

  function tick() {
    if (i < msg.length) {
      target.textContent = msg.substring(0, i + 1);
      i++;
      const delay = msg[i - 1] === "\n" ? 200 : 22 + Math.random() * 30;
      setTimeout(tick, delay);
    } else if (cursor) {
      cursor.style.display = "none";
    }
  }
  tick();
}

// =======================================================
//  SURPRISE BUTTON
// =======================================================
let surpriseCount = 0;
function initSurprise() {
  const btn = document.getElementById("surpriseBtn");
  const bubble = document.getElementById("complimentBubble");
  const counterNum = document.getElementById("counterNum");
  if (!btn || !bubble) return;

  let lastIdx = -1;
  btn.addEventListener("click", () => {
    let idx;
    do { idx = Math.floor(Math.random() * CONFIG.compliments.length); }
    while (idx === lastIdx && CONFIG.compliments.length > 1);
    lastIdx = idx;

    bubble.textContent = CONFIG.compliments[idx];
    bubble.classList.remove("hidden");
    bubble.style.animation = "none";
    void bubble.offsetWidth;
    bubble.style.animation = "";

    surpriseCount++;
    if (counterNum) counterNum.textContent = surpriseCount;

    btn.classList.add("shake");
    setTimeout(() => btn.classList.remove("shake"), 500);

    if (surpriseCount === 5)  showPopup("⚡ 5 compliments — you really are insatiable");
    if (surpriseCount === 10) { showPopup("🏆 10 compliments — Jooomuuu Achievement Unlocked!"); spawnBurst("LEGEND!"); }
    if (surpriseCount === 25) { showPopup("🐾 25?! ok we get it, you're amazing"); rainSpiders(); }
  });
}

// =======================================================
//  REPLAY BUTTON
// =======================================================
function initReplayButton() {
  document.getElementById("replayBtn")?.addEventListener("click", () => {
    triggerGlitch(() => {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// =======================================================
//  RANDOM POPUPS
// =======================================================
function initRandomPopups() {
  let firstShown = false;
  setTimeout(() => {
    if (!firstShown) {
      firstShown = true;
      showRandomPopup();
    }
  }, 14000);

  function loop() {
    const wait = 28000 + Math.random() * 22000;
    setTimeout(() => {
      showRandomPopup();
      loop();
    }, wait);
  }
  loop();
}

function showRandomPopup() {
  const arr = CONFIG.randomPopups;
  if (!arr || !arr.length) return;
  const text = arr[Math.floor(Math.random() * arr.length)];
  showPopup(text);
}

let popupTimer = null;
function showPopup(text) {
  const toast = document.getElementById("popupToast");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.remove("hidden");
  void toast.offsetWidth;
  toast.classList.add("show");

  clearTimeout(popupTimer);
  popupTimer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 400);
  }, 3500);
}

// =======================================================
//  TITLE GLITCH
// =======================================================
function initGlitchTitles() {
  const titles = document.querySelectorAll("[data-text]");
  function glitchOne() {
    if (!titles.length) return;
    const t = titles[Math.floor(Math.random() * titles.length)];
    t.classList.add("glitch-on");
    setTimeout(() => t.classList.remove("glitch-on"), 600 + Math.random() * 400);
  }
  setInterval(glitchOne, 3500);
}

// =======================================================
//  COMIC SFX BURSTS
// =======================================================
function spawnBurst(forcedWord = null) {
  const layer = document.getElementById("burstLayer");
  if (!layer) return;
  const word = forcedWord || CONFIG.burstWords[Math.floor(Math.random() * CONFIG.burstWords.length)];

  const el = document.createElement("div");
  el.className = "comic-burst";
  const variant = Math.random();
  if (variant < 0.33) el.classList.add("pink");
  else if (variant < 0.66) el.classList.add("blue");

  el.textContent = word;

  const x = 10 + Math.random() * 75;
  const y = 15 + Math.random() * 60;
  el.style.left = x + "%";
  el.style.top = y + "%";

  layer.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

function initRandomBursts() {
  function loop() {
    const wait = 18000 + Math.random() * 12000;
    setTimeout(() => {
      if (window.scrollY > window.innerHeight * 0.5) {
        spawnBurst();
      }
      loop();
    }, wait);
  }
  loop();
}

// =======================================================
//  CONFETTI
// =======================================================
function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resize();
  window.addEventListener("resize", resize);

  const colors = ["#ff5fa2", "#4ad9ff", "#a86cff", "#fff36a", "#fdf9ff"];
  const pieces = [];
  for (let i = 0; i < 220; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      w: 6 + Math.random() * 8,
      h: 10 + Math.random() * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: -2 + Math.random() * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      vr: -0.2 + Math.random() * 0.4,
    });
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

// =======================================================
//  COUNTDOWN TIMER — locks site until May 4, 2026 midnight IST
// =======================================================
function initCountdown() {
  const overlay = document.getElementById('countdownOverlay');
  if (!overlay) return;

  // May 4, 2026 at 00:00:00 IST (UTC+5:30)
  const UNLOCK_DATE = new Date('2026-05-04T00:00:00+05:30');
  let unlocked = false;
  let cdInterval = null;

  // Spawn floating particles
  const particleBox = document.getElementById('cdParticles');
  if (particleBox) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'cd-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = '-10px';
      p.style.animationDelay = (Math.random() * 6) + 's';
      p.style.animationDuration = (4 + Math.random() * 4) + 's';
      const colors = ['#ff5fa2', '#4ad9ff', '#a86cff', '#fff36a'];
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.width = (2 + Math.random() * 3) + 'px';
      p.style.height = p.style.width;
      particleBox.appendChild(p);
    }
  }

  // Shortcut key: Ctrl+Shift+U
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      unlockSite();
    }
  });

  function unlockSite() {
    if (unlocked) return;
    unlocked = true;
    clearInterval(cdInterval);
    overlay.classList.add('unlocked');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 900);
  }

  function updateTimer() {
    const now = new Date();
    const diff = UNLOCK_DATE - now;

    if (diff <= 0) {
      unlockSite();
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cdDays');
    const hEl = document.getElementById('cdHours');
    const mEl = document.getElementById('cdMins');
    const sEl = document.getElementById('cdSecs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }

  // Check if already past unlock time
  if (new Date() >= UNLOCK_DATE) {
    overlay.style.display = 'none';
    unlocked = true;
    return;
  }

  updateTimer();
  cdInterval = setInterval(updateTimer, 1000);
}

// =======================================================
//  CAKE — 16 interactive candles
// =======================================================
function initCake() {
  const row = document.getElementById('candlesRow');
  const status = document.getElementById('cakeStatus');
  const resetBtn = document.getElementById('cakeReset');
  if (!row) return;

  const TOTAL = 16;
  let blownCount = 0;

  function createCandles() {
    row.innerHTML = '';
    blownCount = 0;
    if (status) status.textContent = `🔥 ${TOTAL} candles glowing — click each one`;
    if (resetBtn) resetBtn.classList.add('hidden');

    for (let i = 0; i < TOTAL; i++) {
      const candle = document.createElement('div');
      candle.className = 'candle';
      candle.style.setProperty('--ci', i);

      const flame = document.createElement('div');
      flame.className = 'flame';
      candle.appendChild(flame);

      candle.addEventListener('click', () => {
        if (candle.classList.contains('blown')) return;
        candle.classList.add('blown');
        playClickSound();
        blownCount++;

        const remaining = TOTAL - blownCount;
        if (status) {
          if (remaining > 0) {
            status.textContent = `🔥 ${remaining} candle${remaining > 1 ? 's' : ''} left — keep going!`;
          } else {
            status.textContent = '🎉 ALL CANDLES BLOWN! Make a wish, Spider-Jo! ✨';
            spawnBurst('WISH!');
            setTimeout(() => spawnBurst('GRANTED!'), 300);
            showPopup('🎂 16 candles for 16 years — Happy Birthday JOOOMUUU! 🐾');
            if (resetBtn) resetBtn.classList.remove('hidden');
            cakeCelebration();
          }
        }
      });

      row.appendChild(candle);
    }
  }

  function cakeCelebration() {
    const emojis = ['🎂', '🎉', '🎈', '✨', '💖', '🐾', '🕷️', '🎊'];
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.cssText = `
          position: fixed;
          left: ${10 + Math.random() * 80}vw;
          top: ${30 + Math.random() * 40}%;
          font-size: ${18 + Math.random() * 22}px;
          pointer-events: none;
          z-index: 100;
          animation: cakeEmoji 1.5s ease forwards;
        `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1800);
      }, i * 70);
    }
  }

  createCandles();

  resetBtn?.addEventListener('click', () => {
    createCandles();
    spawnBurst('RELIT!');
  });
}

// =======================================================
//  MINIGAME — Web-Slinger: catch 16 spiders
// =======================================================
function initGame() {
  const area = document.getElementById('gameArea');
  const overlay = document.getElementById('gameOverlay');
  const startBtn = document.getElementById('gameStartBtn');
  const scoreEl = document.getElementById('gameScore');
  const missesEl = document.getElementById('gameMisses');
  const timeEl = document.getElementById('gameTime');
  if (!area || !startBtn) return;

  const GOAL = 16;
  const MAX_MISSES = 5;
  let score = 0;
  let misses = 0;
  let gameActive = false;
  let timer = 0;
  let timerInterval = null;

  startBtn.addEventListener('click', () => {
    playClickSound();
    startGame();
  });

  function startGame() {
    score = 0;
    misses = 0;
    timer = 0;
    gameActive = true;
    if (scoreEl) scoreEl.textContent = '0';
    if (missesEl) missesEl.textContent = '0';
    if (timeEl) timeEl.textContent = '0';
    if (overlay) overlay.style.display = 'none';

    area.querySelectorAll('.spider-target').forEach(s => s.remove());

    timerInterval = setInterval(() => {
      timer++;
      if (timeEl) timeEl.textContent = timer;
    }, 1000);

    spawnSpider();
  }

  function spawnSpider() {
    if (!gameActive) return;

    const spider = document.createElement('div');
    spider.className = 'spider-target';

    const size = 48;
    const maxX = Math.max(10, area.clientWidth - size - 10);
    const maxY = Math.max(10, area.clientHeight - size - 60);
    spider.style.left = (10 + Math.random() * maxX) + 'px';
    spider.style.top = (10 + Math.random() * maxY) + 'px';
    spider.textContent = '🕷️';

    spider.addEventListener('click', () => {
      if (!gameActive || spider.classList.contains('caught')) return;
      spider.classList.add('caught');
      spider.textContent = '🕸️';
      playClickSound();
      score++;
      if (scoreEl) scoreEl.textContent = score;
      setTimeout(() => spider.remove(), 400);
      if (score >= GOAL) endGame(true);
    });

    area.appendChild(spider);

    // Spider escapes — gets faster as you progress
    const escapeTime = Math.max(1200, 2800 - (score * 80));
    setTimeout(() => {
      if (spider.classList.contains('caught') || !gameActive) return;
      spider.classList.add('escaped');
      misses++;
      if (missesEl) missesEl.textContent = misses;
      setTimeout(() => spider.remove(), 400);
      if (misses >= MAX_MISSES) endGame(false);
    }, escapeTime);

    // Spawn next spider — gets faster
    const nextSpawn = Math.max(500, 1200 - (score * 40));
    setTimeout(() => {
      if (gameActive) spawnSpider();
    }, nextSpawn);
  }

  function endGame(won) {
    gameActive = false;
    clearInterval(timerInterval);
    area.querySelectorAll('.spider-target').forEach(s => s.remove());

    if (overlay) overlay.style.display = '';
    const h3 = overlay?.querySelector('h3');
    const p = overlay?.querySelector('p');

    if (won) {
      if (h3) h3.textContent = '🎉 YOU WIN, SPIDER-JO!';
      if (p) p.textContent = `16 spiders caught in ${timer}s — Happy 16th! 🐾`;
      startBtn.textContent = 'PLAY AGAIN';
      spawnBurst('THWIP!');
      showPopup('🕷️ Web-Slinger Champion! Jo would be proud 🐾');
    } else {
      if (h3) h3.textContent = '💀 GAME OVER';
      if (p) p.textContent = `${score}/16 caught — spiders escaped Earth-65!`;
      startBtn.textContent = 'TRY AGAIN';
      spawnBurst('WHOOPS!');
    }
  }
}
