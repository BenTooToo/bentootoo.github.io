(() => {
const labels = {
  "zh": {
    "nav.home": "首页",
    "nav.projects": "项目",
    "nav.blog": "思索之屋",
    "nav.contact": "联系我",
    "more.menuLabel": "更多",
    "more.donate": "捐助我",
    "more.devlog": "开发日志",
    "donate.onlyfansRegion": "（全球）",
    "donate.afdianRegion": "（中国）"
  },
  "en": {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.blog": "House of Reflection",
    "nav.contact": "Contact",
    "more.menuLabel": "More",
    "more.donate": "Support me",
    "more.devlog": "Development log",
    "donate.onlyfansRegion": "(Global)",
    "donate.afdianRegion": "(China)"
  },
  "fr": {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.blog": "Maison de réflexion",
    "nav.contact": "Contact",
    "more.menuLabel": "Plus",
    "more.donate": "Me soutenir",
    "more.devlog": "Journal de dev",
    "donate.onlyfansRegion": "(Monde)",
    "donate.afdianRegion": "(Chine)"
  }
};
const header = document.querySelector(".site-header");
if (!header) return;
function updateNavigation() {
 const htmlLang=document.documentElement.lang, lang=htmlLang.startsWith("en")?"en":htmlLang.startsWith("fr")?"fr":"zh",text=labels[lang];
 header.querySelectorAll("[data-site-nav-text]").forEach(e=>{if(text[e.dataset.siteNavText]) e.textContent=text[e.dataset.siteNavText];});
 header.querySelectorAll("[data-site-nav-aria]").forEach(e=>{if(text[e.dataset.siteNavAria]) e.setAttribute("aria-label",text[e.dataset.siteNavAria]);});
 header.querySelectorAll(".lang-button").forEach(b=>{const active=b.dataset.lang===lang;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",String(active));});
 const back=document.querySelector("[data-report-back]");if(back)back.textContent={zh:"← 返回地球",en:"← Back to the globe",fr:"← Retour au globe"}[lang];
}
header.querySelectorAll(".lang-button").forEach(button=>{button.addEventListener("click",()=>{const lang=button.dataset.lang;document.documentElement.lang={zh:"zh-CN",en:"en",fr:"fr"}[lang];try{localStorage.setItem("bentootoo-language",lang);}catch{}updateNavigation();});});
new MutationObserver(updateNavigation).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
try{const lang=localStorage.getItem("bentootoo-language");if(labels[lang])document.documentElement.lang={zh:"zh-CN",en:"en",fr:"fr"}[lang];}catch{}
updateNavigation();
const moreMenu = document.querySelector(".more-menu");
const moreToggle = document.querySelector(".more-toggle");
const donateMenu = document.querySelector(".donate-menu");
const donateTrigger = document.querySelector(".donate-trigger");

if (moreMenu && moreToggle) {
  const setDonateSubmenuOpen = (isOpen) => {
    if (!donateMenu || !donateTrigger) {
      return;
    }

    donateMenu.classList.toggle("is-submenu-open", isOpen);
    donateTrigger.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      donateTrigger.blur();
    }
  };

  const setMoreMenuOpen = (isOpen) => {
    moreMenu.classList.toggle("is-open", isOpen);
    moreToggle.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      setDonateSubmenuOpen(false);
    }
  };

  moreToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setMoreMenuOpen(!moreMenu.classList.contains("is-open"));
  });

  moreMenu.querySelectorAll(".more-dropdown > a, .donate-submenu a").forEach((control) => {
    control.addEventListener("click", () => setMoreMenuOpen(false));
  });

  if (donateMenu && donateTrigger) {
    donateTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      setDonateSubmenuOpen(!donateMenu.classList.contains("is-submenu-open"));
    });
  }

  document.addEventListener("click", (event) => {
    if (!moreMenu.contains(event.target)) {
      setMoreMenuOpen(false);
    } else if (donateMenu && !donateMenu.contains(event.target)) {
      setDonateSubmenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMoreMenuOpen(false);
      setDonateSubmenuOpen(false);
    }
  });
}


})();