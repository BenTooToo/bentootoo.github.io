const blogGraph = {
  center: {
    id: "center",
    label: "本2兔",
    x: 50,
    y: 52,
    mobileX: 54,
    size: 210
  },
  categories: [
    {
      id: "philosophy",
      label: "哲学",
      x: 28,
      y: 28,
      mobileX: 31,
      size: 176,
      tone: "cyan"
    },
    {
      id: "music",
      label: "音乐",
      x: 72,
      y: 28,
      mobileX: 62,
      size: 168,
      tone: "coral"
    },
    {
      id: "making",
      label: "制作",
      x: 29,
      y: 74,
      mobileX: 31,
      size: 172,
      tone: "lime"
    },
    {
      id: "technology",
      label: "技术",
      x: 72,
      y: 74,
      mobileX: 62,
      size: 166,
      tone: "violet"
    }
  ],
  subcategories: [],
  articles: [
    {
      id: "choice-effort",
      title: "选择与努力的伪命题",
      problem: "失败真的是不够努力，还是环境、天分与方向共同塑造了结果？",
      date: "2026-06-09",
      categoryId: "philosophy",
      subcategoryId: null,
      x: 14,
      y: 50,
      mobileX: 18,
      size: 158,
      paragraphs: [
        "我认为如果选择和努力哪一个更重要本身就是一个伪命题。",
        "什么是选择，什么是努力？",
        "有谁不会想要让生活变得更好？有谁不会想要让自己更加快乐？这种推动生命维持自身、发展自身、超越自身的力量，在不同思想家那里以不同形式出现：斯宾诺莎称之为 conatus，即每个存在者努力维持自身存在的倾向；柏格森称之为 élan vital，即生命不断创造和前进的冲力；叔本华称之为 volonté de vivre，即生存意志；尼采则提出 volonté de puissance，即生命扩张、创造和超越自身的力量。用更朴素的话说，它们都指向同一个事实：生命并不是静止地存在，而是在不断寻找自己的延续、表达和完成。",
        "因此，努力并不只是考试前多做几道题，也不只是成功学里所谓的“拼命”。对于一个个体而言，他的存在本身就是一种努力。每个人从出生起，都会按照自己对世界的理解，朝着自己认为值得追求的东西前进。问题在于，每个人对“活着”的理解并不相同。",
        "在余华的《活着》中，人物所追求的也许只是延续自己的存在；对于艺术家而言，活着可能意味着用更强烈的方式表达自己；对于许多普通人而言，活着意味着赚钱、养家、承担责任。每个人都在努力地活着，只是方式不同。",
        "即便是那些对生活感到迷茫的人、做出错误决定的人，甚至看似自暴自弃的人，也未必是真的不想活好。很多时候，他们只是在痛苦、麻木或混乱中，寻找一种暂时的缓解。错误决定之后产生的悔恨，本质上不也正说明了一个人对更好生活的向往，以及这种向往与现实之间的强烈反差吗？",
        "所以，当我们说一个失败者“不够努力”时，这句话往往更像是一种激将法，而不是对失败原因的真正分析。",
        "人们总是把失败简单归因于努力不足，这是非常粗暴的。两个孩子，一个出生在连洗澡都困难的山区，一个成长在资源丰富的大都市，他们接受的家庭教育、学校教育和社会影响完全不同。如果那个山区孩子在考试中没有超过城市孩子，难道我们就能简单地说他不够努力吗？显然不能。",
        "即使抛开社会环境，生理条件、心理状态、天分差异也不能被忽视。在一个强调平等与团结的时代，“不同”这个词常常被赋予令人恐惧的外衣。但不同本身不是错误。相反，正是因为人的不同，社会才拥有多样性。我们需要正视这种不同，不是把它看作缺陷，而是寻找其中可能闪耀的部分。它可以是天分，也可以是童年经历、性格结构和成长环境共同塑造出的行为方式。",
        "但是，承认天分和环境的重要性，并不意味着努力可以被取消。相反，正因为人并不平等地拥有同样的天分、条件和机会，努力才更加必要。努力不是保证成功的魔法，而是让一个人逐渐认识自己、修正方向、发现能力边界的过程。没有努力，天分不会显现；没有选择，努力会被浪费。",
        "那么，如何找到自己的天分？也许只能通过尝试、回想、总结、交流，以及一点运气。",
        "那些努力过却失败的人，他们的时间和精力并不一定白费。因为如果没有这些失败的经历，一个人也许永远不会知道自己的边界在哪里，自己的方向在哪里，自己的天分又在哪里。",
        "人只有在意识到这些真相的那一刻，才可能获得真正的自由，并做出基于理性的选择。也只有意识到天分、环境、努力和方向在成功中的共同作用，人们才会真正重视选择。",
        "所以，选择和努力并不是两个可以简单比较的东西。努力不是成功的充分条件，而是存在的基本形式；选择不是努力的反面，而是努力的方向。没有努力，选择只是空想；没有选择，努力只是消耗。",
        "看自己的造化，看世界的眼色，并不是随波逐流，而是顺流而飞翔。"
      ]
    }
  ]
};

