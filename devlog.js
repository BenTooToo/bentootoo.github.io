const devlogContent = {
  zh: {
    title: "开发日志",
    intro: "这个intro已经被隐藏了",
    closeLabel: "关闭开发日志",
    entries: [
      {
        date: "2026-06-20",
        version: "v0.4",
        done: [
          "为blog增加了三国语言支持。",
          "新增《AI 的反思》文章，并接入哲学 / 技术双大类。"
        ]
      },
      {
        date: "2026-06-10",
        version: "v0.3",
        done: [
          "修改blog界面的弹力绳逻辑。"
        ]
      },
      {
        date: "2026-06-09",
        version: "v0.2",
        done: [
          "为个人博客设计了新的独立页面，并加入博客文章与类别之间的弹力绳交互逻辑。"
        ]
      },
      {
        date: "2026-05-25",
        version: "v0.1",
        done: [
          "完成个人主页初始结构，包括首页、项目、博客、联系和更多按钮。",
          "加入三国语言切换：中文、英语、法语。",
          "加入圆形名片，以及点击后的反转效果。",
          "加入首页背景动态效果。",
          "添加开发日志弹窗。"
        ]
      }
    ]
  },

  en: {
    title: "Development Log",
    intro: "This intro has been hidden",
    closeLabel: "Close development log",
    entries: [
      {
        date: "2026-06-20",
        version: "v0.4",
        done: [
          "Added Chinese, English, and French support to the blog.",
          "Added the AI's Reflection essay and connected it to both Philosophy and Technology."
        ]
      },
      {
        date: "2026-06-10",
        version: "v0.3",
        done: [
          "Refined the spring-rope logic on the blog interface."
        ]
      },
      {
        date: "2026-06-09",
        version: "v0.2",
        done: [
          "Designed a new standalone page for the personal blog and added spring-rope interaction logic between posts and categories."
        ]
      },
      {
        date: "2026-05-25",
        version: "v0.1",
        done: [
          "Built the initial structure of the personal homepage, including Home, Projects, Blog, Contact, and the More button.",
          "Added language switching between Chinese, English, and French.",
          "Added a circular identity card with a flip interaction.",
          "Added a dynamic animated background effect.",
          "Added the development log modal."
        ]
      }
    ]
  },

  fr: {
    title: "Journal de dev",
    intro: "Cette intro a été caché",
    closeLabel: "Fermer le journal de développement",
    entries: [
      {
        date: "2026-06-20",
        version: "v0.4",
        done: [
          "Ajout du support chinois, anglais et français pour le blog.",
          "Ajout du texte Réflexion sur l'IA et rattachement aux deux grandes catégories Philosophie et Technologie."
        ]
      },
      {
        date: "2026-06-10",
        version: "v0.3",
        done: [
          "Ajustement de la logique de corde élastique dans l’interface du blog."
        ]
      },
      {
        date: "2026-06-09",
        version: "v0.2",
        done: [
          "Conception d’une nouvelle page indépendante pour le blog personnel, avec ajout d’une logique de corde élastique entre les articles et les catégories."
        ]
      },
      {
        date: "2026-05-25",
        version: "v0.1",
        done: [
          "Création de la structure initiale de la page personnelle, avec les sections Accueil, Projets, Blog, Contact et le bouton Plus.",
          "Ajout du changement de langue entre le chinois, l’anglais et le français.",
          "Ajout d’une carte d’identité circulaire avec un effet de retournement.",
          "Ajout d’un effet de fond animé dynamique.",
          "Ajout de la fenêtre du journal de développement."
        ]
      }
    ]
  }
};

function getDevlogLanguage() {
  const savedLanguage = localStorage.getItem("bentootoo-language");

  if (savedLanguage && devlogContent[savedLanguage]) {
    return savedLanguage;
  }

  const htmlLanguage = document.documentElement.lang;

  if (htmlLanguage.startsWith("fr")) {
    return "fr";
  }

  if (htmlLanguage.startsWith("en")) {
    return "en";
  }

  return "zh";
}

function createList(items) {
  if (!items || items.length === 0) {
    return "";
  }

  return `
    <ul>
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function createEntry(entry) {
  return `
    <article class="devlog-entry">
      <div class="devlog-entry-header">
        <span class="devlog-date">${entry.date}</span>
        <span class="devlog-version">${entry.version}</span>
      </div>

      ${createList(entry.done)}
    </article>
  `;
}

function renderDevlog() {
  const language = getDevlogLanguage();
  const content = devlogContent[language] || devlogContent.zh;
  const modal = document.querySelector("#devlogModal");

  if (!modal) {
    return;
  }

  modal.innerHTML = `
    <div class="devlog-panel" role="dialog" aria-modal="true" aria-labelledby="devlogTitle">
      <button class="devlog-close" type="button" aria-label="${content.closeLabel}">
        ×
      </button>

      <h2 class="devlog-title" id="devlogTitle">${content.title}</h2>
      <p class="devlog-intro">${content.intro}</p>

      <div class="devlog-list">
        ${content.entries.map((entry) => createEntry(entry)).join("")}
      </div>
    </div>
  `;

  const closeButton = modal.querySelector(".devlog-close");
  closeButton.addEventListener("click", closeDevlog);
}

function openDevlog() {
  const modal = document.querySelector("#devlogModal");

  if (!modal) {
    return;
  }

  renderDevlog();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("devlog-open");

  const closeButton = modal.querySelector(".devlog-close");

  if (closeButton) {
    closeButton.focus();
  }
}

function closeDevlog() {
  const modal = document.querySelector("#devlogModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("devlog-open");
}

function setupDevlog() {
  const modal = document.createElement("div");
  modal.id = "devlogModal";
  modal.className = "devlog-backdrop";
  modal.setAttribute("aria-hidden", "true");
  document.body.appendChild(modal);

  renderDevlog();

  const devlogLinks = document.querySelectorAll('[data-i18n="more.devlog"]');

  devlogLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openDevlog();
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeDevlog();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDevlog();
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      setTimeout(renderDevlog, 0);
    });
  });
}

setupDevlog();
