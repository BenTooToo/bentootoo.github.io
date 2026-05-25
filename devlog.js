const devlogContent = {
  zh: {
    kicker: "Development log",
    title: "开发日志",
    intro: "这个intro已经被隐藏了",
    closeLabel: "关闭开发日志",
    sections: {
      done: "完成"
    },
    entries: [
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
    kicker: "开发日志",
    title: "Development Log",
    intro: "This intro has been hidden",
    closeLabel: "Close development log",
    sections: {
      done: "Done"
    },
    entries: [
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
    kicker: "Journal de développement",
    title: "Journal de dev",
    intro: "Cette intro a été caché",
    closeLabel: "Fermer le journal de développement",
    sections: {
      done: "Fait"
    },
    entries: [
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

function createEntry(entry, labels) {
  return `
    <article class="devlog-entry">
      <div class="devlog-entry-header">
        <span class="devlog-date">${entry.date}</span>
        <span class="devlog-version">${entry.version}</span>
      </div>

      <p class="devlog-section-title">${labels.done}</p>
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

      <span class="devlog-kicker">${content.kicker}</span>
      <h2 class="devlog-title" id="devlogTitle">${content.title}</h2>
      <p class="devlog-intro">${content.intro}</p>

      <div class="devlog-list">
        ${content.entries.map((entry) => createEntry(entry, content.sections)).join("")}
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