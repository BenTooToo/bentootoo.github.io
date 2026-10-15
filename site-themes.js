(() => {
  const base = new URL(".", document.currentScript.src);
  const themes = ["refined", "yearbook", "pancake", "be-present"];
  const key = "bentootoo-home-theme";
  const labels = {
    zh: ["网站主题", "新版默认", "同窗录主页", "煎饼控制", "Be Present", "煎饼照片", "本地时间"],
    en: ["Website theme", "New Default", "Classmates Homepage", "Pancake Control", "Be Present", "Pancake photograph", "Local time"],
    fr: ["Thème du site", "Nouveau par défaut", "Accueil des camarades", "Contrôle des pancakes", "Be Present", "Photo de pancakes", "Heure locale"]
  };
  const readTheme = () => { try { return localStorage.getItem(key); } catch { return null; } };
  document.body.classList.add("site-themed");
  let switcher = document.querySelector(".home-theme-switch");
  if (!switcher) {
    switcher = document.createElement("div");
    switcher.className = "home-theme-switch";
    switcher.setAttribute("role", "group");
    themes.forEach(theme => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "home-theme-swatch";
      button.dataset.homeThemeValue = theme;
      const color = document.createElement("span");
      color.className = `home-theme-color home-theme-color--${theme}`;
      color.setAttribute("aria-hidden", "true");
      button.append(color);
      switcher.append(button);
    });
    const language = document.querySelector(".site-header .language-switch");
    if (language) {
      let controls = language.closest(".header-controls");
      if (!controls) {
        controls = document.createElement("div");
        controls.className = "header-controls";
        language.before(controls);
        controls.append(language);
      }
      controls.append(switcher);
    } else if (document.querySelector(".globe-language-switch")) {
      const language = document.querySelector(".globe-language-switch");
      const controls = document.createElement("div");
      controls.className = "globe-theme-controls";
      language.before(controls);
      controls.append(language, switcher);
    } else {
      document.querySelector(".report-nav").append(switcher);
    }
  }
  themes.forEach(theme => {
    if (switcher.querySelector(`[data-home-theme-value="${theme}"]`)) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "home-theme-swatch";
    button.dataset.homeThemeValue = theme;
    button.innerHTML = `<span class="home-theme-color home-theme-color--${theme}" aria-hidden="true"></span>`;
    switcher.append(button);
  });
  const portrait = document.querySelector(".home-page .avatar-front img");
  const originalPortrait = portrait && { src: portrait.getAttribute("src"), alt: portrait.alt };
  let clock;
  let clockTimer;
  if (portrait) {
    clock = document.createElement("div");
    clock.className = "present-clock";
    clock.hidden = true;
    let ticks = "";
    let numerals = "";
    for (let i = 0; i < 60; i++) ticks += `<line x1="120" y1="${i % 5 === 0 ? 12 : 13}" x2="120" y2="${i % 5 === 0 ? 22 : 17}" transform="rotate(${i * 6} 120 120)" stroke="${i % 5 === 0 ? '#929292' : '#363636'}" stroke-width="${i % 5 === 0 ? 1.6 : 1}"/>`;
    for (let hour = 1; hour <= 12; hour++) {
      const angle = hour * Math.PI / 6;
      numerals += `<text x="${120 + 136 * Math.sin(angle)}" y="${120 - 136 * Math.cos(angle)}">${hour}</text>`;
    }
    clock.innerHTML = `<svg viewBox="-28 -28 296 296" aria-hidden="true"><circle cx="120" cy="120" r="118" fill="none" stroke="#202020" stroke-width=".7"/>${ticks}<g class="present-numerals">${numerals}</g><line class="present-hour" x1="120" y1="120" x2="120" y2="65"/><line class="present-minute" x1="120" y1="120" x2="120" y2="35"/><line class="present-second" x1="120" y1="137" x2="120" y2="30"/><circle cx="120" cy="120" r="3" fill="#eee"/></svg><span class="present-clock-label"></span><time class="present-digital"></time><span class="present-date"></span>`;
    portrait.after(clock);
  }
  function tickClock() {
    if (!clock || clock.hidden) return;
    const now = new Date();
    const second = now.getSeconds() + now.getMilliseconds() / 1000;
    const minute = now.getMinutes() + second / 60;
    const hour = now.getHours() % 12 + minute / 60;
    [["hour", hour * 30], ["minute", minute * 6], ["second", second * 6]].forEach(([hand, angle]) => {
      clock.querySelector(`.present-${hand}`).setAttribute("transform", `rotate(${angle} 120 120)`);
    });
    const pad = value => String(value).padStart(2, "0");
    const time = clock.querySelector("time");
    time.innerHTML = `${pad(now.getHours())}:${pad(now.getMinutes())}<span>:${pad(now.getSeconds())}</span>`;
    time.dateTime = now.toISOString();
    const locale = document.documentElement.lang;
    clock.querySelector(".present-date").textContent = new Intl.DateTimeFormat(locale, { month: "long", day: "numeric", weekday: "long" }).format(now);
  }
  function updateLabels() {
    const lang = document.documentElement.lang;
    const text = labels[lang.startsWith("en") ? "en" : lang.startsWith("fr") ? "fr" : "zh"];
    switcher.setAttribute("aria-label", text[0]);
    switcher.querySelectorAll("button").forEach(button => {
      const label = text[themes.indexOf(button.dataset.homeThemeValue) + 1];
      button.title = label;
      button.setAttribute("aria-label", label);
    });
    if (clock) {
      clock.querySelector(".present-clock-label").textContent = text[6];
      clock.hidden = document.body.dataset.homeTheme !== "be-present";
      clearInterval(clockTimer);
      if (!clock.hidden) { tickClock(); clockTimer = setInterval(tickClock, 250); }
    }
    if (portrait) {
      const pancake = document.body.dataset.homeTheme === "pancake";
      portrait.src = pancake ? new URL("assets/theme-pancake-hero.webp", base).href : originalPortrait.src;
      portrait.alt = pancake ? text[5] : originalPortrait.alt;
    }
  }
  function applyTheme(value, save = false) {
    const theme = themes.includes(value) ? value : "refined";
    document.body.dataset.homeTheme = theme;
    switcher.querySelectorAll("button").forEach(button => {
      const active = button.dataset.homeThemeValue === theme;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const color = document.querySelector('meta[name="theme-color"]');
    if (color) color.content = { refined: "#030510", yearbook: "#efe5be", pancake: "#f5df8e", "be-present": "#000000" }[theme];
    updateLabels();
    if (save) { try { localStorage.setItem(key, theme); } catch { /* Still usable without storage. */ } }
  }
  switcher.addEventListener("click", event => {
    const button = event.target.closest("[data-home-theme-value]");
    if (button) applyTheme(button.dataset.homeThemeValue, true);
  });
  new MutationObserver(updateLabels).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  window.addEventListener("storage", event => { if (event.key === key) applyTheme(event.newValue); });
  applyTheme(readTheme());
})();
