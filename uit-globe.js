const globeI18n = {
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "uit_prepare · 田野调查地球",
    pageHeading: "田野调查地球",
    loading: "正在生成地球……",
    loadError: "3D 地球资源载入失败，请检查网络后刷新页面。",
    globeLabel: "田野调查地点 3D 地球",
    backLabel: "返回项目列表",
    controlsLabel: "操作说明",
    controls: "拖拽旋转 · 滚轮缩放",
    seek: "寻找发光的调查地点",
    languageLabel: "语言选择",
    introButton: "点击进入简介模式",
    introTitle: "简介模式",
    introBody: "通过地球上的地点探索田野调查与地方项目。悬停查看标题，点击地点阅读项目简介与完整报告。",
    introCloseLabel: "关闭简介",
    closeReportLabel: "关闭项目介绍",
    testTitle: "测试标题",
    testSummary: "测试简介",
    testCategory: "测试分类",
    readReport: "点击阅读完成报告",
    markerLabel: "查看",
    regions: {
      northAmerica: "北美洲大陆",
      southAmerica: "南美洲大陆",
      europe: "欧洲大陆",
      africa: "非洲大陆",
      asia: "亚洲大陆",
      oceania: "大洋洲大陆",
      antarctica: "南极洲大陆",
      arctic: "北冰洋",
      atlantic: "大西洋",
      indian: "印度洋",
      pacific: "太平洋",
      southern: "南冰洋"
    }
  },
  en: {
    htmlLang: "en",
    pageTitle: "uit_prepare · Fieldwork Globe",
    pageHeading: "Fieldwork Globe",
    loading: "Building the globe…",
    loadError: "The 3D globe could not load. Check your connection and refresh the page.",
    globeLabel: "3D globe of fieldwork locations",
    backLabel: "Back to projects",
    controlsLabel: "Controls",
    controls: "Drag to rotate · Scroll to zoom",
    seek: "Find the glowing field sites",
    languageLabel: "Language selector",
    introButton: "Enter introduction mode",
    introTitle: "Introduction mode",
    introBody: "Explore fieldwork and local projects through places on the globe. Hover for a title, then select a location to read its introduction and full report.",
    introCloseLabel: "Close introduction",
    closeReportLabel: "Close project introduction",
    testTitle: "Test Title",
    testSummary: "Test Introduction",
    testCategory: "Test Category",
    readReport: "Click to read the full report",
    markerLabel: "View",
    regions: {
      northAmerica: "North America",
      southAmerica: "South America",
      europe: "Europe",
      africa: "Africa",
      asia: "Asia",
      oceania: "Oceania",
      antarctica: "Antarctica",
      arctic: "Arctic Ocean",
      atlantic: "Atlantic Ocean",
      indian: "Indian Ocean",
      pacific: "Pacific Ocean",
      southern: "Southern Ocean"
    }
  },
  fr: {
    htmlLang: "fr",
    pageTitle: "uit_prepare · Globe des enquêtes de terrain",
    pageHeading: "Globe des enquêtes",
    loading: "Création du globe…",
    loadError: "Le globe 3D n'a pas pu être chargé. Vérifiez votre connexion et actualisez la page.",
    globeLabel: "Globe 3D des lieux d'enquête",
    backLabel: "Retour aux projets",
    controlsLabel: "Commandes",
    controls: "Glisser pour tourner · Défiler pour zoomer",
    seek: "Cherchez les lieux lumineux",
    languageLabel: "Choix de la langue",
    introButton: "Entrer en mode introduction",
    introTitle: "Mode introduction",
    introBody: "Explorez les enquêtes de terrain et les projets locaux à travers les lieux du globe. Survolez un point pour voir son titre, puis sélectionnez-le pour lire sa présentation et son rapport complet.",
    introCloseLabel: "Fermer l'introduction",
    closeReportLabel: "Fermer la présentation du projet",
    testTitle: "Titre test",
    testSummary: "Présentation test",
    testCategory: "Catégorie test",
    readReport: "Cliquer pour lire le rapport complet",
    markerLabel: "Voir",
    regions: {
      northAmerica: "Amérique du Nord",
      southAmerica: "Amérique du Sud",
      europe: "Europe",
      africa: "Afrique",
      asia: "Asie",
      oceania: "Océanie",
      antarctica: "Antarctique",
      arctic: "Océan Arctique",
      atlantic: "Océan Atlantique",
      indian: "Océan Indien",
      pacific: "Océan Pacifique",
      southern: "Océan Austral"
    }
  }
};

