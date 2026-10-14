# 项目内部修改记录

这份文件记录项目资料、项目内部内容以及不需要出现在网站公开开发日志中的修改。

- “用户决定”记录本2兔提出或确认的内容与设计方向。
- “AI 实现”记录 AI 根据决定实际修改的文件与行为。
- 个人主页本身的功能、结构或重要视觉更新仍记录在 `devlog.js`。
- 本文件不在网站导航或页面中提供入口。

## 2026-10-14

### 首页导航主题适配 / Homepage navigation theme adaptation / Adaptation thématique de la navigation d’accueil

**用户决定 / User decisions / Décisions utilisateur**

- 满意新版全宽目录栏，希望切换主题时同步变为适合该主题的美术风格。
- Keep the approved full-width navigation and adapt its artwork when switching themes.
- Conserver la navigation pleine largeur approuvée et adapter son style graphique au thème sélectionné.

**AI 实现 / AI implementation / Réalisation IA**

- 默认主题保留黑底白字；同窗录改为藏蓝底、暖纸色文字与边线、暗红选中按钮；煎饼控制改为蓝色渐变、黄色边线与红色立体按钮。同步适配三横线、语言与主题选项、展开菜单、悬停和键盘焦点，保持桌面及窄屏布局；刷新资源缓存，并同步完善 v0.5.1 三语公开日志。
- Retained black and white for the default theme; applied navy, warm paper-colored text and edges, and burgundy selected buttons to Yearbook; applied a blue gradient, yellow edges, and red beveled buttons to Pancake Control. Adapted the hamburger, language and theme controls, dropdowns, hover and keyboard focus while keeping desktop and narrow-screen layouts; refreshed asset caches and completed the trilingual v0.5.1 public log.
- Conservation du noir et blanc par défaut ; bleu marine, texte et bordures couleur papier, boutons sélectionnés bordeaux pour l’Annuaire ; dégradé bleu, bordures jaunes et boutons rouges en relief pour Pancake Control. Adaptation du menu, des langues, des thèmes, des menus déroulants, du survol et du focus clavier, avec conservation des dispositions sur ordinateur et petit écran ; actualisation du cache et du journal public trilingue v0.5.1.

### 首页黑色导航条 / Black homepage navigation bar / Barre de navigation noire sur l’accueil

**用户决定 / User decisions / Décisions utilisateur**

- 尝试将首页目录栏改为与网页一样宽的大黑色长方形，将更多、首页、项目、思索之屋、联系我、语言切换与主题切换全部放入其中，文字改为白色。
- Try a page-wide black rectangle for the homepage navigation, containing the more menu, Home, Projects, House of Thoughts, Contact, language selector and theme switch, with white text.
- Essayer un grand rectangle noir sur toute la largeur de l’accueil, regroupant le menu Plus, Accueil, Projets, Maison des pensées, Contact, le choix de langue et de thème, avec du texte blanc.

**AI 实现 / AI implementation / Réalisation IA**

- 新增首页专用的 `home-nav.css`，将原有悬浮导航合并为贴齐页面两侧的黑色导航条，统一白色文字与菜单图标、深色展开菜单和键盘焦点样式；窄屏分两行排列，三种主题均保留黑色导航。更新首页资源引用，并在三语公开开发日志中记录 v0.5.1。
- Added homepage-specific `home-nav.css`, combining the floating controls into a black bar reaching both page edges, with white text and menu icon, dark dropdowns and visible keyboard focus; narrow screens use two rows and all three themes retain the black navigation. Updated homepage asset references and recorded v0.5.1 in the public log in all three languages.
- Ajout de `home-nav.css` pour l’accueil : regroupement des commandes flottantes dans une barre noire bord à bord, avec texte et icône blancs, menus déroulants sombres et focus clavier visible ; disposition sur deux lignes sur petit écran et barre noire conservée dans les trois thèmes. Actualisation des ressources de l’accueil et inscription de v0.5.1 dans le journal public trilingue.

## 2026-10-13

### Power Automate 博客图片与简介 / Power Automate blog image and summary / Image et résumé du blog Power Automate

