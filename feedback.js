const thoughtTranslations = {
  zh: {
    invitation: "和本2兔探讨你的想法",
    title: "你在想什么？",
    closeLabel: "关闭交流窗口",
    messageLabel: "你的想法",
    messagePlaceholder: "写下此刻让你停留的念头……",
    articlesLegend: "哪些文章引发了你的思考？",
    identityLegend: "如何称呼你？",
    nicknameChoice: "留下昵称",
    anonymousChoice: "匿名",
    nicknameLabel: "昵称",
    nicknamePlaceholder: "你的昵称（可以留空）",
    privacy: "内容只会发送给本2兔，你的昵称可以留空。",
    submit: "发送",
    sending: "正在送出……",
    sent: "已经收到。谢谢你把这个想法留在这里。",
    unavailable: "交流信箱尚未接通，请稍后再试。",
    failed: "没有发送成功，请稍后再试。",
    anonymousName: "匿名访客",
    noArticle: "未选择文章"
  },
  en: {
    invitation: "Discuss your ideas with Bentootoo",
    title: "What are you thinking?",
    closeLabel: "Close the discussion window",
    messageLabel: "Your thought",
    messagePlaceholder: "Write down the thought that made you pause…",
    articlesLegend: "Which essays made you think?",
    identityLegend: "How should I address you?",
    nicknameChoice: "Use a nickname",
    anonymousChoice: "Stay anonymous",
    nicknameLabel: "Nickname",
    nicknamePlaceholder: "Your nickname (optional)",
    privacy: "Your note is sent only to Bentootoo. A nickname is optional.",
    submit: "Send",
    sending: "Sending…",
    sent: "Received. Thank you for leaving your thought here.",
    unavailable: "The private inbox is not connected yet. Please try again later.",
    failed: "It could not be sent. Please try again later.",
    anonymousName: "Anonymous visitor",
    noArticle: "No essay selected"
  },
  fr: {
    invitation: "Discuter de vos idées avec Bentootoo",
    title: "À quoi pensez-vous ?",
    closeLabel: "Fermer la fenêtre de discussion",
    messageLabel: "Votre idée",
    messagePlaceholder: "Écrivez la pensée qui vous a fait marquer une pause…",
    articlesLegend: "Quels textes vous ont fait réfléchir ?",
    identityLegend: "Comment vous appeler ?",
    nicknameChoice: "Choisir un pseudonyme",
    anonymousChoice: "Rester anonyme",
    nicknameLabel: "Pseudonyme",
    nicknamePlaceholder: "Votre pseudonyme (facultatif)",
    privacy: "Votre message est envoyé uniquement à Bentootoo. Le pseudonyme est facultatif.",
    submit: "Envoyer",
    sending: "Envoi…",
    sent: "Bien reçu. Merci d’avoir déposé cette pensée ici.",
    unavailable: "La boîte privée n’est pas encore connectée. Réessayez plus tard.",
    failed: "L’envoi a échoué. Réessayez plus tard.",
    anonymousName: "Visiteur anonyme",
    noArticle: "Aucun texte sélectionné"
  }
};

const thoughtDock = document.querySelector("#thoughtDock");
const thoughtPanel = document.querySelector("#thoughtPanel");
const thoughtInvitation = document.querySelector("#thoughtInvitation");
const thoughtClose = document.querySelector("#thoughtClose");
const thoughtBackdrop = document.querySelector("#thoughtBackdrop");
const thoughtForm = document.querySelector("#thoughtForm");
const thoughtStatus = document.querySelector("#thoughtStatus");
const thoughtArticleList = document.querySelector("#thoughtArticleList");
const thoughtNicknameField = document.querySelector("#thoughtNicknameField");
const thoughtEndpoint = document.querySelector('meta[name="feedback-endpoint"]')?.content.trim() || "";

function getThoughtLanguage() {
  const saved = localStorage.getItem("bentootoo-language");
  return thoughtTranslations[saved] ? saved : "zh";
}

function getThoughtCopy() {
  return thoughtTranslations[getThoughtLanguage()] || thoughtTranslations.zh;
}

function getThoughtArticles() {
  if (typeof blogGraph === "undefined") {
    return [];
  }

  return blogGraph.articles.map((article) => ({
    id: article.id,
    title: typeof getArticleText === "function" ? getArticleText(article).title : article.title
  }));
}

