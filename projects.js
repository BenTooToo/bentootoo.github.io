const projectLibraryCopy = {
  zh: {
    libraryLabel: "项目保存库",
    filterAll: "全部",
    filterFavorites: "我的最爱",
    filterTools: "工具",
    filterGames: "游戏",
    filterOther: "其他",
    filtersLabel: "筛选项目分类",
    gameGenresLabel: "筛选游戏类型",
    selectAll: "全选",
    clearAll: "清除",
    addFavorite: "加入我的最爱",
    removeFavorite: "移出我的最爱",
    genreAction: "动作",
    genrePuzzle: "解密",
    genreText: "文字",
    genreAdventure: "冒险",
    genreHorror: "恐怖",
    empty: "这个分类里暂时还没有项目。",
    count: (shown, total) => `正在展示 ${shown} / ${total} 个项目`,
    open: "打开项目详情",
    close: "关闭项目详情",
    created: "创立日期",
    plannedDate: "暂定创立日期",
    updated: "最近更新",
    about: "简介",
    latestLog: "最近更新日志",
    visit: "前往项目",
    commentsKicker: "COMMENTS / 评论区",
    comments: "留下你想说的话",
    commentsNote: "留言会先寄到本2兔的邮箱，确认后再手动加入这里。",
    noComments: "这里暂时还没有公开评论。",
    messageLabel: "评论",
    messagePlaceholder: "写下你对这个项目的想法……",
    nicknameLabel: "昵称",
    nicknamePlaceholder: "可以留空",
    submit: "寄给本2兔",
    sending: "正在寄出……",
    sent: "已经收到。确认后，它会出现在这里。",
    failed: "没有发送成功，请稍后再试。",
    unavailable: "评论信箱尚未接通，请稍后再试。",
    anonymous: "匿名访客",
    kinds: { tool: "工具", game: "游戏", other: "其他" }
  },
  en: {
    libraryLabel: "Project archive",
    filterAll: "All",
    filterFavorites: "My favorites",
    filterTools: "Tools",
    filterGames: "Games",
    filterOther: "Other",
    filtersLabel: "Filter project categories",
    gameGenresLabel: "Filter game genres",
    selectAll: "Select all",
    clearAll: "Clear",
    addFavorite: "Add to my favorites",
    removeFavorite: "Remove from my favorites",
    genreAction: "Action",
    genrePuzzle: "Puzzle",
    genreText: "Text",
    genreAdventure: "Adventure",
    genreHorror: "Horror",
    empty: "There are no projects in this category yet.",
    count: (shown, total) => `Showing ${shown} of ${total} projects`,
    open: "Open project details",
    close: "Close project details",
    created: "Created",
    plannedDate: "Tentative start date",
    updated: "Last updated",
    about: "About",
    latestLog: "Latest update log",
    visit: "Visit project",
    commentsKicker: "COMMENTS",
    comments: "Leave a note",
    commentsNote: "Your note goes to Bentootoo's inbox first and can be added here manually after review.",
    noComments: "No public comments here yet.",
    messageLabel: "Comment",
    messagePlaceholder: "Write what you think about this project…",
    nicknameLabel: "Nickname",
    nicknamePlaceholder: "Optional",
    submit: "Send to Bentootoo",
    sending: "Sending…",
    sent: "Received. Once approved, it can appear here.",
    failed: "It could not be sent. Please try again later.",
    unavailable: "The comment inbox is not connected yet. Please try again later.",
    anonymous: "Anonymous visitor",
    kinds: { tool: "Tool", game: "Game", other: "Other" }
  },
  fr: {
    libraryLabel: "Réserve de projets",
    filterAll: "Tous",
    filterFavorites: "Mes favoris",
    filterTools: "Outils",
    filterGames: "Jeux",
    filterOther: "Autres",
    filtersLabel: "Filtrer les catégories de projets",
    gameGenresLabel: "Filtrer les genres de jeux",
    selectAll: "Tout sélectionner",
    clearAll: "Effacer",
    addFavorite: "Ajouter à mes favoris",
    removeFavorite: "Retirer de mes favoris",
    genreAction: "Action",
    genrePuzzle: "Énigme",
    genreText: "Textuel",
    genreAdventure: "Aventure",
    genreHorror: "Horreur",
    empty: "Aucun projet dans cette catégorie pour le moment.",
    count: (shown, total) => `${shown} projet(s) affiché(s) sur ${total}`,
    open: "Ouvrir les détails du projet",
    close: "Fermer les détails du projet",
    created: "Date de création",
    plannedDate: "Création prévue",
    updated: "Dernière mise à jour",
    about: "Présentation",
    latestLog: "Dernier journal de mise à jour",
    visit: "Voir le projet",
    commentsKicker: "COMMENTAIRES",
    comments: "Laissez un mot",
    commentsNote: "Votre message arrive d’abord dans la boîte mail de Bentootoo, puis peut être ajouté ici manuellement après validation.",
    noComments: "Aucun commentaire public pour le moment.",
    messageLabel: "Commentaire",
    messagePlaceholder: "Écrivez ce que vous pensez de ce projet…",
    nicknameLabel: "Pseudonyme",
    nicknamePlaceholder: "Facultatif",
    submit: "Envoyer à Bentootoo",
    sending: "Envoi…",
    sent: "Bien reçu. Après validation, il pourra apparaître ici.",
    failed: "L’envoi a échoué. Réessayez plus tard.",
    unavailable: "La boîte de commentaires n’est pas encore connectée. Réessayez plus tard.",
    anonymous: "Visiteur anonyme",
    kinds: { tool: "Outil", game: "Jeu", other: "Autre" }
  }
};