const fieldReports = [
  {
    id: "tampa",
    lat: 27.9506,
    lng: -82.4572,
    location: { zh: "美国 · 坦帕", en: "Tampa · United States", fr: "Tampa · États-Unis" }
  },
  {
    id: "portland-oregon",
    lat: 45.5152,
    lng: -122.6784,
    location: { zh: "美国 · 俄勒冈州 · 波特兰", en: "Portland · Oregon · United States", fr: "Portland · Oregon · États-Unis" }
  },
  { id: "beijing", lat: 39.9042, lng: 116.4074, location: { zh: "中国 · 北京", en: "Beijing · China", fr: "Pékin · Chine" } },
  { id: "shanghai", lat: 31.2304, lng: 121.4737, location: { zh: "中国 · 上海", en: "Shanghai · China", fr: "Shanghai · Chine" } },
  { id: "guangzhou", lat: 23.1291, lng: 113.2644, location: { zh: "中国 · 广州", en: "Guangzhou · China", fr: "Canton · Chine" } },
  { id: "chengdu", lat: 30.5728, lng: 104.0668, location: { zh: "中国 · 成都", en: "Chengdu · China", fr: "Chengdu · Chine" } },
  { id: "hangzhou", lat: 30.2741, lng: 120.1551, location: { zh: "中国 · 杭州", en: "Hangzhou · China", fr: "Hangzhou · Chine" } },
  { id: "guizhou-shiqiao", lat: 25.5884, lng: 104.4847, location: { zh: "中国 · 贵州 · 石桥", en: "Shiqiao · Guizhou · China", fr: "Shiqiao · Guizhou · Chine" } },
  { id: "genhe", lat: 50.7805, lng: 121.5204, location: { zh: "中国 · 内蒙古 · 根河", en: "Genhe · Inner Mongolia · China", fr: "Genhe · Mongolie-Intérieure · Chine" } },
  { id: "harbin", lat: 45.8038, lng: 126.535, location: { zh: "中国 · 黑龙江 · 哈尔滨", en: "Harbin · Heilongjiang · China", fr: "Harbin · Heilongjiang · Chine" } },
  { id: "inner-mongolia-hohhot", lat: 40.842, lng: 111.749, location: { zh: "中国 · 内蒙古（呼和浩特）", en: "Inner Mongolia (Hohhot) · China", fr: "Mongolie-Intérieure (Hohhot) · Chine" } },
  { id: "qingdao", lat: 36.0671, lng: 120.3826, location: { zh: "中国 · 青岛", en: "Qingdao · China", fr: "Qingdao · Chine" } },
  { id: "suzhou", lat: 31.2989, lng: 120.5853, location: { zh: "中国 · 苏州", en: "Suzhou · China", fr: "Suzhou · Chine" } },
  { id: "shangri-la", lat: 27.8297, lng: 99.7008, location: { zh: "中国 · 云南 · 香格里拉", en: "Shangri-La · Yunnan · China", fr: "Shangri-La · Yunnan · Chine" } },
  { id: "lijiang", lat: 26.8721, lng: 100.2299, location: { zh: "中国 · 云南 · 丽江", en: "Lijiang · Yunnan · China", fr: "Lijiang · Yunnan · Chine" } },
  { id: "seoul", lat: 37.5665, lng: 126.978, location: { zh: "韩国 · 首尔", en: "Seoul · South Korea", fr: "Séoul · Corée du Sud" } },
  { id: "thailand-bangkok", lat: 13.7563, lng: 100.5018, location: { zh: "泰国（曼谷）", en: "Thailand (Bangkok)", fr: "Thaïlande (Bangkok)" } },
  { id: "singapore", lat: 1.3521, lng: 103.8198, location: { zh: "新加坡", en: "Singapore", fr: "Singapour" } },
  { id: "malaysia-kuala-lumpur", lat: 3.139, lng: 101.6869, location: { zh: "马来西亚（吉隆坡）", en: "Malaysia (Kuala Lumpur)", fr: "Malaisie (Kuala Lumpur)" } },
  { id: "rovaniemi", lat: 66.5039, lng: 25.7294, location: { zh: "芬兰 · 罗瓦涅米", en: "Rovaniemi · Finland", fr: "Rovaniemi · Finlande" } },
  { id: "tromso", lat: 69.6492, lng: 18.9553, location: { zh: "挪威 · 特罗姆瑟", en: "Tromsø · Norway", fr: "Tromsø · Norvège" } },
  { id: "oslo", lat: 59.9139, lng: 10.7522, location: { zh: "挪威 · 奥斯陆", en: "Oslo · Norway", fr: "Oslo · Norvège" } },
  { id: "amboise", lat: 47.4125, lng: 0.9827, location: { zh: "法国 · 昂布瓦斯", en: "Amboise · France", fr: "Amboise · France" } },
  { id: "argeles-sur-mer", lat: 42.5478, lng: 3.0225, location: { zh: "法国 · 滨海阿热莱斯", en: "Argelès-sur-Mer · France", fr: "Argelès-sur-Mer · France" } },
  { id: "blois", lat: 47.5861, lng: 1.3359, location: { zh: "法国 · 布卢瓦", en: "Blois · France", fr: "Blois · France" } },
  { id: "bordeaux", lat: 44.8378, lng: -0.5792, location: { zh: "法国 · 波尔多", en: "Bordeaux · France", fr: "Bordeaux · France" } },
  { id: "cannes", lat: 43.5528, lng: 7.0174, location: { zh: "法国 · 戛纳", en: "Cannes · France", fr: "Cannes · France" } },
  { id: "grenoble", lat: 45.1885, lng: 5.7245, location: { zh: "法国 · 格勒诺布尔", en: "Grenoble · France", fr: "Grenoble · France" } },
  { id: "marseille", lat: 43.2965, lng: 5.3698, location: { zh: "法国 · 马赛", en: "Marseille · France", fr: "Marseille · France" } },
  { id: "montpellier", lat: 43.6108, lng: 3.8767, location: { zh: "法国 · 蒙彼利埃", en: "Montpellier · France", fr: "Montpellier · France" } },
  { id: "orleans", lat: 47.903, lng: 1.9093, location: { zh: "法国 · 奥尔良", en: "Orléans · France", fr: "Orléans · France" } },
  { id: "paris", lat: 48.8566, lng: 2.3522, location: { zh: "法国 · 巴黎", en: "Paris · France", fr: "Paris · France" } },
  { id: "perpignan", lat: 42.6887, lng: 2.8948, location: { zh: "法国 · 佩皮尼昂", en: "Perpignan · France", fr: "Perpignan · France" } },
  { id: "sete", lat: 43.4079, lng: 3.7008, location: { zh: "法国 · 塞特", en: "Sète · France", fr: "Sète · France" } },
  { id: "toulouse", lat: 43.6047, lng: 1.4442, location: { zh: "法国 · 图卢兹", en: "Toulouse · France", fr: "Toulouse · France" } },
  { id: "lille", lat: 50.6292, lng: 3.0573, location: { zh: "法国 · 里尔", en: "Lille · France", fr: "Lille · France" } },
  { id: "amsterdam", lat: 52.3676, lng: 4.9041, location: { zh: "荷兰 · 阿姆斯特丹", en: "Amsterdam · Netherlands", fr: "Amsterdam · Pays-Bas" } },
  { id: "venice", lat: 45.4408, lng: 12.3155, location: { zh: "意大利 · 威尼斯", en: "Venice · Italy", fr: "Venise · Italie" } }
];