function renderThoughtArticles() {
  if (!thoughtArticleList) return;

  const selected = new Set(
    Array.from(thoughtArticleList.querySelectorAll("input:checked"), (input) => input.dataset.articleId)
  );
  thoughtArticleList.replaceChildren();

  getThoughtArticles().forEach((article) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const text = document.createElement("span");
    input.type = "checkbox";
    input.name = "articles";
    input.value = article.title;
    input.dataset.articleId = article.id;
    input.checked = selected.has(article.id);
    text.textContent = article.title;
    label.append(input, text);
    thoughtArticleList.append(label);
  });
}

function renderThoughtLanguage() {
  const copy = getThoughtCopy();
  document.querySelectorAll("[data-thought-text]").forEach((element) => {
    const value = copy[element.dataset.thoughtText];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-thought-placeholder]").forEach((element) => {
    const value = copy[element.dataset.thoughtPlaceholder];
    if (value) element.placeholder = value;
  });
  if (thoughtClose) thoughtClose.setAttribute("aria-label", copy.closeLabel);
  renderThoughtArticles();
}

function openThoughtPanel() {
  if (!thoughtDock || !thoughtPanel) return;
  thoughtDock.classList.add("is-open");
  thoughtPanel.setAttribute("aria-hidden", "false");
  thoughtPanel.removeAttribute("inert");
  thoughtInvitation?.setAttribute("aria-expanded", "true");
  thoughtBackdrop?.classList.add("is-open");
  thoughtBackdrop?.setAttribute("aria-hidden", "false");
  document.body.classList.add("thought-panel-open");
  window.setTimeout(() => thoughtForm?.querySelector("textarea")?.focus(), 280);
}

function closeThoughtPanel() {
  if (!thoughtDock || !thoughtPanel) return;
  thoughtDock.classList.remove("is-open");
  thoughtPanel.setAttribute("aria-hidden", "true");
  thoughtPanel.setAttribute("inert", "");
  thoughtInvitation?.setAttribute("aria-expanded", "false");
  thoughtBackdrop?.classList.remove("is-open");
  thoughtBackdrop?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("thought-panel-open");
  thoughtInvitation?.focus();
}

function updateThoughtIdentity() {
  const anonymous = thoughtForm?.elements.identity_mode?.value === "anonymous";
  thoughtNicknameField?.classList.toggle("is-hidden", anonymous);
  const input = thoughtNicknameField?.querySelector("input");
  if (input) input.disabled = anonymous;
}

async function submitThought(event) {
  event.preventDefault();
  if (!thoughtForm || !thoughtStatus) return;

  const copy = getThoughtCopy();
  const data = new FormData(thoughtForm);
  if (data.get("website")) return;

  if (!thoughtEndpoint) {
    thoughtStatus.textContent = copy.unavailable;
    thoughtStatus.dataset.state = "error";
    return;
  }

  const submitButton = thoughtForm.querySelector("button[type='submit']");
  const anonymous = data.get("identity_mode") === "anonymous";
  const articles = data.getAll("articles");
  const payload = {
    message: data.get("message"),
    nickname: anonymous ? copy.anonymousName : (data.get("nickname") || copy.anonymousName),
    anonymous,
    articles: articles.length ? articles.join(" · ") : copy.noArticle,
    source: window.location.href,
    _subject: "思索之屋收到了一条新想法"
  };

  submitButton.disabled = true;
  submitButton.textContent = copy.sending;
  thoughtStatus.textContent = "";
  thoughtStatus.dataset.state = "";

  try {
    const response = await fetch(thoughtEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`Feedback request failed: ${response.status}`);

    thoughtForm.reset();
    updateThoughtIdentity();
    thoughtStatus.textContent = copy.sent;
    thoughtStatus.dataset.state = "success";
  } catch (error) {
    console.error(error);
    thoughtStatus.textContent = copy.failed;
    thoughtStatus.dataset.state = "error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = copy.submit;
  }
}

if (thoughtDock && thoughtForm) {
  renderThoughtLanguage();
  thoughtInvitation?.addEventListener("click", openThoughtPanel);
  thoughtClose?.addEventListener("click", closeThoughtPanel);
  thoughtBackdrop?.addEventListener("click", closeThoughtPanel);
  thoughtForm.addEventListener("change", (event) => {
    if (event.target.name === "identity_mode") updateThoughtIdentity();
  });
  thoughtForm.addEventListener("submit", submitThought);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && thoughtDock.classList.contains("is-open")) closeThoughtPanel();
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => window.setTimeout(renderThoughtLanguage, 0));
  });
  if (window.location.hash === "#thoughts") openThoughtPanel();
}