const projectLibraryData = [
  {
    id: "empty-class",
    category: "game",
    genres: ["puzzle", "text"],
    cover: "assets/project-classroom-credit.png",
    href: "../Empty_classes/index.html",
    created: "2026-05-26",
    updated: "2026-07-12",
    text: {
      zh: { title: "折棠7中同窗录", summary: "一场藏在普通班级回忆录背后的虚拟现实解密。", description: "看上去只是一份普通的班级同窗录，文字、照片与网页细节之间却留下了另一条路。沿着线索走下去，寻找那些没有被直接说出的故事。", log: ["将《折棠7中同窗录》加入网站项目保存库。"] },
      en: { title: "Empty Class", summary: "An alternate reality puzzle hidden behind an ordinary class memory book.", description: "It looks like an ordinary class memory book, but its writing, images, and webpage details leave another path behind. Follow the clues and uncover the story that was never stated directly.", log: ["Added Empty Class to the website's project archive."] },
      fr: { title: "Empty Class", summary: "Une énigme en réalité alternée cachée derrière un album de classe ordinaire.", description: "Tout ressemble à un simple album de classe, mais les textes, les images et les détails du site dessinent un autre chemin. Suivez les indices pour retrouver l’histoire qui n’est jamais racontée directement.", log: ["Ajout d’Empty Class à la réserve de projets du site."] }
    },
    comments: []
  },
  {
    id: "tower-off",
    category: "game",
    genres: ["action", "adventure"],
    cover: "assets/cover_toweroff.png",
    href: "https://bentootoo.itch.io/tower-off",
    created: "2026-08-06",
    updated: "2026-08-05",
    text: {
      zh: { title: "Tower Off", summary: "在坠落之塔当中寻找出路，战斗、跳跃，追求自由。", description: "一部为 GMTK 2026 制作的游戏作品。塔正在坠落，倒计时不会停下；玩家需要在战斗与跳跃之间找到自己的路线，赶在一切归零之前离开。", log: ["将 Tower Off 加入项目展示，并接入 itch.io 页面。"] },
      en: { title: "Tower Off", summary: "Find a way out of a falling tower—fight, jump, and pursue freedom.", description: "A game made for GMTK 2026. The tower is falling and the countdown will not stop; move between combat and platforming, find your route, and escape before everything reaches zero.", log: ["Added Tower Off to the project showcase and linked its itch.io page."] },
      fr: { title: "Tower Off", summary: "Trouvez une issue dans une tour en chute : combattez, sautez et cherchez la liberté.", description: "Un jeu créé pour la GMTK 2026. La tour s’effondre et le compte à rebours ne s’arrête pas : alternez combat et plateformes, trouvez votre route et échappez-vous avant que tout atteigne zéro.", log: ["Ajout de Tower Off à la présentation des projets avec un lien vers itch.io."] }
    },
    comments: []
  },
  {
    id: "building-this-globe",
    category: "tool",
    cover: "assets/travel-globe-preview.png",
    href: "uit_prepare.html",
    created: "2026-08-06",
    updated: { zh: "待补充", en: "To be added", fr: "À compléter" },
    text: {
      zh: { title: "本2兔正在建造这个地球", summary: "把旅行记录放进一颗可以转动、可以继续生长的地球。", description: "一份仍在建造中的个人旅行记录。它不想只做成一列地点，而是把去过的地方、留下的照片和以后还想抵达的位置，放回一颗可以探索的地球里。", log: ["完成地球版旅行记录的准备页面与视觉预览。"] },
      en: { title: "Bentootoo Is Building This Globe", summary: "Travel memories placed on a globe that can turn and keep growing.", description: "A personal travel record still under construction. Instead of becoming a plain list of places, it returns visited locations, saved images, and future destinations to an explorable globe.", log: ["Completed the preparation page and visual preview for the globe travel log."] },
      fr: { title: "Bentootoo construit ce globe", summary: "Des souvenirs de voyage déposés sur un globe qui tourne et continue de grandir.", description: "Un carnet de voyage personnel encore en construction. Plutôt qu’une simple liste de lieux, il replace les endroits visités, les images conservées et les destinations futures sur un globe à explorer.", log: ["Finalisation de la page de préparation et de l’aperçu visuel du carnet de voyage en globe."] }
    },
    comments: []
  }
];