const blogMap = document.querySelector("#blogMap");
const nodeLayer = document.querySelector("#blogMapNodes");
const lineLayer = document.querySelector(".map-lines");
const reader = document.querySelector("#articleReader");
const graphState = {
  nodes: new Map(),
  links: [],
  width: 0,
  height: 0,
  view: {
    x: 0,
    y: 0,
    scale: 1
  },
  dragging: null,
  panning: null,
  movedDuringDrag: false,
  suppressNextClick: false,
  dragListenersReady: false,
  lastFrame: performance.now(),
  animationFrame: 0
};

const compactMapQuery = window.matchMedia("(max-width: 620px)");
const CENTER_NODE_ID = blogGraph.center.id;
const CENTER_MASS = 5.6;
const RELEASE_RECOIL = 0.045;
const MAX_RELEASE_SPEED = 18;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function findCategory(id) {
  return blogGraph.categories.find((category) => category.id === id);
}

function findSubcategory(id) {
  return blogGraph.subcategories.find((subcategory) => subcategory.id === id);
}

function findArticle(id) {
  return blogGraph.articles.find((article) => article.id === id);
}

function createPositionStyle(item) {
  return [
    `--node-size: ${item.size}px`
  ].join("; ");
}

function renderCenterNode(center) {
  return `
    <div
      class="map-node map-center"
      data-map-node="${escapeHtml(center.id)}"
      style="${createPositionStyle(center)}"
    >
      <span>${escapeHtml(center.label)}</span>
      <small>Bentootoo</small>
    </div>
  `;
}

function renderCategoryNode(category) {
  return `
    <div
      class="map-node category-node tone-${category.tone}"
      data-map-node="${escapeHtml(category.id)}"
      style="${createPositionStyle(category)}"
    >
      <span>${escapeHtml(category.label)}</span>
    </div>
  `;
}

function renderSubcategoryNode(subcategory) {
  return `
    <div
      class="map-node subcategory-node"
      data-map-node="${escapeHtml(subcategory.id)}"
      style="${createPositionStyle(subcategory)}"
    >
      <span>${escapeHtml(subcategory.label)}</span>
    </div>
  `;
}

function renderArticleNode(article) {
  const category = findCategory(article.categoryId);
  const subcategory = article.subcategoryId ? findSubcategory(article.subcategoryId) : null;
  const metadata = [category?.label, subcategory?.label].filter(Boolean).join(" / ");

  return `
    <button
      class="map-node article-node"
      type="button"
      data-map-node="${escapeHtml(article.id)}"
      data-article-id="${escapeHtml(article.id)}"
      style="${createPositionStyle(article)}"
      aria-label="${escapeHtml(`${article.title}，${article.problem}`)}"
    >
      <span class="article-title">${escapeHtml(article.title)}</span>
      <span class="article-problem">${escapeHtml(article.problem)}</span>
      <small>${escapeHtml(metadata)}</small>
    </button>
  `;
}

