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
    id: "changsha-campus-memory",
    lat: 28.2282,
    lng: 112.9388,
    location: {
      zh: "中国 · 湖南 · 长沙",
      en: "Changsha · Hunan · China",
      fr: "Changsha · Hunan · Chine"
    },
    cover: "assets/project-classroom-credit.png",
    coverAlt: {
      zh: "夕阳下的校园周边街区",
      en: "A neighborhood near a campus at sunset",
      fr: "Un quartier proche d'un campus au coucher du soleil"
    },
    href: "reports/changsha-campus-memory.html"
  },
  {
    id: "tromso-winter-notes",
    lat: 69.6492,
    lng: 18.9553,
    location: {
      zh: "挪威 · 特罗姆瑟",
      en: "Tromsø · Norway",
      fr: "Tromsø · Norvège"
    },
    cover: "assets/cool_dude.jpeg",
    coverAlt: {
      zh: "特罗姆瑟海湾与雪山前的合影",
      en: "A portrait beside the bay and snowy mountains in Tromsø",
      fr: "Un portrait devant la baie et les montagnes enneigées de Tromsø"
    },
    href: "reports/tromso-winter-notes.html"
  }
];

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

function text(key) {
  return globeI18n[currentLanguage]?.[key] || globeI18n.zh[key] || "";
}

function reportText(report) {
  return {
    title: text("testTitle"),
    summary: text("testSummary"),
    type: text("testCategory"),
    location: report.location[currentLanguage] || report.location.zh,
    coverAlt: report.coverAlt[currentLanguage] || report.coverAlt.zh
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
  currentReport = report;
  preview.href = report.href;
  cover.src = report.cover;
  cover.alt = localized.coverAlt;
  locationLabel.textContent = localized.location;
  typeLabel.textContent = localized.type;
  title.textContent = localized.title;
  summary.textContent = localized.summary;
}

function updateMarkerLabels() {
  fieldReports.forEach((report) => {
    const marker = document.querySelector(`[data-report-id="${report.id}"]`);
    if (!marker) return;
    const localized = reportText(report);
    marker.setAttribute("aria-label", `${text("markerLabel")} ${localized.location}：${localized.title}`);
    const markerLabel = marker.querySelector(".globe-hit-label");
    if (markerLabel) markerLabel.textContent = `${localized.location} · ${localized.title}`;
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

  globe?.pointOfView({ lat: report.lat, lng: report.lng, altitude: 1.55 }, moveDuration);
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
    .pointRadius((report) => report.id === hoveredReportId ? 1.08 : 0.74)
    .pointAltitude((report) => report.id === hoveredReportId ? 0.17 : 0.11)
    .pointColor((report) => report.id === hoveredReportId ? "#ffffff" : "#b9ddff");
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
  button.dataset.reportId = report.id;
  button.setAttribute("aria-label", `${text("markerLabel")} ${localized.location}：${localized.title}`);
  label.className = "globe-hit-label";
  label.textContent = `${localized.location} · ${localized.title}`;
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
    openReport(report, event);
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
    .pointsData(fieldReports)
    .pointLat("lat")
    .pointLng("lng")
    .pointResolution(24)
    .ringsData(fieldReports)
    .ringLat("lat")
    .ringLng("lng")
    .ringColor(() => "rgba(255,255,255,0.74)")
    .ringMaxRadius(3.2)
    .ringPropagationSpeed(1.25)
    .ringRepeatPeriod(1450)
    .htmlElementsData(fieldReports)
    .htmlLat("lat")
    .htmlLng("lng")
    .htmlAltitude(0.13)
    .htmlElement(createHitTarget)
    .onPointHover(setHoveredReport)
    .onPointClick((report, event) => openReport(report, event))
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