**用户决定 / User decisions / Décisions utilisateur**

- 将提供的当前流程截图加入 Power Automate 博客，简介改为“MCP的成功尝试”。
- Add the supplied current-workflow screenshot to the Power Automate article and change its summary to “A Successful Experiment with MCP”.
- Ajouter la capture fournie du flux actuel à l’article Power Automate et remplacer son résumé par « Un essai réussi avec MCP ».

**AI 实现 / AI implementation / Réalisation IA**

- 将原图复制至 `assets/blog-power-automate-flow.png`，放在介绍正文之后、步骤教程之前；同步三语图片替代文本、文章简介及首页预览，刷新对应脚本缓存标识。保留文章创作日期与网站版本号，不更新公开开发日志。
- Copied the original image to `assets/blog-power-automate-flow.png` and placed it after the introductory text, before the tutorial; updated image alternative text, article summaries, and homepage previews in all three languages and refreshed script cache identifiers. Preserved the creation date and site version without updating the public development log.
- Copie de l’image originale dans `assets/blog-power-automate-flow.png`, placée après l’introduction et avant le tutoriel ; mise à jour trilingue du texte alternatif, du résumé et de l’aperçu d’accueil, avec actualisation du cache des scripts. Date de création et version du site conservées, sans modifier le journal public.

### 首页标题与个人名片位置 / Homepage title and personal card position / Position du titre et de la carte personnelle sur l’accueil

**用户决定 / User decisions / Décisions utilisateur**

- 首页最初的标题和个人名片略微下调。
- Move the initial homepage title and personal card slightly downward.
- Déplacer légèrement vers le bas le titre initial et la carte personnelle de l’accueil.
- 在首次下调后，再往下一点。
- Move them a little further down after the first adjustment.
- Les déplacer encore un peu plus bas après le premier ajustement.

**AI 实现 / AI implementation / Réalisation IA**

- 将首屏标题与名片共用容器的垂直位置从 38.2% 调整为 42%，平板与手机端分别从 44% 和 45% 调整为 47% 和 48%；刷新首页样式缓存标识，保留网站版本号，不更新公开开发日志。
- Adjusted the shared title and card container’s vertical position from 38.2% to 42%, with tablet and phone positions moving from 44% and 45% to 47% and 48%; refreshed the homepage stylesheet cache identifier, retained the website version, and left the public development log unchanged.
- Ajustement de la position verticale du conteneur commun au titre et à la carte de 38,2 % à 42 %, et de 44 % et 45 % à 47 % et 48 % sur tablette et téléphone ; actualisation du cache de la feuille de style de l’accueil, sans changer la version du site ni le journal public.
- 再将桌面、平板与手机端的容器位置分别调整为 45%、50% 和 51%，刷新首页样式缓存标识。
- Further adjusted the container position to 45%, 50%, and 51% on desktop, tablet, and phone respectively, and refreshed the homepage stylesheet cache identifier.
- Nouvel ajustement de la position du conteneur à 45 %, 50 % et 51 % sur ordinateur, tablette et téléphone respectivement, avec actualisation du cache de la feuille de style de l’accueil.

## 2026-10-12

### 文章预计阅读时长 / Estimated article reading time / Temps de lecture estimé

**用户决定 / User decisions / Décisions utilisateur**

- 为所有文章增加预计阅读时长，放在文章开头。
- Add estimated reading time at the beginning of every article.
- Ajouter un temps de lecture estimé au début de chaque article.

**AI 实现 / AI implementation / Réalisation IA**