function getNodeCenter(node) {
  const stateNode = graphState.nodes.get(node.dataset.mapNode);

  return stateNode ? { x: stateNode.x, y: stateNode.y } : { x: 0, y: 0 };
}

function createLine(fromId, toId, type) {
  const fromNode = blogMap.querySelector(`[data-map-node="${fromId}"]`);
  const toNode = blogMap.querySelector(`[data-map-node="${toId}"]`);

  if (!fromNode || !toNode) {
    return "";
  }

  const from = getNodeCenter(fromNode);
  const to = getNodeCenter(toNode);

  return `<path class="map-line map-line-${type}" d="M ${from.x.toFixed(2)} ${from.y.toFixed(2)} L ${to.x.toFixed(2)} ${to.y.toFixed(2)}"></path>`;
}

function drawLines() {
  if (!blogMap || !lineLayer) {
    return;
  }

  lineLayer.setAttribute("viewBox", `0 0 ${graphState.width} ${graphState.height}`);
  lineLayer.innerHTML = graphState.links.map((link) => createLine(link.from, link.to, link.type)).join("");
}

function applyViewportTransform() {
  const transform = `translate(${graphState.view.x}px, ${graphState.view.y}px) scale(${graphState.view.scale})`;

  lineLayer.style.transform = transform;
  nodeLayer.style.transform = transform;
}

function getAllGraphItems() {
  return [
    blogGraph.center,
    ...blogGraph.categories,
    ...blogGraph.subcategories,
    ...blogGraph.articles
  ];
}

function getInitialPosition(item) {
  const xPercent = compactMapQuery.matches ? (item.mobileX ?? item.x) : item.x;
  const yPercent = compactMapQuery.matches ? (item.mobileY ?? item.y) : item.y;

  return {
    x: (graphState.width * xPercent) / 100,
    y: (graphState.height * yPercent) / 100
  };
}

function getNodeKind(item) {
  if (item.id === CENTER_NODE_ID) {
    return "center";
  }

  if (findArticle(item.id)) {
    return "article";
  }

  if (findSubcategory(item.id)) {
    return "subcategory";
  }

  return "category";
}

function createGraphLinks() {
  return [
    ...blogGraph.categories.map((category) => ({
      from: "center",
      to: category.id,
      type: "category",
      lengthRatio: 0.36,
      stiffness: 0.032
    })),
    ...blogGraph.subcategories.map((subcategory) => ({
      from: subcategory.categoryId,
      to: subcategory.id,
      type: "subcategory",
      lengthRatio: 0.18,
      stiffness: 0.026
    })),
    ...blogGraph.articles.map((article) => ({
      from: article.subcategoryId || article.categoryId,
      to: article.id,
      type: "article",
      lengthRatio: 0.24,
      stiffness: 0.024
    }))
  ];
}

function buildGraphState() {
  if (!blogMap) {
    return;
  }

  const previousNodes = new Map(graphState.nodes);
  const previousWidth = graphState.width || 1;
  const previousHeight = graphState.height || 1;
  const mapRect = blogMap.getBoundingClientRect();
  graphState.width = mapRect.width;
  graphState.height = mapRect.height;
  graphState.nodes.clear();
  graphState.links = createGraphLinks();

  getAllGraphItems().forEach((item) => {
    const element = blogMap.querySelector(`[data-map-node="${item.id}"]`);

    if (!element) {
      return;
    }

    element.style.setProperty("--node-size", `${item.size}px`);

    const previousNode = previousNodes.get(item.id);
    const initialPosition = getInitialPosition(item);
    const position = previousNode
      ? {
          x: previousNode.x * (graphState.width / previousWidth),
          y: previousNode.y * (graphState.height / previousHeight)
        }
      : initialPosition;
    const diameter = element.offsetWidth || item.size;
    const kind = getNodeKind(item);
    const isCenter = kind === "center";

    graphState.nodes.set(item.id, {
      id: item.id,
      element,
      kind,
      x: position.x,
      y: position.y,
      vx: previousNode?.vx || 0,
      vy: previousNode?.vy || 0,
      fx: 0,
      fy: 0,
      radius: diameter / 2,
      mass: isCenter ? CENTER_MASS : 1,
      pinned: previousNode?.pinned || false,
      isArticle: kind === "article"
    });
  });

  updateNodeElements();
  applyViewportTransform();
  drawLines();
}