// 在建项目只展示资料，不添加尚未发布的项目链接。
projectLibraryData.push(
  {
    id: "bentoto", category: "game", genres: ["simulation"], draft: true,
    created: "2026-10-06",
    text: {
      zh: { title: "便当当 / bentoto", summary: "一个正在构建的 3D 放置游戏，一起来做便当吧！" },
      en: { title: "bentoto", summary: "A 3D idle game in development. Let’s make bento together!" },
      fr: { title: "bentoto", summary: "Un jeu idle en 3D en cours de création. Préparons des bentos ensemble !" }
    }
  },
  {
    id: "tsinghua-architecture", category: "game", draft: true,
    created: "2026-09-30",
    text: {
      zh: { title: "清华建筑比赛游戏设计", summary: "为清华建筑比赛构建的游戏设计项目。" },
      en: { title: "Tsinghua Architecture Competition Game Design", summary: "A game design project in development for the Tsinghua architecture competition." },
      fr: { title: "Conception de jeu pour le concours d’architecture de Tsinghua", summary: "Un projet de conception de jeu en cours pour le concours d’architecture de Tsinghua." }
    }
  },
  {
    id: "archinature", category: "game", genres: ["puzzle"], draft: true,
    created: "2026-10-04",
    text: {
      zh: { title: "archinature", summary: "一个手机平台的华容道风格解密游戏，正在构建中。" },
      en: { title: "archinature", summary: "A mobile sliding-block puzzle game inspired by Huarong Dao, currently in development." },
      fr: { title: "archinature", summary: "Un jeu mobile de blocs coulissants inspiré du Huarong Dao, en cours de création." }
    }
  },
  {
    id: "token-master", category: "tool", draft: true,
    created: "2026-10-03",
    text: {
      zh: { title: "token消耗大师", summary: "一个正在构建的 token 消耗工具。" },
      en: { title: "Token Consumption Master", summary: "A token consumption tool currently in development." },
      fr: { title: "Maître de la consommation de tokens", summary: "Un outil de consommation de tokens en cours de création." }
    }
  },
  {
    id: "deathgpt", category: "game", genres: ["puzzle", "text", "horror"], draft: true, planned: true,
    created: "2026-10-14",
    text: {
      zh: { title: "deathGPT", summary: "ARG 解密的续作。向伪 AI 提问，逐渐发现恐怖的真相。项目名字暂定 deathGPT。" },
      en: { title: "deathGPT", summary: "An ARG puzzle sequel. Question a simulated AI to uncover a terrifying truth. Working title: deathGPT." },
      fr: { title: "deathGPT", summary: "La suite d’un jeu d’énigmes ARG. Interrogez une fausse IA pour découvrir une vérité terrifiante. Titre provisoire : deathGPT." }
    }
  },
  {
    id: "collaborative-2d-story", category: "game", genres: ["text"], draft: true,
    created: { zh: "待补充", en: "To be added", fr: "À compléter" },
    text: {
      zh: { title: "2D 合作剧情游戏", summary: "一个即将可以导出的 2D 剧情游戏，脑洞大开的合作项目，目标就是把你的脑洞打开！" },
      en: { title: "Collaborative 2D Story Game", summary: "A collaborative 2D story game nearing an exportable build. An imaginative project made to spark your imagination!" },
      fr: { title: "Jeu narratif collaboratif en 2D", summary: "Un jeu narratif collaboratif en 2D bientôt exportable. Un projet plein d’idées pour ouvrir votre imagination !" }
    }
  }
);