- 在文章开头的日期旁显示三语预计阅读时长，根据当前语言的标题、简介与完整正文自动计算；教程文章包含全部步骤、代码示例及结尾，不计实际操作耗时。
- 中文按每分钟 400 个汉字估算，英文按每分钟 220 词、法文按每分钟 200 词估算；混合文本累计计算，向上取整且至少显示 1 分钟。沿用现有元信息样式与移动端换行，刷新博客脚本缓存标识；保留创作日期与网站版本号，不更新公开开发日志。
- Added localized reading time beside the date at the start of every article, calculated from the current language’s title, summary, and full text; tutorial articles include all steps, code examples, and the closing, excluding time spent performing the steps.
- Estimates use 400 Chinese characters per minute, 220 English words per minute, and 200 French words per minute; mixed text is combined and rounded up to at least one minute. Reused the metadata style and mobile wrapping, refreshed the blog cache identifier, and preserved creation dates and website version without updating the public log.
- Ajout du temps de lecture traduit près de la date, au début de chaque article, calculé à partir du titre, du résumé et du texte complet dans la langue courante ; les tutoriels incluent toutes les étapes, le code et la conclusion, sans compter la réalisation des opérations.
- Estimation à 400 caractères chinois, 220 mots anglais ou 200 mots français par minute ; cumul des textes mixtes et arrondi supérieur avec un minimum d’une minute. Style des métadonnées et retour à la ligne mobile conservés, cache du blog actualisé, sans changer les dates de création, la version du site ni le journal public.

### Power Automate 结尾措辞 / Power Automate closing wording / Formulation finale de Power Automate

**用户决定 / User decisions / Décisions utilisateur**

- 将结尾中的“是很振奋人心和令人心寒的”改为“是很矛盾的”。
- Replace “both exciting and chilling” in the closing with wording expressing contradiction.
- Remplacer « à la fois enthousiasmant et glaçant » dans la conclusion par une formulation exprimant la contradiction.

**AI 实现 / AI implementation / Réalisation IA**

- 同步修改中文、英文和法文对应句子，刷新教程数据缓存标识，保留其他正文、创作日期和网站版本号，不更新公开开发日志。
- Updated the corresponding sentence in Chinese, English, and French and refreshed the tutorial cache identifier; preserved the remaining text, creation date, and website version without updating the public development log.
- Mise à jour de la phrase correspondante en chinois, anglais et français et du cache du tutoriel ; conservation du reste du texte, de la date de création et de la version du site, sans modifier le journal public.

### Agent 文章简介 / Agent article summary / Résumé de l’article sur les agents

**用户决定 / User decisions / Décisions utilisateur**

- 《论 Agent、Vibe Coding 与未来》简介改为两行：“花了一个周”“做了折棠7中同窗录”。
- Change the summary of “On Agents, Vibe Coding, and the Future” to two lines: “Spent a week” and “making Zhetang No. 7: Classmates”.
- Modifier le résumé de « Des agents, du vibe coding et de l’avenir » en deux lignes : « Une semaine » et « pour créer Zhetang no 7 : Camarades de classe ».

**AI 实现 / AI implementation / Réalisation IA**

- 同步更新三语简介，并在文章地图与阅读页保留指定换行；刷新博客脚本缓存标识，保留最初创作日期 2026-07-12，不改公开开发日志与网站版本号。
- Updated the summary in all three languages and preserved the explicit line break in the article map and reader; refreshed the script cache identifier, kept the original creation date of 2026-07-12, and left the public development log and site version unchanged.
- Mise à jour trilingue du résumé et conservation du saut de ligne dans la carte et la lecture de l’article ; actualisation du cache du script, conservation de la date de création initiale du 2026-07-12, sans modifier le journal public ni la version du site.

### 文章标题、简介与日期约定 / Article titles, summaries, and dates / Titres, résumés et dates des articles

**用户决定 / User decisions / Décisions utilisateur**