const francePlaceIds = new Set([
  "amboise",
  "argeles-sur-mer",
  "blois",
  "bordeaux",
  "cannes",
  "grenoble",
  "marseille",
  "montpellier",
  "orleans",
  "paris",
  "perpignan",
  "sete",
  "toulouse",
  "lille"
]);
const francePlaces = fieldReports.filter((report) => francePlaceIds.has(report.id));
const franceCluster = {
  id: "france-cluster",
  kind: "cluster",
  clusterId: "france",
  lat: 46.6034,
  lng: 1.8883,
  location: {
    zh: `法国 · ${francePlaces.length} 个地点`,
    en: `France · ${francePlaces.length} places`,
    fr: `France · ${francePlaces.length} lieux`
  }
};

const globeHost = document.querySelector("#globeViz");
const loading = document.querySelector("#globeLoading");
const dialog = document.querySelector("#fieldDialog");
const dialogClose = document.querySelector("#fieldDialogClose");
const preview = document.querySelector("#fieldPreview");
const cover = document.querySelector("#fieldCover");
const locationLabel = document.querySelector("#fieldLocation");
const typeLabel = document.querySelector("#fieldType");
const title = document.querySelector("#fieldDialogTitle");
const summary = document.querySelector("#fieldSummary");
const coordinateReadout = document.querySelector("#coordinateReadout");
const regionReadout = document.querySelector("#regionReadout");
const introModeButton = document.querySelector("#introModeButton");
const introModePanel = document.querySelector("#introModePanel");
const introModeClose = document.querySelector("#introModeClose");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const savedLanguage = localStorage.getItem("bentootoo-language");

