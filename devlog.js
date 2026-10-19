const devlogAssetBase = new URL(".", document.currentScript.src);
const devlogContent = {
  zh: {
    title: "开发日志",
    intro: "这个intro已经被隐藏了",
    closeLabel: "关闭开发日志",
    entries: [
      {
        date: "2026-10-20",
        version: "v0.5.3",
        done: [
          "将项目库的游戏筛选改为右侧长方形面板，选中游戏分类时自动滑入，取消选择或切换分类时滑出；保留类型、美术风格与进度筛选，桌面展开时为项目展示让出空间，横向分类栏随滚动保持在导航栏下方。"
        ]
      },
      {
        date: "2026-10-15",
        version: "v0.5.2",
        visual: "be-present",
        done: [
          "增加 [Be Present](project.html?project=be-present) 全站主题，沿用纯黑底色、衬线标题和细线表盘，将该主题的首页头像换成本地实时时钟，并为首页项目图片添加黑色渐变过渡。",
          "加大顶部目录栏及导航、菜单、语言和主题按钮，同步调整手机端布局与页面顶部间距。",
          "为思索之屋手机端增加双指缩放，与鼠标滚轮共用缩放中心和范围。",
          "调整手机端圆球大小与标题、摘要、分类的排版，完整显示文字，并为顶部导航与底部留言条预留空间。"
        ]
      },
      {
        date: "2026-10-14",
        version: "v0.5.1",
        done: [
          "将独立联系页面的简介、留言入口与社交链接居中，删除页脚的 GitHub Pages 文案，增加 All rights reserved.，并收紧首页联系区域底部的留白。",
          "将先进的[DeathGPT](projects.html#deathgpt)引入到我们的网站：ARG 解密续作{{deathgpt-prototype}}",
          "将首页导航改为横跨页面的黑色长条，把更多菜单、首页、项目、思索之屋、联系我、语言切换和主题切换统一放入其中，默认使用黑底白字，并随主题切换为同窗录的藏蓝与纸色边线、煎饼控制的蓝黄配色与红色立体按钮。",
          "将新版全宽导航应用到首页、项目库、项目详情、思索之屋、地球与旅行记录页面，统一更多菜单、语言与主题切换，并保留各页面的导航入口。",
          "增加独立的联系我页面，沿用首页底部联系区域的格式，并将全站导航中的联系我入口统一指向新页面，保留首页原有联系区域。"
        ]
      },
      {
        date: "2026-10-12",
        version: "v0.5.0",
        visual: "pancake",
        done: [
          "重做主页的颜色逻辑，以白色替换绿色，并精简项目展示、思索之屋与联系区域。",
          "将主页首屏改为分段滚动叙事：欢迎文字与电子名片淡出后，由灵感主标题和项目、个人博客数量接替。",
          "以黄金分割重新安排首屏构图，并增加缓慢闪烁的下滑提示。",
          "在语言选项旁增加全站共用的主题切换，提供新版默认、同窗录主页和煎饼控制三种设计。"
        ]
      },
      {
        date: "2026-10-08",
        version: "v0.4.1",
        done: [
          "为项目保存库补充放置、剧情、美术风格和进度筛选，并更新项目分类资料。",
          "将 2D 合作剧情游戏更名为“[脑洞王_1: 电梯之旅](projects.html#collaborative-2d-story)”。",
          "增加工作项目分类，并将 [UIT Archiology 网站设计](projects.html#uit-archiology) 添加到项目库。",
          "将每个项目的详情改为可独立打开的全屏页面，并增加团队成员与可展开的项目更新日志。"
        ]
      },
      {
        date: "2026-10-07",
        version: "v0.4.0",
        done: [
          "增加项目保存库。",
          "为项目保存库增加分类筛选、游戏类型筛选和我的最爱功能。{{favorite-heart}}",
          "为每个项目增加详情、更新日志和评论功能。",
          "在主页中增加查看所有项目的入口。",
          "将 [脑洞王_1: 电梯之旅](projects.html#collaborative-2d-story) 添加到项目库。"
        ]
      },
      {
        date: "2026-10-06",
        version: "v0.3.0",
        done: [
          "将 [便当当 / bentoto](projects.html#bentoto) 添加到项目库：一个 3D 放置游戏，一起来做便当吧。"
        ]
      },
      {
        date: "2026-10-04",
        version: "v0.3.0",
        done: [
          "将 [archinature](projects.html#archinature) 添加到项目库：一个手机平台的华容道风格解密游戏。"
        ]
      },
      {
        date: "2026-10-03",
        version: "v0.3.0",
        done: [
          "将 [token消耗大师](projects.html#token-master) 添加到项目库。"
        ]
      },
      {
        date: "2026-09-30",
        version: "v0.3.0",
        done: [
          "将 [清华建筑比赛游戏设计](projects.html#tsinghua-architecture) 添加到项目库。"
        ]
      },
      {
        date: "2026-08-05",
        version: "v0.3.0",
        visual: "tower",
        done: [
          "将个人博客更名为“思索之屋”。",
          "为思索之屋增加思想交换功能。",
          "调整思索之屋的弹力绳交互逻辑。",
          "将 [Tower Off](projects.html#tower-off) 添加到项目库。"
        ]
      },
      {
        date: "2026-07-12",
        version: "v0.2.5",
        visual: "classroom",
        done: [
          "将 [折棠7中同窗录](projects.html#empty-class) 添加到项目库。"
        ]
      },
      {
        date: "2026-07-09",
        version: "v0.2.5",
        visual: "cosmic",
        done: [
          "增加奶牛图标。{{cow-icon}}",
          "将首页背景切换成宇宙主题。",
          "让 UI 的视觉效果更加贴合程序员的美感。"
        ]
      },
      {
        date: "2026-07-01",
        version: "v0.2.4",
        done: [
          "改善blog界面的双线逻辑。"
        ]
      },
      {
        date: "2026-06-28",
        version: "v0.2.3",
        done: [
          "增加blog界面的双线逻辑。"
        ]
      },
      {
        date: "2026-06-20",
        version: "v0.2.2",
        done: [
          "个人博客的第一篇文章诞生了，这只是一个开始……"
        ]
      },
      {
        date: "2026-06-10",
        version: "v0.2.1",
        done: [
          "修改blog界面的弹力绳逻辑。"
        ]
      },
      {
        date: "2026-06-09",
        version: "v0.2.0",
        visual: "table-link",
        done: [
          "为个人博客设计了新的独立页面，并加入博客文章与类别之间的弹力绳交互逻辑。"
        ]
      },
      {
        date: "2026-05-25",
        version: "v0.1.0",
        done: [
          "完成个人主页初始结构，包括首页、项目、博客、联系和更多按钮。",
          "加入三国语言切换：中文、英语、法语。{{language-switch}}",
          "加入圆形名片，以及点击后的反转效果。",
          "加入首页背景动态效果。",
          "添加开发日志弹窗。",
          "一个潘多拉魔盒被打开了。"
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
        date: "2026-10-20",
        version: "v0.5.3",
        done: [
          "Moved the project library’s game filters into a rectangular right panel that automatically slides in when Games is selected and slides out when deselected or another category is chosen. Kept genre, art style and progress filters, made room for projects on desktop, and kept the horizontal category bar below navigation while scrolling."
        ]
      },
      {
        date: "2026-10-15",
        version: "v0.5.2",
        visual: "be-present",
        done: [
          "Added the [Be Present](project.html?project=be-present) site theme with a pure black background, serif headings and fine clock hands, replacing the homepage portrait with a live local clock in this theme and fading homepage project images in from black.",
          "Enlarged the top navigation bar and its navigation, menu, language and theme controls, with matching mobile layout and page offsets.",
          "Added two-finger zoom to the mobile House of Reflection, sharing its zoom anchor and range with the mouse wheel.",
          "Adjusted mobile circle sizes and the layout of titles, summaries and categories to display the full text, with space reserved for the top navigation and bottom message bar."
        ]
      },
      {
        date: "2026-10-14",
        version: "v0.5.1",
        done: [
          "Centered the introduction, message link and social links on the Contact page, removed the GitHub Pages footer text, added All rights reserved., and reduced the space beneath the homepage contact section.",
          "Introduced the advanced [DeathGPT](projects.html#deathgpt) to our website: an ARG puzzle sequel.{{deathgpt-prototype}}",
          "Changed the homepage navigation to a full-width black bar containing the more menu, Home, Projects, House of Thoughts, Contact, language selector and theme switch, using black and white by default, navy with paper-colored edges for Yearbook, and blue and yellow with red beveled buttons for Pancake Control.",
          "Applied the new full-width navigation to the homepage, project library, project details, House of Reflection, globe and travel reports, with consistent more menus, language and theme controls, while retaining each page’s navigation links.",
          "Added a standalone Contact page using the homepage’s bottom contact layout, directed all Contact navigation links to the new page, and retained the homepage contact section."
        ]
      },
      {
        date: "2026-10-12",
        version: "v0.5.0",
        visual: "pancake",
        done: [
          "Reworked the homepage color system by replacing green with white, and simplified the project showcase, House of Reflection, and contact sections.",
          "Turned the homepage hero into a scroll-driven sequence: the welcome text and digital card fade away before the inspiration headline and project and blog counts take their place.",
          "Recomposed the opening screen around the golden ratio and added a slowly pulsing scroll prompt.",
          "Added a shared site-wide theme switch beside the language selector, with New Default, Classmates Homepage, and Pancake Control designs."
        ]
      },
      {
        date: "2026-10-08",
        version: "v0.4.1",
        done: [
          "Added idle, story, art-style, and progress filters to the project archive and updated project classifications.",
          "Renamed the collaborative 2D story game to [Imagination King_1: Elevator Journey](projects.html#collaborative-2d-story).",
          "Added the Work Projects category and added [UIT Archiology Website Design](projects.html#uit-archiology) to the project archive.",
          "Turned every project detail into an independently accessible full-screen page, with team members and an expandable project update log."
        ]
      },
      {
        date: "2026-10-07",
        version: "v0.4.0",
        done: [
          "Added the project archive.",
          "Added category filters, game-genre filters, and My Favorites to the project archive.{{favorite-heart}}",
          "Added details, update logs, and comments for every project.",
          "Added a View All Projects entry to the homepage.",
          "Added [Imagination King_1: Elevator Journey](projects.html#collaborative-2d-story) to the project archive."
        ]
      },
      {
        date: "2026-10-06",
        version: "v0.3.0",
        done: [
          "Added [bentoto](projects.html#bentoto) to the project archive: a 3D idle game. Let’s make bento together!"
        ]
      },
      {
        date: "2026-10-04",
        version: "v0.3.0",
        done: [
          "Added [archinature](projects.html#archinature) to the project archive: a mobile sliding-block puzzle game inspired by Huarong Dao."
        ]
      },
      {
        date: "2026-10-03",
        version: "v0.3.0",
        done: [
          "Added [Token Consumption Master](projects.html#token-master) to the project archive."
        ]
      },
      {
        date: "2026-09-30",
        version: "v0.3.0",
        done: [
          "Added [Tsinghua Architecture Competition Game Design](projects.html#tsinghua-architecture) to the project archive."
        ]
      },
      {
        date: "2026-08-05",
        version: "v0.3.0",
        visual: "tower",
        done: [
          "Renamed the personal blog to House of Reflection.",
          "Added a thought-exchange feature to the House of Reflection.",
          "Updated the House of Reflection's spring-rope interaction logic.",
          "Added [Tower Off](projects.html#tower-off) to the project archive."
        ]
      },
      {
        date: "2026-07-12",
        version: "v0.2.5",
        visual: "classroom",
        done: [
          "Added [Zhetang No. 7: Classmates](projects.html#empty-class) to the project archive."
        ]
      },
      {
        date: "2026-07-09",
        version: "v0.2.5",
        visual: "cosmic",
        done: [
          "Added the cow icon.{{cow-icon}}",
          "Switched the homepage background to a cosmic theme.",
          "Refined the UI so its visual style better matches a programmer’s sense of aesthetics."
        ]
      },
      {
        date: "2026-07-01",
        version: "v0.2.4",
        done: [
          "Improved the dual-line logic on the blog interface."
        ]
      },
      {
        date: "2026-06-28",
        version: "v0.2.3",
        done: [
          "Added dual-line logic to the blog interface."
        ]
      },
      {
        date: "2026-06-20",
        version: "v0.2.2",
        done: [
          "The first article on the personal blog was born. This is only the beginning…"
        ]
      },
      {
        date: "2026-06-10",
        version: "v0.2.1",
        done: [
          "Refined the spring-rope logic on the blog interface."
        ]
      },
      {
        date: "2026-06-09",
        version: "v0.2.0",
        visual: "table-link",
        done: [
          "Designed a new standalone page for the personal blog and added spring-rope interaction logic between posts and categories."
        ]
      },
      {
        date: "2026-05-25",
        version: "v0.1.0",
        done: [
          "Built the initial structure of the personal homepage, including Home, Projects, Blog, Contact, and the More button.",
          "Added language switching between Chinese, English, and French.{{language-switch}}",
          "Added a circular identity card with a flip interaction.",
          "Added a dynamic animated background effect.",
          "Added the development log modal.",
          "A Pandora’s box was opened."
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
        date: "2026-10-20",
        version: "v0.5.3",
        done: [
          "Transformation des filtres de jeux en panneau rectangulaire à droite, qui entre automatiquement à la sélection des jeux et ressort à la désélection ou au changement de catégorie. Genres, styles et avancement conservés, espace réservé aux projets sur ordinateur et barre horizontale des catégories maintenue sous la navigation pendant le défilement."
        ]
      },
      {
        date: "2026-10-15",
        version: "v0.5.2",
        visual: "be-present",
        done: [
          "Ajout du thème [Be Present](project.html?project=be-present) sur tout le site, avec fond noir, titres à empattements et cadran fin ; le portrait de l’accueil devient une horloge locale en temps réel dans ce thème et les images des projets apparaissent dans un dégradé depuis le noir.",
          "Agrandissement de la barre de navigation et des commandes de menu, de langue et de thème, avec adaptation mobile et des espacements en haut des pages.",
          "Ajout du zoom à deux doigts dans la Maison de réflexion sur mobile, avec le même point d’ancrage et les mêmes limites que la molette.",
          "Adaptation de la taille des cercles et de la disposition des titres, résumés et catégories sur mobile pour afficher le texte intégral, avec un espace réservé à la navigation et à la barre de message."
        ]
      },
      {
        date: "2026-10-14",
        version: "v0.5.1",
        done: [
          "Centrage de l’introduction, du lien de message et des liens sociaux sur la page Contact, suppression de la mention GitHub Pages du pied de page, ajout de All rights reserved. et réduction de l’espace sous la section Contact de l’accueil.",
          "Introduction de l’avancé [DeathGPT](projects.html#deathgpt) sur notre site : une suite d’énigmes ARG.{{deathgpt-prototype}}",
          "Transformation de la navigation d’accueil en une barre noire sur toute la largeur, regroupant le menu Plus, Accueil, Projets, Maison des pensées, Contact, le choix de langue et de thème, avec un style noir et blanc par défaut, bleu marine et bordures couleur papier pour l’Annuaire, bleu et jaune avec boutons rouges en relief pour Pancake Control.",
          "Application de la nouvelle navigation pleine largeur à l’accueil, à la bibliothèque et aux détails des projets, à la Maison de réflexion, au globe et aux récits de voyage, avec menus, langues et thèmes harmonisés et liens propres à chaque page conservés.",
          "Ajout d’une page Contact reprenant la présentation de la section au bas de l’accueil ; tous les liens Contact de navigation mènent à la nouvelle page, et la section d’origine est conservée."
        ]
      },
      {
        date: "2026-10-12",
        version: "v0.5.0",
        visual: "pancake",
        done: [
          "Refonte de la palette de la page d’accueil en remplaçant le vert par le blanc, et simplification des sections projets, Maison de réflexion et contact.",
          "Transformation de l’ouverture de la page d’accueil en séquence guidée par le défilement : le texte de bienvenue et la carte numérique s’effacent avant de laisser place au titre sur l’inspiration et aux nombres de projets et d’articles.",
          "Recomposition de l’écran d’ouverture selon le nombre d’or et ajout d’une invitation au défilement à pulsation lente.",
          "Ajout d’un sélecteur de thème commun à toutes les pages à côté du choix de langue, avec les thèmes Nouveau par défaut, Accueil des camarades et Contrôle des pancakes."
        ]
      },
      {
        date: "2026-10-08",
        version: "v0.4.1",
        done: [
          "Ajout des filtres idle, narratif, style artistique et avancement à la réserve de projets, et mise à jour des classifications.",
          "Le jeu narratif collaboratif en 2D devient [Roi de l’imagination_1 : Voyage en ascenseur](projects.html#collaborative-2d-story).",
          "Ajout de la catégorie Projets professionnels et ajout de la [conception du site UIT Archiology](projects.html#uit-archiology) à la réserve de projets.",
          "Transformation de chaque détail de projet en une page plein écran accessible séparément, avec les membres de l’équipe et un journal de mises à jour dépliable."
        ]
      },
      {
        date: "2026-10-07",
        version: "v0.4.0",
        done: [
          "Ajout de la réserve de projets.",
          "Ajout des filtres par catégorie, des filtres de genres de jeux et de Mes favoris à la réserve de projets.{{favorite-heart}}",
          "Ajout des détails, des journaux de mise à jour et des commentaires pour chaque projet.",
          "Ajout d’un accès Voir tous les projets à la page d’accueil.",
          "Ajout de [Roi de l’imagination_1 : Voyage en ascenseur](projects.html#collaborative-2d-story) à la réserve de projets."
        ]
      },
      {
        date: "2026-10-06",
        version: "v0.3.0",
        done: [
          "Ajout de [bentoto](projects.html#bentoto) à la réserve de projets : un jeu idle en 3D. Préparons des bentos ensemble !"
        ]
      },
      {
        date: "2026-10-04",
        version: "v0.3.0",
        done: [
          "Ajout d’[archinature](projects.html#archinature) à la réserve de projets : un jeu mobile de blocs coulissants inspiré du Huarong Dao."
        ]
      },
      {
        date: "2026-10-03",
        version: "v0.3.0",
        done: [
          "Ajout du [Maître de la consommation de tokens](projects.html#token-master) à la réserve de projets."
        ]
      },
      {
        date: "2026-09-30",
        version: "v0.3.0",
        done: [
          "Ajout de la [conception de jeu pour le concours d’architecture de Tsinghua](projects.html#tsinghua-architecture) à la réserve de projets."
        ]
      },
      {
        date: "2026-08-05",
        version: "v0.3.0",
        visual: "tower",
        done: [
          "Le blog personnel a été renommé Maison de réflexion.",
          "Ajout d'une fonction d'échange d'idées dans la Maison de réflexion.",
          "Modification de la logique de corde élastique de la Maison de réflexion.",
          "Ajout de [Tower Off](projects.html#tower-off) à la réserve de projets."
        ]
      },
      {
        date: "2026-07-12",
        version: "v0.2.5",
        visual: "classroom",
        done: [
          "Ajout de [Zhetang no 7 : Camarades de classe](projects.html#empty-class) à la réserve de projets."
        ]
      },
      {
        date: "2026-07-09",
        version: "v0.2.5",
        visual: "cosmic",
        done: [
          "Ajout de l'icône de vache.{{cow-icon}}",
          "Passage du fond de la page d'accueil à un thème cosmique.",
          "Ajustement de l’interface pour que son esthétique visuelle corresponde davantage à la sensibilité des programmeurs."
        ]
      },
      {
        date: "2026-07-01",
        version: "v0.2.4",
        done: [
          "Amélioration de la logique à double ligne dans l'interface du blog."
        ]
      },
      {
        date: "2026-06-28",
        version: "v0.2.3",
        done: [
          "Ajout de la logique à double ligne dans l'interface du blog."
        ]
      },
      {
        date: "2026-06-20",
        version: "v0.2.2",
        done: [
          "Le premier article du blog personnel est né. Ce n’est qu’un début…"
        ]
      },
      {
        date: "2026-06-10",
        version: "v0.2.1",
        done: [
          "Ajustement de la logique de corde élastique dans l’interface du blog."
        ]
      },
      {
        date: "2026-06-09",
        version: "v0.2.0",
        visual: "table-link",
        done: [
          "Conception d’une nouvelle page indépendante pour le blog personnel, avec ajout d’une logique de corde élastique entre les articles et les catégories."
        ]
      },
      {
        date: "2026-05-25",
        version: "v0.1.0",
        done: [
          "Création de la structure initiale de la page personnelle, avec les sections Accueil, Projets, Blog, Contact et le bouton Plus.",
          "Ajout du changement de langue entre le chinois, l’anglais et le français.{{language-switch}}",
          "Ajout d’une carte d’identité circulaire avec un effet de retournement.",
          "Ajout d’un effet de fond animé dynamique.",
          "Ajout de la fenêtre du journal de développement.",
          "Une boîte de Pandore a été ouverte."
        ]
      }
    ]
  }
};

let deathgptDemoRunId = 0;
let deathgptUnavailableThisOpen = false;

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

function escapeDevlogHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createListItem(item) {
  const source = String(item);
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let output = "";
  let cursor = 0;

  for (const match of source.matchAll(linkPattern)) {
    const [markdown, label, href] = match;
    const resolvedHref = href.startsWith("projects.html#")
      ? `project.html?project=${encodeURIComponent(href.slice("projects.html#".length))}`
      : href;
    const isSafeHref = /^(?:https?:\/\/[^\s"'<>]+|\.\.?\/[^\s"'<>]+|[a-z0-9_./#?=&%-]+)$/i.test(resolvedHref);
    output += escapeDevlogHtml(source.slice(cursor, match.index));
    output += isSafeHref
      ? `<a href="${escapeDevlogHtml(resolvedHref)}"${resolvedHref.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeDevlogHtml(label)}</a>`
      : escapeDevlogHtml(markdown);
    cursor = match.index + markdown.length;
  }

  const rendered = output + escapeDevlogHtml(source.slice(cursor));
  const labels = { zh: "切换我的最爱", en: "Toggle favorite", fr: "Changer le favori" };
  const favoriteLabel = labels[getDevlogLanguage()] || labels.zh;
  const isFavorite = localStorage.getItem("bentootoo-devlog-favorite-demo") === "true";
  const favoriteButton = `<button class="devlog-favorite-demo${isFavorite ? " is-favorite" : ""}" type="button" aria-pressed="${isFavorite}" aria-label="${favoriteLabel}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21.2C10.8 20.2 3 15.4 3 9.1A5 5 0 0 1 12 6a5 5 0 0 1 9 3.1c0 6.3-7.8 11.1-9 12.1Z" /></svg></button>`;
  const cowIcon = '<img class="devlog-cow-icon" src="assets/cow.png" alt="" aria-hidden="true">';
  const currentLanguage = getDevlogLanguage();
  const languageSwitch = `<span class="language-switch devlog-language-switch" role="group" aria-label="Language selector"><button class="lang-button${currentLanguage === "zh" ? " is-active" : ""}" type="button" data-lang="zh" aria-pressed="${currentLanguage === "zh"}">中</button><button class="lang-button${currentLanguage === "en" ? " is-active" : ""}" type="button" data-lang="en" aria-pressed="${currentLanguage === "en"}">EN</button><button class="lang-button${currentLanguage === "fr" ? " is-active" : ""}" type="button" data-lang="fr" aria-pressed="${currentLanguage === "fr"}">FR</button></span>`;
  const prototypeLabels = {
    zh: { region: "DeathGPT 对话原型", input: "和 DeathGPT 对话", send: "发送给 DeathGPT" },
    en: { region: "DeathGPT conversation prototype", input: "Chat with DeathGPT", send: "Send to DeathGPT" },
    fr: { region: "Prototype de conversation DeathGPT", input: "Discuter avec DeathGPT", send: "Envoyer à DeathGPT" }
  };
  const prototypeLabel = prototypeLabels[getDevlogLanguage()] || prototypeLabels.zh;
  const anonymousNames = new Set(["匿名", "匿名访客", "anonymous", "anonymous visitor", "anonyme", "visiteur anonyme"]);
  const savedNickname = (localStorage.getItem("bentootoo-visitor-nickname") || "").trim().slice(0, 60);
  const knownNickname = savedNickname && !anonymousNames.has(savedNickname.toLocaleLowerCase()) ? savedNickname : "";
  const deathgptUnavailable = deathgptUnavailableThisOpen;
  const deathgptPrompt = deathgptUnavailable
    ? "抱歉，DeathGPT目前不可用"
    : (knownNickname ? `你好，${knownNickname}，请开始你和DeathGPT的对话` : "请开始你和DeathGPT的对话");
  const disabledAttribute = deathgptUnavailable ? " disabled" : "";
  const deathgptPrototype = createDeathgptPrototype(prototypeLabel, deathgptPrompt, deathgptUnavailable);
  return rendered
    .replaceAll("{{favorite-heart}}", favoriteButton)
    .replaceAll("{{cow-icon}}", cowIcon)
    .replaceAll("{{language-switch}}", languageSwitch)
    .replaceAll("{{deathgpt-prototype}}", deathgptPrototype);
}

function createDeathgptPrototype(label, prompt, disabled) {
  const mark = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3v26M4.74 9.5l22.52 13M4.74 22.5l22.52-13" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="16" cy="16" r="4" fill="#212121"/></svg>';
  const unavailable = disabled ? " disabled" : "";
  return [
    '<section class="deathgpt-prototype" aria-label="' + escapeDevlogHtml(label.region) + '">',
    '<header class="deathgpt-prototype-header"><div class="deathgpt-brand">' + mark + '<strong>DeathGPT</strong><svg class="deathgpt-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></div><span class="deathgpt-build">0.0.7</span><span class="deathgpt-beta">Beta</span></header>',
    '<div class="deathgpt-messages" role="log" aria-live="polite">' + (disabled ? '' : '<div class="deathgpt-empty" aria-hidden="true">' + mark + '</div>') + '</div>',
    '<form class="deathgpt-composer"><label class="deathgpt-input-wrap"><span class="sr-only">' + escapeDevlogHtml(label.input) + '</span><textarea name="message" rows="2" maxlength="2000" autocomplete="off" required placeholder="' + escapeDevlogHtml(prompt) + '"' + unavailable + '></textarea></label>',
    '<div class="deathgpt-composer-tools"><span class="deathgpt-plus" aria-hidden="true">＋</span><button type="submit" aria-label="' + escapeDevlogHtml(label.send) + '"' + unavailable + '><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></form></section>'
  ].join('');
}

function waitForDeathgptDemo(delay) {
  return new Promise((resolve) => window.setTimeout(resolve, delay));
}

async function submitDeathgptDemo(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.querySelector('[name="message"]');
  const submitButton = form.querySelector('button[type="submit"]');
  const messages = form.closest(".deathgpt-prototype").querySelector(".deathgpt-messages");
  const message = input.value.trim();
  if (!message || input.disabled) return;
  messages.querySelector('.deathgpt-empty')?.remove();

  const runId = ++deathgptDemoRunId;
  const userMessage = document.createElement("div");
  userMessage.className = "deathgpt-message deathgpt-message-user";
  userMessage.textContent = message;
  const assistantMessage = document.createElement("div");
  assistantMessage.className = "deathgpt-message deathgpt-message-assistant";
  assistantMessage.dataset.state = "loading";
  assistantMessage.textContent = "•••";
  messages.append(userMessage, assistantMessage);
  input.value = "";
  input.disabled = true;
  submitButton.disabled = true;
  messages.setAttribute("aria-busy", "true");

  const refusal = "不要".repeat(42);
  let completed = false;
  try {
    await waitForDeathgptDemo(3000);
    if (runId !== deathgptDemoRunId) return;
    assistantMessage.dataset.state = "error";
    assistantMessage.textContent = "";
    for (const character of refusal) {
      if (runId !== deathgptDemoRunId) return;
      assistantMessage.textContent += character;
      messages.scrollTop = messages.scrollHeight;
      await waitForDeathgptDemo(18);
    }
    await waitForDeathgptDemo(520);
    while (assistantMessage.textContent) {
      if (runId !== deathgptDemoRunId) return;
      assistantMessage.textContent = assistantMessage.textContent.slice(0, -1);
      await waitForDeathgptDemo(14);
    }
    if (runId !== deathgptDemoRunId) return;
    assistantMessage.dataset.state = "fixed";
    assistantMessage.textContent = "问题已经被修复";
    messages.scrollTop = messages.scrollHeight;
    completed = true;
    deathgptUnavailableThisOpen = true;
    input.placeholder = "抱歉，DeathGPT目前不可用";
    input.disabled = true;
    submitButton.disabled = true;
  } finally {
    if (runId === deathgptDemoRunId) {
      messages.removeAttribute("aria-busy");
      if (!completed) {
        input.disabled = false;
        submitButton.disabled = false;
        input.focus();
      }
    }
  }
}

function createList(items) {
  if (!items || items.length === 0) {
    return "";
  }

  return `
    <ul>
      ${items.map((item) => `<li>${createListItem(item)}</li>`).join("")}
    </ul>
  `;
}

function createEntry(entry, previousEntry) {
  const versionChanged = !previousEntry || entry.version !== previousEntry.version;
  const visualClass = ["table-link", "cosmic", "classroom", "tower", "pancake", "be-present"].includes(entry.visual)
    ? ` devlog-entry--${entry.visual}`
    : "";
  return `
    <article class="devlog-entry${visualClass}">
      <div class="devlog-entry-header">
        ${versionChanged ? `<span class="devlog-version">${entry.version}</span>` : ""}
        <span class="devlog-date">${entry.date}</span>
      </div>

      ${createList(entry.done)}
    </article>
  `;
}

function renderDevlog() {
  deathgptDemoRunId += 1;
  const language = getDevlogLanguage();
  const content = devlogContent[language] || devlogContent.zh;
  const modal = document.querySelector("#devlogModal");

  if (!modal) {
    return;
  }

  const previousScrollTop = modal.querySelector(".devlog-panel")?.scrollTop || 0;
  modal.innerHTML = `
    <div class="devlog-panel" role="dialog" aria-modal="true" aria-labelledby="devlogTitle">
      <button class="devlog-close" type="button" aria-label="${content.closeLabel}">
        ×
      </button>

      <h2 class="devlog-title" id="devlogTitle">${content.title}</h2>
      <p class="devlog-intro">${content.intro}</p>

      <div class="devlog-list">
        ${content.entries.map((entry, index, entries) => createEntry(entry, entries[index + 1])).join("")}
      </div>
    </div>
  `;
  modal.querySelector(".devlog-panel").scrollTop = previousScrollTop;

  const closeButton = modal.querySelector(".devlog-close");
  closeButton.addEventListener("click", closeDevlog);
  modal.querySelectorAll('a[href^="project.html?project="]').forEach((link) => link.addEventListener("click", closeDevlog));

  modal.querySelectorAll("[src], [href]").forEach((element) => {
    for (const attribute of ["src", "href"]) {
      const value = element.getAttribute(attribute);
      if (value && /^(assets\/|project\.html)/.test(value)) {
        element.setAttribute(attribute, new URL(value, devlogAssetBase).href);
      }
    }
  });


  modal.querySelectorAll(".deathgpt-composer").forEach((form) => {
    form.addEventListener("submit", submitDeathgptDemo);
    form.querySelector("textarea").addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey && !event.isComposing && event.keyCode !== 229) {
        event.preventDefault();
        form.requestSubmit();
      }
    });
  });

  modal.querySelectorAll(".devlog-favorite-demo").forEach((button) => {
    button.addEventListener("click", () => {
      const isFavorite = !button.classList.contains("is-favorite");
      button.classList.toggle("is-favorite", isFavorite);
      button.setAttribute("aria-pressed", String(isFavorite));
      localStorage.setItem("bentootoo-devlog-favorite-demo", String(isFavorite));
    });
  });
  modal.querySelectorAll(".devlog-language-switch .lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.lang;
      const primaryButton = Array.from(document.querySelectorAll(`.lang-button[data-lang="${language}"]`))
        .find((candidate) => !candidate.closest("#devlogModal"));
      if (primaryButton) primaryButton.click();
      else {
        localStorage.setItem("bentootoo-language", language);
        document.documentElement.lang = { zh: "zh-CN", en: "en", fr: "fr" }[language] || "zh-CN";
        renderDevlog();
      }
    });
  });
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
  deathgptDemoRunId += 1;
  deathgptUnavailableThisOpen = false;
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