function updateNodeElements() {
  graphState.nodes.forEach((node) => {
    node.element.style.left = `${node.x}px`;
    node.element.style.top = `${node.y}px`;
    node.element.classList.toggle("is-dragging", graphState.dragging?.id === node.id);
  });
}

function getPointerPosition(event) {
  const mapRect = blogMap.getBoundingClientRect();
  const x = event.clientX - mapRect.left;
  const y = event.clientY - mapRect.top;

  return {
    x: (x - graphState.view.x) / graphState.view.scale,
    y: (y - graphState.view.y) / graphState.view.scale
  };
}

function clampNode(node) {
  const overscanX = graphState.width * 0.28;
  const overscanY = graphState.height * 0.28;
  const minX = node.radius - overscanX;
  const maxX = graphState.width - node.radius + overscanX;
  const minY = node.radius - overscanY;
  const maxY = graphState.height - node.radius + overscanY;

  node.x = Math.min(Math.max(node.x, minX), maxX);
  node.y = Math.min(Math.max(node.y, minY), maxY);
}

function releaseTowardCenter(node) {
  const center = graphState.nodes.get(CENTER_NODE_ID);

  if (!center || node.id === CENTER_NODE_ID) {
    return;
  }

  const dx = center.x - node.x;
  const dy = center.y - node.y;
  const distance = Math.hypot(dx, dy) || 1;
  const speed = Math.min(distance * RELEASE_RECOIL, MAX_RELEASE_SPEED);

  center.pinned = true;
  center.vx = 0;
  center.vy = 0;
  node.pinned = false;
  node.vx = (dx / distance) * speed;
  node.vy = (dy / distance) * speed;
}

function getRestLength(link) {
  const base = Math.min(graphState.width, graphState.height);
  const minimum = link.type === "article" ? 172 : 190;
  const maximum = link.type === "article" ? 260 : 330;

  return Math.min(Math.max(base * link.lengthRatio, minimum), maximum);
}

function applySpringForces() {
  graphState.links.forEach((link) => {
    const from = graphState.nodes.get(link.from);
    const to = graphState.nodes.get(link.to);

    if (!from || !to) {
      return;
    }

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.hypot(dx, dy) || 1;
    const force = (distance - getRestLength(link)) * link.stiffness;
    const fx = (dx / distance) * force;
    const fy = (dy / distance) * force;

    from.fx += fx;
    from.fy += fy;
    to.fx -= fx;
    to.fy -= fy;
  });
}

function resolveCollisions() {
  const nodes = [...graphState.nodes.values()];

  for (let index = 0; index < nodes.length; index += 1) {
    for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
      const first = nodes[index];
      const second = nodes[nextIndex];
      const dx = second.x - first.x;
      const dy = second.y - first.y;
      const distance = Math.hypot(dx, dy) || 1;
      const minimumDistance = first.radius + second.radius + 20;

      if (distance >= minimumDistance) {
        continue;
      }

      const overlap = minimumDistance - distance;
      const nx = dx / distance;
      const ny = dy / distance;
      const firstIsDragged = graphState.dragging?.id === first.id;
      const secondIsDragged = graphState.dragging?.id === second.id;
      const firstIsFixed = firstIsDragged || first.pinned;
      const secondIsFixed = secondIsDragged || second.pinned;

      if (firstIsFixed && !secondIsFixed) {
        second.x += nx * overlap;
        second.y += ny * overlap;
      } else if (secondIsFixed && !firstIsFixed) {
        first.x -= nx * overlap;
        first.y -= ny * overlap;
      } else {
        const totalMass = first.mass + second.mass;
        const firstShare = second.mass / totalMass;
        const secondShare = first.mass / totalMass;

        first.x -= nx * overlap * firstShare;
        first.y -= ny * overlap * firstShare;
        second.x += nx * overlap * secondShare;
        second.y += ny * overlap * secondShare;
      }
    }
  }
}