- 《AI 的反思》简介改为“AI的情感”；《论 AI、奇异点与共产主义》简介缩减为“我们不探讨政治”；《选择与努力的伪命题》改名为《论选择和努力》，简介为“这是一个伪命题”；Claude Code 与 Power Automate 文章改名为《Claude Code 终端到Power Automate云端的一体化工作流》，简介为“自动化的自动化”。
- Change the AI reflection summary to “AI’s Emotions” and the AI, Singularity, and Communism summary to “We are not discussing politics.” Rename the choice and effort article “On Choice and Effort”, with “This Is a False Question” as its summary. Rename the Claude Code and Power Automate article “An Integrated Workflow from the Claude Code Terminal to the Power Automate Cloud”, with “Automating Automation” as its summary.
- Résumer la réflexion sur l’IA par « Les émotions de l’IA » et l’article sur l’IA, la singularité et le communisme par « Nous ne parlons pas de politique. ». Renommer l’article sur le choix et l’effort « Du choix et de l’effort », avec « C’est une fausse question » comme résumé. Renommer l’article Claude Code et Power Automate « Un flux de travail intégré du terminal Claude Code au cloud Power Automate », avec « Automatiser l’automatisation » comme résumé.
- 文章只保留最初的创作日期；后续补充和纠错不增加修改日期，也不改变创作日期，将此约定保存为后续协作记忆。
- Keep only each article’s original creation date; later additions and corrections neither add a modification date nor change the creation date. Save this rule for future work.
- Conserver uniquement la date de création initiale ; les ajouts et corrections ultérieurs n’ajoutent pas de date de modification et ne changent pas la date de création. Conserver cette règle pour les prochaines interventions.

**AI 实现 / AI implementation / Réalisation IA**

- 同步更新 `blog-map.js` 中四篇文章的三语标题与简介，以及 `app.js`、`index.html` 中的首页最新文章预览；刷新对应脚本缓存标识。保留文章日期与正文，在 `AGENTS.md` 中保存三语日期约定，不改公开开发日志与网站版本号。
- Updated the four articles’ titles and summaries in all three languages in `blog-map.js`, and the latest homepage preview in `app.js` and `index.html`; refreshed the relevant script cache identifiers. Preserved article dates and bodies, saved the date rule in three languages in `AGENTS.md`, and kept the public development log and site version unchanged.
- Mise à jour trilingue des titres et résumés des quatre articles dans `blog-map.js` et de l’aperçu récent de l’accueil dans `app.js` et `index.html` ; actualisation des identifiants de cache concernés. Dates et textes conservés, règle des dates enregistrée en trois langues dans `AGENTS.md`, sans changer le journal public ni la version du site.

### Power Automate 步骤教程与结尾 / Power Automate tutorial and closing / Tutoriel Power Automate et conclusion

**用户决定 / User decisions / Décisions utilisateur**

- 将 `D:/Projets/PowerAutomate_helper/Blog-Claude-Code-Power-Automate.md` 中整理的步骤教程追加到现有 Claude Code 与 Power Automate 文章末尾，再加入关于 AI、技术博客与人与人距离的结尾感想；文章开头提供跳过介绍、直接进入教程的快捷按钮。
- Append the steps from `D:/Projets/PowerAutomate_helper/Blog-Claude-Code-Power-Automate.md` to the existing Claude Code and Power Automate article, followed by the reflection on AI, technical blogs, and distance between people; provide a button at the beginning to skip directly to the tutorial.
- Ajouter les étapes de `D:/Projets/PowerAutomate_helper/Blog-Claude-Code-Power-Automate.md` à l’article existant, puis la réflexion sur l’IA, les blogs techniques et la distance entre les personnes ; proposer un bouton au début pour accéder directement au tutoriel.

**AI 实现 / AI implementation / Réalisation IA**

- 新增 `blog-tutorial.js`，保留中文教程的 12 个步骤、命令、提示词、工具表格、官方链接与 BEFORE / AFTER 差异，同步英文和法文，并保留云端保存与实际运行尚未验证的说明。文档中的指令仅作为文章内容收录，未执行。
- 在 `blog-map.js` 中接入教程及三语结尾；在标题下增加“直接跳到教程”按钮，滚动到教程标题并转移键盘焦点，不改变文章锚点地址。增加代码块、表格和章节样式，更新博客资源缓存标识；仅记内部记录，不改公开开发日志或网站版本号。
- Added `blog-tutorial.js` with all 12 steps, commands, prompts, the tools table, official links, and the BEFORE / AFTER diff, plus English and French translations. Retained the statement that cloud saving and actual execution remain unverified. Document instructions were included as article content and were not executed.
- Integrated the tutorial and closing in `blog-map.js`; added a button below the title that scrolls to the tutorial and moves keyboard focus while retaining the article hash. Styled code blocks, tables, and sections, and refreshed blog cache identifiers. Recorded this internally without changing the public log or website version.
- Ajout de `blog-tutorial.js` avec les 12 étapes, commandes, consignes, tableau des outils, liens officiels et différence BEFORE / AFTER, avec traductions anglaise et française. Conservation de la mention indiquant que l’enregistrement cloud et l’exécution réelle ne sont pas encore vérifiés. Les instructions du document ont été publiées comme contenu, sans être exécutées.
- Intégration du tutoriel et de la conclusion dans `blog-map.js` ; bouton sous le titre permettant le défilement et le transfert du focus vers le tutoriel sans changer l’ancre de l’article. Styles pour le code, les tableaux et les sections, avec actualisation du cache du blog. Journal interne uniquement ; journal public et version inchangés.