let currentLanguage = globeI18n[savedLanguage] ? savedLanguage : "zh";
let currentReport = null;
let globe;
let hoveredReportId = null;
let pendingReportTimer = 0;
let popupAnimationFrame = 0;
let coordinateAnimationFrame = 0;
let hoverLabelAnimationFrame = 0;
let lastCoordinateUpdate = 0;
let lastPointerPosition = null;
let activeClusterId = null;
let clusterExpansionReadyAt = 0;

function getVisibleGlobeData() {
  if (activeClusterId === "france") return fieldReports;
  return fieldReports.filter((report) => !francePlaceIds.has(report.id)).concat(franceCluster);
}

function applyVisibleGlobeData() {
  if (!globe) return;
  const visibleData = getVisibleGlobeData();
  globe
    .pointsData(visibleData)
    .ringsData(visibleData)
    .htmlElementsData(visibleData);
  refreshPointStyles();
  window.requestAnimationFrame(updateMarkerLabels);
}

function text(key) {
  return globeI18n[currentLanguage]?.[key] || globeI18n.zh[key] || "";
}

function reportText(report) {
  return {
    title: "",
    summary: "",
    type: "",
    location: report.location[currentLanguage] || report.location.zh,
    coverAlt: report.coverAlt?.[currentLanguage] || report.coverAlt?.zh || ""
  };
}

function setLoadingError() {
  if (!loading) return;
  loading.classList.add("is-error");
  const loadingText = loading.querySelector("p");
  if (loadingText) loadingText.textContent = text("loadError");
}