function stepGraphPhysics(currentTime) {
  const delta = Math.min((currentTime - graphState.lastFrame) / 16.67, 2);
  graphState.lastFrame = currentTime;

  graphState.nodes.forEach((node) => {
    node.fx = 0;
    node.fy = 0;
  });

  applySpringForces();

  graphState.nodes.forEach((node) => {
    if (graphState.dragging?.id === node.id) {
      node.vx *= 0.55;
      node.vy *= 0.55;
      return;
    }

    if (node.pinned) {
      node.vx = 0;
      node.vy = 0;
      return;
    }

    const damping = node.id === CENTER_NODE_ID ? 0.78 : 0.86;
    const mass = node.mass || 1;

    node.vx = (node.vx + (node.fx / mass) * delta) * damping;
    node.vy = (node.vy + (node.fy / mass) * delta) * damping;
    node.x += node.vx * delta;
    node.y += node.vy * delta;
    clampNode(node);
  });

  resolveCollisions();

  updateNodeElements();
  drawLines();
  graphState.animationFrame = requestAnimationFrame(stepGraphPhysics);
}

function startGraphPhysics() {
  cancelAnimationFrame(graphState.animationFrame);
  graphState.lastFrame = performance.now();
  graphState.animationFrame = requestAnimationFrame(stepGraphPhysics);
}

function fitArticleTitles() {
  nodeLayer.querySelectorAll(".article-title").forEach((title) => {
    const node = title.closest(".article-node");

    if (!node) {
      return;
    }

    title.style.fontSize = "";
    const availableWidth = node.clientWidth - 28;
    let size = parseFloat(getComputedStyle(title).fontSize);

    while (title.scrollWidth > availableWidth && size > 9) {
      size -= 0.5;
      title.style.fontSize = `${size}px`;
    }
  });
}

function setupDragInteractions() {
  if (graphState.dragListenersReady) {
    return;
  }

  graphState.dragListenersReady = true;

  const startDrag = (event, pointerId) => {
    if (event.button !== 0 || graphState.dragging || reader?.classList.contains("is-open")) {
      return;
    }

    const element = event.target.closest("[data-map-node]");

    if (!element || !blogMap.contains(element)) {
      return;
    }

    const node = graphState.nodes.get(element.dataset.mapNode);

    if (!node) {
      return;
    }

    graphState.nodes.forEach((currentNode) => {
      currentNode.pinned = false;
    });

    const pointer = getPointerPosition(event);
    graphState.dragging = {
      id: node.id,
      element,
      pointerId,
      startX: pointer.x,
      startY: pointer.y,
      previousX: pointer.x,
      previousY: pointer.y
    };
    graphState.movedDuringDrag = false;
    blogMap.classList.add("is-graph-dragging");
  };

  const moveDrag = (event) => {
    const drag = graphState.dragging;
    const pointerId = event.pointerId ?? "mouse";

    if (!drag || drag.pointerId !== pointerId) {
      return;
    }

    const node = graphState.nodes.get(drag.id);

    if (!node) {
      return;
    }

    const pointer = getPointerPosition(event);
    const moveDistance = Math.hypot(pointer.x - drag.startX, pointer.y - drag.startY);

    if (moveDistance > 4) {
      graphState.movedDuringDrag = true;
    }

    node.vx = (pointer.x - drag.previousX) * 0.42;
    node.vy = (pointer.y - drag.previousY) * 0.42;
    node.x = pointer.x;
    node.y = pointer.y;

    node.pinned = false;
    clampNode(node);
    drag.previousX = pointer.x;
    drag.previousY = pointer.y;
    updateNodeElements();
    drawLines();
    event.preventDefault();
  };

  const finishDrag = (event) => {
    const drag = graphState.dragging;
    const pointerId = event.pointerId ?? "mouse";

    if (!drag || drag.pointerId !== pointerId) {
      return;
    }

    if (graphState.movedDuringDrag) {
      const node = graphState.nodes.get(drag.id);

      if (node) {
        if (node.id === CENTER_NODE_ID) {
          node.pinned = true;
          node.vx = 0;
          node.vy = 0;
        } else {
          releaseTowardCenter(node);
        }
      }

      graphState.suppressNextClick = true;
      setTimeout(() => {
        graphState.suppressNextClick = false;
      }, 0);
    }

    if (event.pointerId !== undefined && drag.element?.hasPointerCapture?.(event.pointerId)) {
      drag.element.releasePointerCapture(event.pointerId);
    }

    graphState.dragging = null;
    graphState.movedDuringDrag = false;
    blogMap.classList.remove("is-graph-dragging");
  };

  blogMap.addEventListener("pointerdown", (event) => {
    startDrag(event, event.pointerId);

    if (graphState.dragging?.pointerId === event.pointerId) {
      graphState.dragging.element.setPointerCapture(event.pointerId);
    }
  });

  blogMap.addEventListener("mousedown", (event) => {
    startDrag(event, "mouse");

    if (graphState.dragging?.pointerId === "mouse") {
      event.preventDefault();
    }
  });

  document.addEventListener("pointermove", moveDrag);
  document.addEventListener("mousemove", moveDrag);
  document.addEventListener("pointerup", finishDrag);
  document.addEventListener("pointercancel", finishDrag);
  document.addEventListener("mouseup", finishDrag);
}