const archiveGrid = document.querySelector("#archiveGrid");
const archiveCount = document.querySelector("#archiveCount");
const archiveEmpty = document.querySelector("#archiveEmpty");
const projectDialog = document.querySelector("#projectDialog");
const projectCommentForm = document.querySelector("#projectCommentForm");
const projectCommentStatus = document.querySelector("#projectCommentStatus");
const feedbackEndpoint = document.querySelector('meta[name="feedback-endpoint"]')?.content.trim() || "";
let activeFilter = "all";
let activeProjectId = null;
const allGameGenres = ["action", "puzzle", "text", "adventure", "horror"];
const selectedGameGenres = new Set(allGameGenres);
const favoriteStorageKey = "bentootoo-project-favorites";
let favoriteProjects = new Set();

try {
  const storedFavorites = JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]");
  if (Array.isArray(storedFavorites)) favoriteProjects = new Set(storedFavorites);
} catch (error) {
  console.warn("Could not read saved project favorites.", error);
}

function getProjectLanguage() {
  const saved = localStorage.getItem("bentootoo-language");
  return projectLibraryCopy[saved] ? saved : "zh";
}

function getProjectCopy() {
  return projectLibraryCopy[getProjectLanguage()] || projectLibraryCopy.zh;
}

function getProjectText(project) {
  return project.text[getProjectLanguage()] || project.text.zh;
}

function getProjectDate(value) {
  return typeof value === "string" ? value : (value[getProjectLanguage()] || value.zh);
}

function renderProjectLanguage() {
  const copy = getProjectCopy();
  document.querySelectorAll("[data-project-text]").forEach((element) => {
    const value = copy[element.dataset.projectText];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-project-aria]").forEach((element) => {
    const value = copy[element.dataset.projectAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-project-placeholder]").forEach((element) => {
    const value = copy[element.dataset.projectPlaceholder];
    if (value) element.placeholder = value;
  });
  renderProjectCards();
  if (activeProjectId) renderProjectDialog(activeProjectId);
}