function updateDialog(report) {
  if (!report || !dialog) return;
  const localized = reportText(report);
  const coverWrap = cover?.closest(".field-cover-wrap");
  const enterLink = preview?.querySelector(".field-enter");
  const hasReport = Boolean(report.href);
  currentReport = report;

  if (hasReport) {
    preview.href = report.href;
    preview.removeAttribute("aria-disabled");
  } else {
    preview.removeAttribute("href");
    preview.setAttribute("aria-disabled", "true");
  }

  if (report.cover) cover.src = report.cover;
  else cover.removeAttribute("src");
  cover.alt = localized.coverAlt;
  if (coverWrap) coverWrap.hidden = !report.cover;
  if (enterLink) enterLink.hidden = !hasReport;
  locationLabel.textContent = localized.location;
  typeLabel.textContent = localized.type;
  typeLabel.hidden = !localized.type;
  title.textContent = localized.title;
  title.hidden = !localized.title;
  if (localized.title) {
    dialog.setAttribute("aria-labelledby", "fieldDialogTitle");
    dialog.removeAttribute("aria-label");
  } else {
    dialog.removeAttribute("aria-labelledby");
    dialog.setAttribute("aria-label", localized.location);
  }
  summary.textContent = localized.summary;
  summary.hidden = !localized.summary;
}

function updateMarkerLabels() {
  getVisibleGlobeData().forEach((report) => {
    const marker = document.querySelector(`[data-report-id="${report.id}"]`);
    if (!marker) return;
    const localized = reportText(report);
    marker.setAttribute("aria-label", localized.location);
    const markerLabel = marker.querySelector(".globe-hit-label");
    if (markerLabel) markerLabel.textContent = localized.location;
  });
}

function setLanguage(language) {
  if (!globeI18n[language]) return;
  currentLanguage = language;
  const dictionary = globeI18n[language];

  document.documentElement.lang = dictionary.htmlLang;
  document.title = dictionary.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll(".globe-lang-button").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("bentootoo-language", language);
  if (currentReport) updateDialog(currentReport);
  updateMarkerLabels();
  updateCoordinateText();
}

function positionDialog(event) {
  if (!dialog) return;
  const gap = 24;
  const edge = 12;
  const pointerX = Number.isFinite(event?.clientX) ? event.clientX : window.innerWidth / 2;
  const pointerY = Number.isFinite(event?.clientY) ? event.clientY : window.innerHeight / 2;
  const dialogWidth = Math.min(360, window.innerWidth - edge * 2);
  const dialogHeight = Math.min(dialog.scrollHeight || 510, window.innerHeight - edge * 2);
  const fitsOnRight = pointerX + gap + dialogWidth <= window.innerWidth - edge;
  const left = fitsOnRight ? pointerX + gap : pointerX - gap - dialogWidth;
  const top = pointerY - 74;
  const clampedTop = Math.min(Math.max(top, edge), window.innerHeight - dialogHeight - edge);
  const pointerOffsetY = Math.min(Math.max(pointerY - clampedTop, 28), dialogHeight - 28);

  dialog.classList.toggle("is-left", !fitsOnRight);
  dialog.style.left = `${Math.min(Math.max(left, edge), window.innerWidth - dialogWidth - edge)}px`;
  dialog.style.top = `${clampedTop}px`;
  dialog.style.setProperty("--pointer-offset-y", `${pointerOffsetY}px`);
}

function getReportPointerPosition(report, fallbackEvent) {
  const marker = document.querySelector(`[data-report-id="${report.id}"]`);
  if (!marker) return fallbackEvent;
  const rect = marker.getBoundingClientRect();
  return {
    clientX: rect.left + rect.width / 2,
    clientY: rect.top + rect.height / 2
  };
}

function openReport(report, event) {
  closeReport();
  closeIntroMode();
  updateDialog(report);
  const moveDuration = reducedMotion ? 0 : 820;

  const targetAltitude = activeClusterId === "france" && francePlaceIds.has(report.id) ? 0.68 : 1.55;
  globe?.pointOfView({ lat: report.lat, lng: report.lng, altitude: targetAltitude }, moveDuration);
  pendingReportTimer = window.setTimeout(() => {
    const pointer = getReportPointerPosition(report, event);
    if (!dialog.open) dialog.show();
    positionDialog(pointer);
    document.body.classList.add("field-card-open");
    popupAnimationFrame = window.requestAnimationFrame(() => dialog.classList.add("is-visible"));
  }, moveDuration + (reducedMotion ? 0 : 40));
}

