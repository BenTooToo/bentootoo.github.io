(() => {
  const base = new URL(".", document.currentScript.src);
  const themes = ["refined", "yearbook", "pancake"];
  const key = "bentootoo-home-theme";
  const labels = {
    zh: ["网站主题", "新版默认", "同窗录主页", "煎饼控制", "煎饼照片"],
    en: ["Website theme", "New Default", "Classmates Homepage", "Pancake Control", "Pancake photograph"],
    fr: ["Thème du site", "Nouveau par défaut", "Accueil des camarades", "Contrôle des pancakes", "Photo de pancakes"]
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
  const portrait = document.querySelector(".home-page .avatar-front img");
  const originalPortrait = portrait && { src: portrait.getAttribute("src"), alt: portrait.alt };
  function updateLabels() {
    const lang = document.documentElement.lang;
    const text = labels[lang.startsWith("en") ? "en" : lang.startsWith("fr") ? "fr" : "zh"];
    switcher.setAttribute("aria-label", text[0]);
    switcher.querySelectorAll("button").forEach(button => {
      const label = text[themes.indexOf(button.dataset.homeThemeValue) + 1];
      button.title = label;
      button.setAttribute("aria-label", label);
    });
    if (portrait) {
      const pancake = document.body.dataset.homeTheme === "pancake";
      portrait.src = pancake ? new URL("assets/theme-pancake-hero.webp", base).href : originalPortrait.src;
      portrait.alt = pancake ? text[4] : originalPortrait.alt;
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
    if (color) color.content = { refined: "#030510", yearbook: "#efe5be", pancake: "#f5df8e" }[theme];
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