### Claude Code 与 Power Automate 文章 / Claude Code and Power Automate article / Article Claude Code et Power Automate

**用户决定 / User decisions / Décisions utilisateur**

- 添加《用 Claude Code 直接修改 Power Automate 云端流程：一套“读取 → 预览 → 写入 → 验证”的工作流》，分类为“技术”；新增个人博客不写入公开开发日志，并将此约定记入仓库协作规则。
- Add “Editing Power Automate Cloud Flows Directly with Claude Code: A Read → Preview → Write → Verify Workflow” under Technology; keep new personal blog posts out of the public development log and save this convention in the repository collaboration rules.
- Ajouter « Modifier directement les flux cloud Power Automate avec Claude Code : lire → prévisualiser → écrire → vérifier » dans Technologie ; exclure les nouveaux articles personnels du journal public et conserver cette convention dans les règles du dépôt.

**AI 实现 / AI implementation / Réalisation IA**

- 在 `blog-map.js` 中添加中文正文与对应英法翻译，保留个人语气、三个章节、架构链路与四个关键点，整理明显笔误和标点；文章日期采用本次添加日期 2026-10-12，稳定地址为 `blog.html#claude-code-power-automate`。
- 更新首页最新文章入口和三语预览，个人博客数量由 5 改为 6；更新文章资源缓存标识与站点地图日期。在 `AGENTS.md` 中保存博客记录约定；不改公开开发日志与网站版本号。
- Added the Chinese text and matching English and French translations to `blog-map.js`, retaining the personal voice, three sections, architecture chain, and four key points while correcting obvious typos and punctuation. Used the addition date, 2026-10-12, and the stable address `blog.html#claude-code-power-automate`.
- Updated the latest homepage links and previews in all three languages, increased the blog count from 5 to 6, and refreshed the article cache identifier and sitemap dates. Saved the blog logging convention in `AGENTS.md`; kept the public development log and website version unchanged.
- Ajout du texte chinois et des traductions anglaise et française dans `blog-map.js`, en conservant la voix personnelle, les trois sections, la chaîne technique et les quatre points clés, avec correction des fautes évidentes et de la ponctuation. Date d’ajout : 2026-10-12 ; adresse stable : `blog.html#claude-code-power-automate`.
- Mise à jour des liens récents et des aperçus trilingues de l’accueil, passage de 5 à 6 articles, actualisation du cache de l’article et des dates du plan du site. Convention conservée dans `AGENTS.md` ; journal public et version du site inchangés.

### 全站主题切换与 v0.5.0 背景 / Site-wide themes and v0.5.0 background / Thèmes du site et fond v0.5.0

**用户决定 / User decisions / Décisions utilisateur**

- 将三主题切换应用到个人站点的每一个网页，并将 v0.5.0 开发日志背景换成煎饼监控原站背景图片。
- Apply the three-theme selector to every personal-site page and use the original Pancake Control background for the v0.5.0 development log entry.
- Appliquer le sélecteur des trois thèmes à toutes les pages du site personnel et utiliser le fond original de Contrôle des pancakes pour l’entrée v0.5.0 du journal.

**AI 实现 / AI implementation / Réalisation IA**