function closeReport() {
  window.clearTimeout(pendingReportTimer);
  window.cancelAnimationFrame(popupAnimationFrame);
  dialog?.classList.remove("is-visible");
  if (dialog?.open) dialog.close();
  document.body.classList.remove("field-card-open");
}

function setIntroMode(open) {
  introModePanel?.classList.toggle("is-open", open);
  introModePanel?.setAttribute("aria-hidden", String(!open));
  introModeButton?.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("intro-mode-open", open);
  if (open) {
    closeReport();
    introModePanel?.removeAttribute("inert");
    introModeClose?.focus({ preventScroll: true });
  } else {
    introModePanel?.setAttribute("inert", "");
  }
}

function closeIntroMode() {
  setIntroMode(false);
}

function refreshPointStyles() {
  if (!globe) return;
  globe
    .pointRadius((report) => {
      if (report.kind === "cluster") return report.id === hoveredReportId ? 1.55 : 1.25;
      return report.id === hoveredReportId ? 1.08 : 0.74;
    })
    .pointAltitude((report) => {
      if (report.kind === "cluster") return report.id === hoveredReportId ? 0.21 : 0.16;
      return report.id === hoveredReportId ? 0.17 : 0.11;
    })
    .pointColor((report) => {
      if (report.id === hoveredReportId) return "#ffffff";
      return report.kind === "cluster" ? "#ffd58a" : "#b9ddff";
    });
}

function expandCluster(cluster) {
  if (!globe || cluster.clusterId !== "france") return;
  const moveDuration = reducedMotion ? 0 : 900;
  closeReport();
  closeIntroMode();
  setHoveredReport(null);
  activeClusterId = "france";
  clusterExpansionReadyAt = performance.now() + moveDuration + 100;
  applyVisibleGlobeData();
  globe.pointOfView({ lat: cluster.lat, lng: cluster.lng, altitude: 0.72 }, moveDuration);
}

function handleGlobeItemClick(report, event) {
  if (report.kind === "cluster") {
    expandCluster(report);
    return;
  }
  openReport(report, event);
}