function setupViewportInteractions() {
  blogMap.addEventListener("wheel", (event) => {
    if (reader?.classList.contains("is-open")) {
      return;
    }

    event.preventDefault();

    const mapRect = blogMap.getBoundingClientRect();
    const pointerX = event.clientX - mapRect.left;
    const pointerY = event.clientY - mapRect.top;
    const graphX = (pointerX - graphState.view.x) / graphState.view.scale;
    const graphY = (pointerY - graphState.view.y) / graphState.view.scale;
    const nextScale = Math.min(Math.max(graphState.view.scale * Math.exp(-event.deltaY * 0.0014), 0.48), 2.4);

    graphState.view.scale = nextScale;
    graphState.view.x = pointerX - graphX * nextScale;
    graphState.view.y = pointerY - graphY * nextScale;
    applyViewportTransform();
  }, { passive: false });

  const startPan = (event, pointerId) => {
    if (event.button !== 0 || graphState.panning || event.target.closest("[data-map-node]") || reader?.classList.contains("is-open")) {
      return;
    }

    graphState.panning = {
      pointerId,
      startX: event.clientX,
      startY: event.clientY,
      viewX: graphState.view.x,
      viewY: graphState.view.y
    };
    blogMap.classList.add("is-view-panning");
  };

  const movePan = (event) => {
    const pan = graphState.panning;
    const pointerId = event.pointerId ?? "mouse";

    if (!pan || pan.pointerId !== pointerId) {
      return;
    }

    graphState.view.x = pan.viewX + event.clientX - pan.startX;
    graphState.view.y = pan.viewY + event.clientY - pan.startY;
    applyViewportTransform();
    event.preventDefault();
  };

  const finishPan = (event) => {
    const pan = graphState.panning;
    const pointerId = event.pointerId ?? "mouse";

    if (!pan || pan.pointerId !== pointerId) {
      return;
    }

    graphState.panning = null;

    if (event.pointerId !== undefined && blogMap.hasPointerCapture?.(event.pointerId)) {
      blogMap.releasePointerCapture(event.pointerId);
    }

    blogMap.classList.remove("is-view-panning");
  };

  blogMap.addEventListener("pointerdown", (event) => {
    startPan(event, event.pointerId);

    if (graphState.panning?.pointerId === event.pointerId) {
      blogMap.setPointerCapture(event.pointerId);
    }
  });
  blogMap.addEventListener("pointermove", movePan);
  blogMap.addEventListener("pointerup", finishPan);
  blogMap.addEventListener("pointercancel", finishPan);

  blogMap.addEventListener("mousedown", (event) => {
    startPan(event, "mouse");

    if (graphState.panning?.pointerId === "mouse") {
      event.preventDefault();
    }
  });
  document.addEventListener("mousemove", movePan);
  document.addEventListener("mouseup", finishPan);
}