- 将主题状态抽为共用脚本，覆盖主页、项目库、项目详情、思索之屋、田野地球及两个调查子页面；跨页面与标签页同步主题，保留原布局和功能。同步三语按钮标签与 v0.5.0 现有日志内容，为该条目固定原站煎饼图片背景并保留白字可读性。
- Extracted shared theme state for the homepage, project library and details, House of Reflection, field globe, and both field-report pages; themes persist across navigation and synchronize across tabs without changing layout or functionality. Updated three-language labels and the existing v0.5.0 entry, with a fixed original pancake background and readable white text.
- Extraction d’un script commun pour l’accueil, la bibliothèque et les détails des projets, la Maison de réflexion, le globe et les deux pages de terrain ; conservation et synchronisation du thème entre pages et onglets sans modifier la disposition ni les fonctions. Mise à jour des libellés trilingues et de l’entrée v0.5.0 existante, avec le fond original de pancakes et un texte blanc lisible.

### 主页主题对比

**用户决定（后续）**

- 将改进版本设为新版默认；最终提供新版默认、同窗录主页、煎饼控制三个主题。
- 后两个主题参考同窗录项目文件夹中的原始网站，尽量保留原版风味，保持主页布局和功能。
- 煎饼控制主题使用原网站背景图片，并在保留按钮布局的前提下进一步还原原站外观。
- 煎饼主题的电子名片与全部项目展示图片都使用原版网站的煎饼照片。
- 默认主题的项目展示保留各项目原有封面图片。

**AI 实现（后续）**

- 将旧的当前主题选择迁移为新版默认，保留三主题切换、浏览器记忆与三语辅助标签。
- 根据 `D:/Projets/Empty_classes/school.html` 及其样式提取米黄纸张、藏蓝导航、暗红强调与宋体风格，制作同窗录皮肤。
- 根据原站 `pancake-control.css` 提取黄油黄、鲜红、亮蓝、粉色和复古边框，复制原煎饼背景至主页资源目录，制作煎饼控制皮肤。
- 新增仅供主页使用的 `home-themes.css`，保留首屏位置、滚动过渡、项目封面、名片翻转和页面导航。
- 同步三语公开开发日志中本次尚未发布的主题条目，并更新资源缓存版本。
- 核对煎饼背景与原站 `pics/pan3.webp` 的 SHA256 完全一致；对齐原站 210px 平铺与淡黄色遮罩，还原白黄斜分主视觉、红色按钮、蓝色导航、双线边框与立体阴影，按钮尺寸与位置沿用现有布局。
- 原样复制原站 `pan1.webp` 与 `pan2.webp`，在煎饼主题中替换电子名片、四张项目展示卡片以及项目库预览中的六张缩略图；切回其他主题恢复原图片，并同步名片照片的三语替代文本。
- 修正默认主题卡片的背景简写覆盖封面问题，改为只设置底色，使原项目封面与渐变遮罩正常显示。

**用户决定**

- 在主页语言切换旁增加主题选项，用色彩小方块展示。
- 保留当前主页设计，同时提供一个可即时切换和对比的改进版本。

**AI 实现**

- 增加纯白色“当前设计”方块与白色、珊瑚色组合的“改进设计”方块，并同步中文、英文和法文辅助标签。
- 默认继续使用当前设计；主题选择保存在浏览器本地，刷新页面后继续沿用。
- 改进主题保持白色为主强调色，以珊瑚色承担少量方向和时间提示，提高辅助文字对比度，降低动态背景与装饰线条的强度，并收敛大标题、卡片阴影和悬停位移。
- 主题仅作用于主页，不改变项目库、项目详情页或思索之屋的既有视觉逻辑。
- 更新主页样式、脚本和开发日志的静态资源版本号。

### 项目库配色与项目卡片

**用户决定**

- 将项目库与项目详情页的绿色视觉元素统一改为白色。
- 每张项目卡片不再显示标题与日期区域之间的横线。
- 删除项目卡片中的“创立日期”或“暂定创立日期”标签，只保留日期。

**AI 实现**