function collapseExpandedCluster() {
  if (!globe || !activeClusterId) return;
  if (performance.now() < clusterExpansionReadyAt) return;
  if (globe.pointOfView().altitude <= 1.25) return;
  activeClusterId = null;
  clusterExpansionReadyAt = 0;
  setHoveredReport(null);
  applyVisibleGlobeData();
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function positionHoverLabel(marker, pointer = lastPointerPosition) {
  const label = marker?.querySelector(".globe-hit-label");
  if (!marker || !label) return;

  const markerRect = marker.getBoundingClientRect();
  const labelWidth = label.offsetWidth;
  const labelHeight = label.offsetHeight;
  const pointerX = Number.isFinite(pointer?.clientX)
    ? pointer.clientX
    : markerRect.left + markerRect.width / 2;
  const pointerY = Number.isFinite(pointer?.clientY)
    ? pointer.clientY
    : markerRect.top + markerRect.height / 2;
  const viewportMargin = 12;
  const cursorClearance = 32;
  const markerClearance = 18;

  const desiredLeft = pointerX - labelWidth / 2;
  const labelLeft = clamp(
    desiredLeft,
    viewportMargin,
    window.innerWidth - viewportMargin - labelWidth
  );
  const desiredBelow = Math.max(
    pointerY + cursorClearance,
    markerRect.bottom + markerClearance
  );
  const fitsBelow = desiredBelow + labelHeight <= window.innerHeight - viewportMargin;
  const desiredAbove = Math.min(
    pointerY - cursorClearance - labelHeight,
    markerRect.top - markerClearance - labelHeight
  );
  const labelTop = fitsBelow
    ? desiredBelow
    : clamp(desiredAbove, viewportMargin, window.innerHeight - viewportMargin - labelHeight);

  marker.style.setProperty("--label-left", `${labelLeft - markerRect.left}px`);
  marker.style.setProperty("--label-top", `${labelTop - markerRect.top}px`);
  marker.style.setProperty("--label-shift-x", "0px");
}

function scheduleHoverLabelPosition(marker, pointer) {
  window.cancelAnimationFrame(hoverLabelAnimationFrame);
  hoverLabelAnimationFrame = window.requestAnimationFrame(() => positionHoverLabel(marker, pointer));
}

function setHoveredReport(report) {
  hoveredReportId = report?.id || null;
  globeHost.style.cursor = report ? "pointer" : "grab";
  document.querySelectorAll(".globe-hit-target").forEach((marker) => {
    marker.classList.toggle("is-hovered", marker.dataset.reportId === hoveredReportId);
    if (marker.dataset.reportId === hoveredReportId) {
      scheduleHoverLabelPosition(marker, lastPointerPosition);
    }
  });
  refreshPointStyles();
}

function createHitTarget(report) {
  const button = document.createElement("button");
  const label = document.createElement("span");
  const localized = reportText(report);
  button.type = "button";
  button.className = "globe-hit-target";
  button.classList.toggle("is-cluster", report.kind === "cluster");
  button.dataset.reportId = report.id;
  button.setAttribute("aria-label", localized.location);
  label.className = "globe-hit-label";
  label.textContent = localized.location;
  button.append(label);
  button.addEventListener("pointerenter", (event) => {
    lastPointerPosition = { clientX: event.clientX, clientY: event.clientY };
    setHoveredReport(report);
  });
  button.addEventListener("pointermove", (event) => {
    lastPointerPosition = { clientX: event.clientX, clientY: event.clientY };
    scheduleHoverLabelPosition(button, lastPointerPosition);
  });
  button.addEventListener("pointerleave", () => setHoveredReport(null));
  button.addEventListener("focus", () => {
    lastPointerPosition = null;
    setHoveredReport(report);
  });
  button.addEventListener("blur", () => setHoveredReport(null));
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    handleGlobeItemClick(report, event);
  });
  return button;
}

function getRegionKey(lat, lng) {
  if (lat <= -60) return "antarctica";
  if (lat >= -48 && lat <= 2 && lng >= 110 && lng <= 180) return "oceania";
  if (lat >= -56 && lat <= 14 && lng >= -82 && lng <= -34) return "southAmerica";
  if (lat >= 7 && lat <= 84 && lng >= -168 && lng <= -52) return "northAmerica";
  if (lat >= -36 && lat <= 38 && lng >= -18 && lng <= 52) return "africa";
  if (lat >= 35 && lat <= 72 && lng >= -25 && lng <= 45) return "europe";
  if (lat >= 5 && lat <= 82 && lng >= 26 && lng <= 180) return "asia";
  if (lat > 66) return "arctic";
  if (lat < -55) return "southern";
  if (lat < 30 && lng >= 20 && lng <= 120) return "indian";
  if (lng >= -70 && lng <= 20) return "atlantic";
  return "pacific";
}

function formatCoordinate(value, positive, negative) {
  return `${Math.abs(value).toFixed(4)}° ${value >= 0 ? positive : negative}`;
}

function updateCoordinateText() {
  if (!globe || !coordinateReadout || !regionReadout) return;
  const view = globe.pointOfView();
  const lat = Number(view.lat) || 0;
  const lng = Number(view.lng) || 0;
  coordinateReadout.textContent = `${formatCoordinate(lat, "N", "S")} · ${formatCoordinate(lng, "E", "W")}`;
  const regionKey = getRegionKey(lat, lng);
  regionReadout.textContent = globeI18n[currentLanguage].regions[regionKey];
}