function renderProjectCards() {
  if (!archiveGrid) return;
  const copy = getProjectCopy();
  const visible = projectLibraryData.filter((project) => {
    if (activeFilter === "favorite") return favoriteProjects.has(project.id);
    if (activeFilter !== "all" && project.category !== activeFilter) return false;
    if (activeFilter !== "game") return true;
    return selectedGameGenres.size === allGameGenres.length || project.genres?.some((genre) => selectedGameGenres.has(genre));
  });
  archiveGrid.replaceChildren();
  visible.forEach((project) => {
    const text = getProjectText(project);
    const card = document.createElement("article");
    card.className = project.draft ? "archive-card archive-card-draft" : "archive-card";
    card.dataset.projectId = project.id;
    if (!project.draft) {
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${copy.open}: ${text.title}`);
    }
    const isFavorite = favoriteProjects.has(project.id);
    card.innerHTML = `
      <span class="archive-card-cover" style="background-image:${project.cover ? `url('${project.cover}')` : "linear-gradient(135deg, #bcc6ad, #e0d9bb)"}">
        <button class="archive-favorite${isFavorite ? " is-favorite" : ""}" type="button" aria-pressed="${isFavorite}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 21.2C10.8 20.2 3 15.4 3 9.1A5 5 0 0 1 12 6a5 5 0 0 1 9 3.1c0 6.3-7.8 11.1-9 12.1Z" />
          </svg>
        </button>
      </span>
      <span class="archive-card-body">
        <span class="archive-card-kind">${copy.kinds[project.category]}</span>
        <h2>${text.title}</h2>
        <span class="archive-card-summary">${text.summary}</span>
        <span class="archive-card-created"><span>${project.planned ? copy.plannedDate : copy.created}</span><time${typeof project.created === "string" ? ` datetime="${project.created}"` : ""}>${getProjectDate(project.created)}</time></span>
      </span>`;
    const favoriteButton = card.querySelector(".archive-favorite");
    favoriteButton.setAttribute("aria-label", `${isFavorite ? copy.removeFavorite : copy.addFavorite}: ${text.title}`);
    favoriteButton.title = isFavorite ? copy.removeFavorite : copy.addFavorite;
    favoriteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleProjectFavorite(project.id);
    });
    if (!project.draft) card.addEventListener("click", () => openProjectDialog(project.id));
    card.addEventListener("keydown", (event) => {
      if (!project.draft && (event.key === "Enter" || event.key === " ") && event.target === card) {
        event.preventDefault();
        openProjectDialog(project.id);
      }
    });
    archiveGrid.append(card);
  });
  archiveCount.textContent = copy.count(visible.length, projectLibraryData.length);
  archiveEmpty.hidden = visible.length !== 0;
}

function toggleProjectFavorite(projectId) {
  if (favoriteProjects.has(projectId)) favoriteProjects.delete(projectId);
  else favoriteProjects.add(projectId);
  localStorage.setItem(favoriteStorageKey, JSON.stringify([...favoriteProjects]));
  renderProjectCards();
}

function renderComments(project) {
  const container = document.querySelector("#publishedComments");
  const copy = getProjectCopy();
  container.replaceChildren();
  if (!project.comments.length) {
    container.textContent = copy.noComments;
    return;
  }
  project.comments.forEach((comment) => {
    const article = document.createElement("article");
    article.className = "published-comment";
    article.innerHTML = `<strong>${comment.name}</strong><time>${comment.date}</time><p>${comment.message}</p>`;
    container.append(article);
  });
}

function renderProjectDialog(projectId) {
  const project = projectLibraryData.find((item) => item.id === projectId);
  if (!project) return;
  const copy = getProjectCopy();
  const text = getProjectText(project);
  document.querySelector("#projectDialogCover").style.backgroundImage = `linear-gradient(180deg, transparent 48%, #0a0e22 100%), url('${project.cover}')`;
  document.querySelector("#projectDialogKind").textContent = copy.kinds[project.category];
  document.querySelector("#projectDialogTitle").textContent = text.title;
  document.querySelector("#projectDialogCreated").textContent = getProjectDate(project.created);
  document.querySelector("#projectDialogUpdated").textContent = getProjectDate(project.updated);
  document.querySelector("#projectDialogDescription").textContent = text.description;
  const log = document.querySelector("#projectDialogLog");
  log.replaceChildren(...text.log.map((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    return item;
  }));
  const link = document.querySelector("#projectDialogLink");
  link.href = project.href;
  renderComments(project);
}

function openProjectDialog(projectId) {
  activeProjectId = projectId;
  projectCommentForm?.reset();
  if (projectCommentStatus) {
    projectCommentStatus.textContent = "";
    projectCommentStatus.dataset.state = "";
  }
  renderProjectDialog(projectId);
  projectDialog.showModal();
  document.body.classList.add("project-dialog-open");
}

function closeProjectDialog() {
  projectDialog.close();
  document.body.classList.remove("project-dialog-open");
  activeProjectId = null;
}

async function submitProjectComment(event) {
  event.preventDefault();
  const project = projectLibraryData.find((item) => item.id === activeProjectId);
  if (!project || !projectCommentForm || !projectCommentStatus) return;
  const copy = getProjectCopy();
  const data = new FormData(projectCommentForm);
  if (data.get("website")) return;
  if (!feedbackEndpoint) {
    projectCommentStatus.textContent = copy.unavailable;
    projectCommentStatus.dataset.state = "error";
    return;
  }
  const submit = projectCommentForm.querySelector('button[type="submit"]');
  const projectText = getProjectText(project);
  const payload = {
    message: data.get("message"),
    nickname: data.get("nickname") || copy.anonymous,
    project: projectText.title,
    project_id: project.id,
    source: window.location.href,
    _subject: `项目保存库收到一条新评论：${projectText.title}`,
    _template: "table",
    _url: window.location.href,
    _honey: ""
  };
  submit.disabled = true;
  submit.textContent = copy.sending;
  projectCommentStatus.textContent = "";
  projectCommentStatus.dataset.state = "";
  try {
    const response = await fetch(feedbackEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.success === false) throw new Error(result?.message || `Comment request failed: ${response.status}`);
    projectCommentForm.reset();
    projectCommentStatus.textContent = copy.sent;
    projectCommentStatus.dataset.state = "success";
  } catch (error) {
    console.error(error);
    projectCommentStatus.textContent = copy.failed;
    projectCommentStatus.dataset.state = "error";
  } finally {
    submit.disabled = false;
    submit.textContent = copy.submit;
  }
}

document.querySelectorAll(".archive-filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".archive-filter").forEach((item) => item.classList.toggle("is-active", item === button));
    const gameFilters = document.querySelector("#gameFilters");
    const gameButton = document.querySelector('[data-filter="game"]');
    gameFilters.hidden = activeFilter !== "game";
    gameButton.setAttribute("aria-expanded", String(activeFilter === "game"));
    renderProjectCards();
  });
});

function renderGenreFilters() {
  document.querySelectorAll(".game-genre-filter").forEach((button) => {
    const selected = selectedGameGenres.has(button.dataset.genre);
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderProjectCards();
}

document.querySelectorAll(".game-genre-filter").forEach((button) => {
  button.addEventListener("click", () => {
    const genre = button.dataset.genre;
    if (selectedGameGenres.has(genre)) selectedGameGenres.delete(genre);
    else selectedGameGenres.add(genre);
    renderGenreFilters();
  });
});

document.querySelector("#selectAllGenres")?.addEventListener("click", () => {
  allGameGenres.forEach((genre) => selectedGameGenres.add(genre));
  renderGenreFilters();
});

document.querySelector("#clearGenres")?.addEventListener("click", () => {
  selectedGameGenres.clear();
  renderGenreFilters();
});

document.querySelector("#projectDialogClose")?.addEventListener("click", closeProjectDialog);
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeProjectDialog();
});
projectDialog?.addEventListener("close", () => document.body.classList.remove("project-dialog-open"));
projectCommentForm?.addEventListener("submit", submitProjectComment);
document.querySelectorAll(".lang-button").forEach((button) => button.addEventListener("click", () => window.setTimeout(renderProjectLanguage, 0)));

renderProjectLanguage();