- 为项目库与项目详情页增加白色强调色覆盖，并将筛选、选中、聚焦、悬停和边框状态中的绿色与绿色透明色改为白色体系。
- 将无封面项目的绿色占位渐变改为中性灰白渐变。
- 删除项目卡片日期栏的顶部边框与日期标签，将日期保留在卡片右下方。
- 更新项目样式与脚本的静态资源版本号，网站公开版本号保持不变。

### 主页配色与内容精简

**用户决定**

- 将主页所有绿色视觉元素改为白色，包括绿色渐变、按钮选中状态与项目卡片边框。
- 删除主页项目展示卡片右下角的项目编号。
- 删除主页“思索之屋”的说明副标题。
- 删除主页联系区域的“Thoughts”副标题，并将“通过思索之屋留言”改为简洁的白色长方形描边按钮。
- 首屏初始不显示“这里是本2兔灵感堆积之所”；向下滚动时欢迎文字与电子名片上移并渐隐，再由这句话作为主标题接替。
- 新主标题下方显示当前项目数量与个人博客数量，完成过渡后再进入正常页面滚动。
- 首屏标题与电子名片按黄金分割关系放在视觉中心偏上的位置，下滑提示放在视觉中心偏下的位置。
- 首屏增加缓慢闪烁的“下滑查看更多”提示。

**AI 实现**

- 为主页增加独立的白色主题覆盖，将原有青绿色与黄绿色强调色统一为白色，同时更新动态背景色带、头像装饰、项目卡片状态与项目库预览渐变。
- 删除三个主页项目编号、“思索之屋”说明副标题和联系区域的“Thoughts”文字。
- 将思索之屋留言入口改为白色直角描边按钮，并增加黑白反转的悬停与键盘聚焦反馈。
- 将主页首屏扩展为粘性分段滚动区域，以滚动进度驱动原首屏上移淡出和新主标题淡入。
- 根据项目库与思索之屋现有数据，在新首屏中显示 9 个项目与 5 篇个人博客，并同步三语标签。
- 将首屏主要内容的视觉中心设在页面高度约 38.2% 处，并在约 76.4% 处加入三语下滑提示及低频明暗动画；移动端使用相应的防遮挡位置。
- 在 `devlog.js` 中同步记录中文、英文和法文版本的主页视觉与结构更新。

## 2026-10-08

### 项目详情页

**用户决定**

- 每个项目使用可单独打开的全屏详情页，不再使用弹窗。
- 项目详情页保留首页完整目录栏，包括左上角“更多”按钮。
- 页面不在大标题上方显示“游戏”“工具”等类型小标题。
- 详情页包含简介、最近更新、团队成员、开始游戏或打开项目、可展开更新日志与评论区。
- 更新日志按大版本分组：代表版本号位于左上角，代表日期位于右上角；正文只保留实际修改内容。
- 游戏项目使用“开始游戏”，非游戏项目使用“打开项目”。
- “开始游戏”和“更新日志”之间使用更大的间距与分隔线。
- 团队成员的默认内容为“本2兔个人作品 · All rights reserved.”。

**AI 实现**

- 新增 `project.html` 作为独立项目详情页面，并让项目卡片跳转到稳定的项目详情地址。
- 更新 `projects.js` 与 `projects.css`，实现三语言详情内容、项目日志展开、版本分组与响应式布局。
- 保留旧项目锚点地址的跳转兼容。
- 将项目详情地址加入 `sitemap.xml`。

### 折棠7中同窗录

**用户决定**

- 简介修改为：通过论坛进入普通的班级同窗录，并在文字、图片与视频之间发现另一条路。
- 增加光源闪烁与光敏性癫痫提示，并说明可以在游戏开始时关闭闪烁。
- 增加心理恐惧内容提示。
- 项目更新日志删除早期 `Prototype` 分组。

**AI 实现**

- 在 `projects.js` 中同步更新中文、英文和法文简介。
- 在 `projects.css` 中保留简介段落换行，使两条内容提示独立显示。
- 根据公开 GitHub 仓库记录整理项目更新历史，并按代表版本归组。
- 将以上项目资料修改保留在内部记录中，不加入公开的 `devlog.js`。