function coordinateLoop(time) {
  if (time - lastCoordinateUpdate > 100) {
    updateCoordinateText();
    collapseExpandedCluster();
    lastCoordinateUpdate = time;
  }
  coordinateAnimationFrame = window.requestAnimationFrame(coordinateLoop);
}

function initializeGlobe() {
  if (!globeHost || typeof Globe !== "function") {
    setLoadingError();
    return;
  }

  globe = new Globe(globeHost, {
    rendererConfig: { antialias: true, alpha: true }
  })
    .width(window.innerWidth)
    .height(window.innerHeight)
    .backgroundColor("rgba(0,0,0,0)")
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
    .showAtmosphere(true)
    .atmosphereColor("#8dbdff")
    .atmosphereAltitude(0.18)
    .pointsData(getVisibleGlobeData())
    .pointLat("lat")
    .pointLng("lng")
    .pointResolution(24)
    .ringsData(getVisibleGlobeData())
    .ringLat("lat")
    .ringLng("lng")
    .ringColor((report) => report.kind === "cluster" ? "rgba(255,213,138,0.9)" : "rgba(255,255,255,0.74)")
    .ringMaxRadius((report) => report.kind === "cluster" ? 5.2 : 3.2)
    .ringPropagationSpeed(1.25)
    .ringRepeatPeriod(1450)
    .htmlElementsData(getVisibleGlobeData())
    .htmlLat("lat")
    .htmlLng("lng")
    .htmlAltitude((report) => report.kind === "cluster" ? 0.18 : 0.13)
    .htmlElement(createHitTarget)
    .onPointHover(setHoveredReport)
    .onPointClick(handleGlobeItemClick)
    .onGlobeClick(() => setHoveredReport(null))
    .onGlobeReady(() => loading?.classList.add("is-ready"));

  refreshPointStyles();
  globe.pointOfView({ lat: 48, lng: 64, altitude: 2.25 }, 0);
  updateMarkerLabels();
  updateCoordinateText();
  coordinateAnimationFrame = window.requestAnimationFrame(coordinateLoop);

  const controls = globe.controls();
  controls.enablePan = false;
  controls.enableDamping = !reducedMotion;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.65;
  controls.zoomSpeed = 0.8;
  controls.minDistance = 115;
  controls.maxDistance = 520;
  controls.addEventListener("start", closeReport);
  controls.addEventListener("end", collapseExpandedCluster);

  const globeMaterial = globe.globeMaterial();
  globeMaterial.bumpScale = 4;
  globeMaterial.shininess = 0.7;
}

document.querySelectorAll(".globe-lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
introModeButton?.addEventListener("click", () => {
  setIntroMode(introModeButton.getAttribute("aria-expanded") !== "true");
});
introModeClose?.addEventListener("click", closeIntroMode);
dialogClose?.addEventListener("click", closeReport);
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeReport();
});
dialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeReport();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeReport();
    closeIntroMode();
  }
});

document.addEventListener("pointerdown", (event) => {
  if (dialog?.open && !dialog.contains(event.target) && !globeHost?.contains(event.target)) closeReport();
});

document.addEventListener("pointermove", (event) => {
  lastPointerPosition = { clientX: event.clientX, clientY: event.clientY };
  if (!hoveredReportId) return;
  const marker = document.querySelector(`[data-report-id="${hoveredReportId}"]`);
  scheduleHoverLabelPosition(marker, lastPointerPosition);
});

window.addEventListener("resize", () => {
  globe?.width(window.innerWidth).height(window.innerHeight);
});

window.addEventListener("error", (event) => {
  if (!globe && String(event.filename || "").includes("globe")) setLoadingError();
}, true);

setLanguage(currentLanguage);
initializeGlobe();