function renderMap() {
  if (!nodeLayer) {
    return;
  }

  nodeLayer.innerHTML = [
    renderCenterNode(blogGraph.center),
    ...blogGraph.categories.map(renderCategoryNode),
    ...blogGraph.subcategories.map(renderSubcategoryNode),
    ...blogGraph.articles.map(renderArticleNode)
  ].join("");

  nodeLayer.querySelectorAll("[data-article-id]").forEach((articleNode) => {
    articleNode.addEventListener("click", (event) => {
      if (graphState.suppressNextClick) {
        event.preventDefault();
        return;
      }

      const article = findArticle(articleNode.dataset.articleId);

      if (article) {
        openArticle(article, articleNode);
      }
    });
  });

  requestAnimationFrame(() => {
    buildGraphState();
    fitArticleTitles();
    setupDragInteractions();
    setupViewportInteractions();
    startGraphPhysics();
    openArticleFromHash();
  });
}

function renderArticleMetadata(article) {
  const category = findCategory(article.categoryId);
  const subcategory = article.subcategoryId ? findSubcategory(article.subcategoryId) : null;

  return `
    <div class="reader-meta">
      <span>${escapeHtml(article.date)}</span>
      <span>${escapeHtml(category?.label || "未分类")}</span>
      <span>${escapeHtml(subcategory?.label || "无子类别")}</span>
    </div>
  `;
}

function getArticleOrigin(sourceNode) {
  if (!sourceNode) {
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
  }

  const rect = sourceNode.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

function openArticle(article, sourceNode) {
  if (!reader) {
    return;
  }

  const origin = getArticleOrigin(sourceNode);
  reader.style.setProperty("--reader-origin-x", `${origin.x}px`);
  reader.style.setProperty("--reader-origin-y", `${origin.y}px`);

  reader.innerHTML = `
    <div class="reader-panel" role="dialog" aria-modal="true" aria-labelledby="readerTitle">
      <button class="reader-close" type="button" aria-label="关闭文章">×</button>
      <article class="reader-article">
        ${renderArticleMetadata(article)}
        <h2 id="readerTitle">${escapeHtml(article.title)}</h2>
        <p class="reader-problem">${escapeHtml(article.problem)}</p>
        <div class="reader-body">
          ${article.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      </article>
    </div>
  `;

  reader.classList.add("is-open");
  reader.setAttribute("aria-hidden", "false");
  document.body.classList.add("article-reader-open");
  history.replaceState(null, "", `#${article.id}`);

  const closeButton = reader.querySelector(".reader-close");

  if (closeButton) {
    closeButton.addEventListener("click", closeArticle);
    closeButton.focus();
  }
}

function closeArticle() {
  if (!reader) {
    return;
  }

  reader.classList.remove("is-open");
  reader.setAttribute("aria-hidden", "true");
  document.body.classList.remove("article-reader-open");

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
}

function openArticleFromHash() {
  const articleId = window.location.hash.replace("#", "");

  if (!articleId) {
    return;
  }

  const article = findArticle(articleId);

  if (article) {
    openArticle(article, blogMap?.querySelector(`[data-map-node="${article.id}"]`));
  }
}

if (reader) {
  reader.addEventListener("click", (event) => {
    if (event.target === reader) {
      closeArticle();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && reader?.classList.contains("is-open")) {
    closeArticle();
  }
});

window.addEventListener("resize", () => {
  buildGraphState();
  fitArticleTitles();
});
window.addEventListener("hashchange", openArticleFromHash);

renderMap();
