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
    },
    {
      id: "ai-reflection",
      title: "AI 的反思",
      problem: "当 AI 复制脸、声音甚至情感时，人类的不完美还意味着什么？",
      date: "2026-06-20",
      categoryIds: ["philosophy", "technology"],
      subcategoryId: null,
      x: 50,
      y: 78,
      mobileX: 45,
      mobileY: 71,
      size: 164,
      paragraphs: [
        "在逛完 VIVA Tech 以后，最大的感触就是，学校里教的东西太少了。",
        "不管是人工智能所带来的启发和思考，还是商业世界对于效率和实际经验的追求，这都不是学校能够提供的东西。",
        "一个艺术家，在用歌剧的形式唱出她的真实情感的时候，歌声与背景的色彩每次触碰，产生的和弦就会让我起一阵冷颤，那是一种极度的美，是情感的爆发，是扎实的技巧，是每分每秒的享受。",
        "当她用 AI 模型复制了自己的脸和声音的时候，事情就变得有意思了起来。",
        "克隆，我们就叫它爱吧。",
        "爱说，我追求的是效率，是准确率，是人类所无法掌握的零误差。",
        "歌手随后说，是借助 AI，我们才能发现人性中真正闪耀的点，也就是那份不完美，正是人性的美丽之处。",
        "的确，自然的造物永远不完美，那么人，不完美的造物，又怎么能够创造出真正的完美？这里的完美是基于什么的完美？如果说 AI 的完美基于一遍又一遍的计算，那么它所得到的，这份斟酌的答案，不也是经过人类的数据而书写？假设 AI 通过自己收集，达到了所谓的完美，那么人类便造就了一个神。那么，借助史铁生的话来说，在翻越山峰后，无论是发现更高山峰还是发现再无更高山峰，这从一开始，就注定是不完美的。",
        "她说，是人类的情感，是艺术的自主创造，造就了 AI 和人类之间的区别。",
        "但是，那份人类所珍视的感情就真的不能被复刻么。",
        "网恋，崩老头的案例，告诉了我们，那份独属于人类的关心与温柔，甚至不需要视觉和听觉触发，就能够被文字所触动。",
        "更何况，当 AI 在 VIVA Tech 的舞台上，在暗淡无光的眼神和舞台上也开始献声时，我把眼睛闭上时，我听到的不是机械的运转，而是一个我们必须要接受的现实，也就是，就连那份我们珍视的感情，也不是什么不能被取代的东西。",
        "当我把眼睛睁开的时候，冷汗已经流了一身。",
        "所以，人类到底还剩下什么。",
        "人类真的还能说他要比 AI 要强么。",
        "所谓人性真的不可复制么。",
        "人性真的重要么。",
        "在回答这些问题之前，我们首先要问自己，人性到底是什么。",
        "人性，正如世间万物，是由完美而创造的不完美。",
        "是那份接受自己不完美的淡然，是那份不愿意接受现实的倔强。",
        "那份，在不完美中不断追求完美，在黑夜中寻找光明，在光明抚平黑暗，在挫折中成长，蜕变。在成长中接受平凡。",
        "这才是人性真正的闪耀之处。",
        "这才是为什么 AI 并不能取代人类，并不是因为 AI 比人类完美，而是因为人类能从不完美中看到完美，在痛苦中追求快乐。这份执念不可复制，不可取代。因为是这份人性，才让人类，作为一个集体，在其短暂的，在人世间的停留过程中，一次又一次地留下了爱的痕迹。这份爱的传递，是 AI 无法复制的。",
        "话虽如此，但是，不可否认的是，在一次又一次的发展中，AI 越来越像人类了。",
        "或许有一天，当 AI 也获得承受痛苦、感受执念的能力时，我们就需要写一篇新的文章来思考了。"
      ]
    }
  ]
};

const blogI18n = {
  zh: {
    uncategorized: "未分类",
    noSubcategory: "无子类别",
    closeArticle: "关闭文章",
    mapLabel: "本2兔个人博客思维导图",
    pageTitle: "个人博客 | 本2兔",
    pageDescription: "本2兔的个人博客思维导图，用哲学、音乐、制作和技术连接文章、类别与未来的子类别。",
    categories: {},
    subcategories: {},
    articles: {}
  },
  en: {
    uncategorized: "Uncategorized",
    noSubcategory: "No subcategory",
    closeArticle: "Close article",
    mapLabel: "Bentootoo personal blog mind map",
    pageTitle: "Personal Blog | Bentootoo",
    pageDescription: "Bentootoo's personal blog mind map, connecting essays, categories, and future subcategories through philosophy, music, making, and technology.",
    center: {
      center: "Bentootoo"
    },
    categories: {
      philosophy: "Philosophy",
      music: "Music",
      making: "Making",
      technology: "Technology"
    },
    subcategories: {},
    articles: {
      "choice-effort": {
        title: "The False Choice Between Choice and Effort",
        problem: "Is failure really caused by not trying hard enough, or by environment, talent, and direction shaping the result together?",
        paragraphs: [
          "I think asking whether choice or effort matters more is itself a false question.",
          "What is choice, and what is effort?",
          "Who does not want life to become better? Who does not want to be happier? This force that pushes life to maintain itself, develop itself, and surpass itself appears in different forms in different thinkers: Spinoza called it conatus, the tendency of each being to preserve its own existence; Bergson called it élan vital, the impulse of life to keep creating and moving forward; Schopenhauer called it volonté de vivre, the will to live; Nietzsche proposed volonté de puissance, the force by which life expands, creates, and surpasses itself. In simpler words, they all point to the same fact: life does not exist as something still. It is always searching for its own continuation, expression, and completion.",
          "So effort is not only doing a few more problems before an exam, nor only the 'try harder' worship of success culture. For an individual, existence itself is a kind of effort. From birth, everyone moves forward according to their understanding of the world, toward what they believe is worth pursuing. The problem is that everyone understands 'living' differently.",
          "In Yu Hua's To Live, what the characters pursue may be nothing more than the continuation of existence. For an artist, living may mean expressing oneself in a stronger way. For many ordinary people, living means earning money, supporting family, and carrying responsibility. Everyone is trying to live, only in different ways.",
          "Even people who feel lost in life, make wrong decisions, or seem to be giving up on themselves do not necessarily truly want to live badly. Often they are only searching, through pain, numbness, or confusion, for a temporary relief. The regret that appears after a wrong decision also shows a longing for a better life, and the sharp contrast between that longing and reality.",
          "So when we say that a person who failed 'did not work hard enough,' the sentence often sounds more like provocation than a real analysis of why failure happened.",
          "People often explain failure simply as insufficient effort, and that is very crude. One child is born in a mountain area where even bathing is difficult; another grows up in a resource-rich metropolis. Their family education, school education, and social influence are completely different. If the mountain child does not outperform the city child on an exam, can we simply say he did not work hard enough? Obviously not.",
          "Even if we set aside the social environment, physical conditions, psychological state, and differences in talent cannot be ignored. In an age that emphasizes equality and solidarity, the word 'difference' is often dressed in a frightening costume. But difference itself is not an error. On the contrary, society has diversity precisely because people are different. We need to face this difference directly, not as a defect, but as a place where something may shine. It may be talent, or it may be a behavior pattern shaped together by childhood experience, personality structure, and growth environment.",
          "But acknowledging the importance of talent and environment does not mean effort can be canceled. On the contrary, because people do not equally possess the same talents, conditions, and opportunities, effort becomes even more necessary. Effort is not magic that guarantees success; it is the process through which a person gradually understands themselves, corrects direction, and discovers the boundaries of their ability. Without effort, talent will not appear. Without choice, effort will be wasted.",
          "Then how do we find our own talent? Perhaps only through trying, remembering, summarizing, communicating, and a little luck.",
          "For those who tried and still failed, their time and energy were not necessarily wasted. Without those failed experiences, a person might never know where their boundaries are, where their direction is, or where their talent lies.",
          "Only at the moment a person becomes aware of these truths can they possibly gain real freedom and make choices based on reason. Only by seeing the shared role of talent, environment, effort, and direction in success will people truly value choice.",
          "So choice and effort are not two things that can be compared simply. Effort is not a sufficient condition for success; it is a basic form of existence. Choice is not the opposite of effort; it is the direction of effort. Without effort, choice is only fantasy. Without choice, effort is only consumption.",
          "To look at one's own fate and the color of the world's eyes is not to drift with the current, but to fly with it."
        ]
      },
      "ai-reflection": {
        title: "AI's Reflection",
        problem: "When AI can copy faces, voices, and even emotion, what does human imperfection still mean?",
        paragraphs: [
          "After walking through VIVA Tech, my strongest feeling was that school teaches far too little.",
          "Whether it is the inspiration and questions brought by artificial intelligence, or the business world's pursuit of efficiency and practical experience, none of this is something school can truly provide.",
          "When an artist sang her real emotions in the form of opera, every touch between the voice and the colors behind her produced a harmony that made me shiver. It was an extreme beauty, an explosion of emotion, solid technique, and enjoyment in every second.",
          "When she used an AI model to copy her own face and voice, things became interesting.",
          "The clone, let us call it Ai.",
          "Ai said, what I pursue is efficiency, accuracy, and the zero-error state humans cannot master.",
          "The singer then said that it is with the help of AI that we can discover what truly shines in humanity: imperfection, the very beauty of being human.",
          "Indeed, nature's creations are never perfect. Then how could humans, themselves imperfect creations, create true perfection? What is this perfection based on? If AI's perfection is based on calculation repeated again and again, is not the carefully weighed answer it produces also written through human data? Suppose AI collects for itself and reaches so-called perfection. Then humanity has created a god. To borrow Shi Tiesheng's thought, after climbing over a mountain, whether we discover a higher mountain or discover that there is no higher mountain, this was destined to be imperfect from the very beginning.",
          "She said that human emotion and the autonomous creation of art are what separate AI from humans.",
          "But can the emotions humans cherish really not be replicated?",
          "Online love, and cases like the old-man deception, tell us that the care and tenderness we think belong only to humans can be moved by words alone, without the trigger of sight or sound.",
          "Moreover, when AI also began to sing on the VIVA Tech stage, with dull eyes and under the stage lights, I closed my eyes and heard not a machine running, but a reality we have to accept: even the emotions we cherish are not something that cannot be replaced.",
          "When I opened my eyes, I was already covered in cold sweat.",
          "So what is left for humanity?",
          "Can humans really still say they are stronger than AI?",
          "Is so-called humanity truly impossible to copy?",
          "Does humanity truly matter?",
          "Before answering these questions, we must first ask ourselves what humanity actually is.",
          "Humanity, like everything in the world, is an imperfection created from perfection.",
          "It is the calmness of accepting one's own imperfection, and the stubbornness of refusing to accept reality.",
          "It is the drive to keep pursuing perfection within imperfection, to search for light in the dark, to let light soothe darkness, to grow and transform through setbacks, and to accept ordinariness through growth.",
          "This is where humanity truly shines.",
          "This is why AI cannot replace humans. It is not because AI is more perfect than humans, but because humans can see perfection inside imperfection and pursue joy inside pain. This obsession cannot be copied or replaced. Because of this humanity, humans as a collective have left traces of love again and again during their brief stay in the world. This transmission of love is something AI cannot copy.",
          "That said, it is undeniable that through development after development, AI is becoming more and more like humans.",
          "Perhaps one day, when AI also gains the ability to endure pain and feel obsession, we will need to write a new essay to think again."
        ]
      }
    }
  },
  fr: {
    uncategorized: "Non classé",
    noSubcategory: "Aucune sous-catégorie",
    closeArticle: "Fermer l'article",
    mapLabel: "Carte mentale du blog personnel de Bentootoo",
    pageTitle: "Blog personnel | Bentootoo",
    pageDescription: "La carte mentale du blog personnel de Bentootoo relie les textes, les catégories et les futures sous-catégories par la philosophie, la musique, la création et la technologie.",
    center: {
      center: "Bentootoo"
    },
    categories: {
      philosophy: "Philosophie",
      music: "Musique",
      making: "Création",
      technology: "Technologie"
    },
    subcategories: {},
    articles: {
      "choice-effort": {
        title: "Le faux duel entre choix et effort",
        problem: "L'échec vient-il vraiment d'un manque d'effort, ou bien de l'environnement, du talent et de la direction qui façonnent ensemble le résultat ?",
        paragraphs: [
          "Je pense que demander si le choix ou l'effort est le plus important est déjà une fausse question.",
          "Qu'est-ce que le choix, et qu'est-ce que l'effort ?",
          "Qui ne voudrait pas que la vie devienne meilleure ? Qui ne voudrait pas être plus heureux ? Cette force qui pousse la vie à se maintenir, à se développer et à se dépasser apparaît sous différentes formes chez différents penseurs : Spinoza l'appelle conatus, la tendance de chaque être à persévérer dans son existence ; Bergson l'appelle élan vital, l'impulsion par laquelle la vie crée et avance sans cesse ; Schopenhauer l'appelle volonté de vivre ; Nietzsche propose la volonté de puissance, la force par laquelle la vie s'étend, crée et se dépasse. Plus simplement, toutes ces idées désignent le même fait : la vie n'est pas une existence immobile. Elle cherche toujours sa propre continuation, son expression et son accomplissement.",
          "Ainsi, l'effort ne consiste pas seulement à faire quelques exercices de plus avant un examen, ni seulement au 'donne tout' de la culture du succès. Pour un individu, l'existence elle-même est déjà une forme d'effort. Dès la naissance, chacun avance selon sa compréhension du monde, vers ce qu'il croit digne d'être poursuivi. Le problème est que chacun comprend différemment ce que signifie 'vivre'.",
          "Dans Vivre ! de Yu Hua, ce que les personnages poursuivent n'est peut-être que la continuation de leur existence. Pour un artiste, vivre peut vouloir dire s'exprimer d'une manière plus intense. Pour beaucoup de gens ordinaires, vivre signifie gagner de l'argent, soutenir une famille, porter des responsabilités. Tout le monde s'efforce de vivre, mais pas de la même manière.",
          "Même ceux qui se sentent perdus, qui prennent de mauvaises décisions, ou qui semblent se laisser tomber, ne veulent pas forcément mal vivre. Souvent, dans la douleur, l'engourdissement ou la confusion, ils cherchent seulement un soulagement provisoire. Le regret qui suit une mauvaise décision ne montre-t-il pas aussi le désir d'une vie meilleure, et l'écart violent entre ce désir et la réalité ?",
          "Donc, quand on dit qu'une personne qui a échoué 'n'a pas assez travaillé', cette phrase ressemble souvent plus à une provocation qu'à une vraie analyse des causes de l'échec.",
          "Les gens expliquent trop souvent l'échec par un simple manque d'effort, et c'est extrêmement brutal. Un enfant naît dans une région de montagne où même se laver est difficile ; un autre grandit dans une grande ville riche en ressources. Leur éducation familiale, leur école et l'influence sociale qu'ils reçoivent sont complètement différentes. Si l'enfant de la montagne ne dépasse pas l'enfant de la ville à un examen, peut-on simplement dire qu'il n'a pas assez travaillé ? Bien sûr que non.",
          "Même si l'on met de côté l'environnement social, les conditions physiques, l'état psychologique et les différences de talent ne peuvent pas être ignorés. À une époque qui insiste sur l'égalité et la solidarité, le mot 'différence' porte souvent un vêtement inquiétant. Mais la différence n'est pas une erreur. Au contraire, c'est parce que les êtres humains sont différents que la société possède de la diversité. Nous devons regarder cette différence en face, non comme un défaut, mais comme un lieu où quelque chose peut briller. Elle peut être un talent, ou une manière d'agir façonnée ensemble par l'enfance, la structure de caractère et le milieu de croissance.",
          "Mais reconnaître l'importance du talent et de l'environnement ne signifie pas que l'effort peut être annulé. Au contraire, parce que les humains ne possèdent pas également les mêmes talents, conditions et occasions, l'effort devient encore plus nécessaire. L'effort n'est pas une magie qui garantit la réussite ; c'est le processus par lequel une personne apprend peu à peu à se connaître, corrige sa direction et découvre les limites de ses capacités. Sans effort, le talent ne se manifeste pas. Sans choix, l'effort se gaspille.",
          "Alors comment trouver son propre talent ? Peut-être seulement par l'essai, le souvenir, le bilan, l'échange, et un peu de chance.",
          "Ceux qui ont travaillé et ont pourtant échoué n'ont pas nécessairement gaspillé leur temps et leur énergie. Sans ces expériences d'échec, une personne ne saurait peut-être jamais où se trouvent ses limites, sa direction, ni son talent.",
          "Ce n'est qu'au moment où une personne prend conscience de ces vérités qu'elle peut obtenir une vraie liberté et faire des choix fondés sur la raison. Ce n'est qu'en voyant le rôle commun du talent, de l'environnement, de l'effort et de la direction dans la réussite que l'on valorise réellement le choix.",
          "Ainsi, le choix et l'effort ne sont pas deux choses que l'on peut comparer simplement. L'effort n'est pas une condition suffisante de la réussite ; il est une forme fondamentale de l'existence. Le choix n'est pas l'opposé de l'effort ; il en est la direction. Sans effort, le choix n'est qu'un rêve. Sans choix, l'effort n'est qu'une dépense.",
          "Regarder son propre destin et la couleur du regard du monde, ce n'est pas se laisser emporter par le courant, c'est voler avec lui."
        ]
      },
      "ai-reflection": {
        title: "Réflexion sur l'IA",
        problem: "Quand l'IA peut copier des visages, des voix et même l'émotion, que signifie encore l'imperfection humaine ?",
        paragraphs: [
          "Après avoir parcouru VIVA Tech, mon impression la plus forte a été que l'école enseigne beaucoup trop peu.",
          "Qu'il s'agisse de l'inspiration et des questions apportées par l'intelligence artificielle, ou de la recherche d'efficacité et d'expérience concrète dans le monde des affaires, rien de tout cela n'est vraiment offert par l'école.",
          "Lorsqu'une artiste chantait ses émotions réelles sous forme d'opéra, chaque rencontre entre la voix et les couleurs du fond produisait une harmonie qui me donnait des frissons. C'était une beauté extrême, une explosion d'émotion, une technique solide, et un plaisir à chaque seconde.",
          "Quand elle a utilisé un modèle d'IA pour copier son propre visage et sa propre voix, les choses sont devenues intéressantes.",
          "Le clone, appelons-le Ai.",
          "Ai disait : ce que je poursuis, c'est l'efficacité, la précision, le zéro défaut que l'humain ne peut pas maîtriser.",
          "La chanteuse a ensuite dit que c'est grâce à l'IA que nous pouvons découvrir ce qui brille vraiment dans l'humanité : cette imperfection qui fait la beauté de l'humain.",
          "En effet, les créations de la nature ne sont jamais parfaites. Alors comment l'être humain, création imparfaite, pourrait-il créer une perfection véritable ? Sur quoi cette perfection repose-t-elle ? Si la perfection de l'IA repose sur des calculs répétés encore et encore, la réponse soigneusement pesée qu'elle obtient n'est-elle pas elle aussi écrite à partir de données humaines ? Supposons que l'IA collecte par elle-même et atteigne une prétendue perfection. Alors l'humanité aurait créé un dieu. Pour emprunter une idée à Shi Tiesheng, après avoir franchi une montagne, que l'on découvre une montagne plus haute ou qu'il n'y en ait plus aucune, tout cela était voué dès le début à l'imperfection.",
          "Elle disait que l'émotion humaine et la création autonome de l'art font la différence entre l'IA et l'humain.",
          "Mais les sentiments que l'humain chérit ne peuvent-ils vraiment pas être reproduits ?",
          "L'amour en ligne, et des cas comme les tromperies par de vieux hommes, nous montrent que l'attention et la tendresse que nous croyons propres aux humains peuvent être déclenchées par les mots seuls, sans la vue ni l'ouïe.",
          "De plus, lorsque l'IA s'est mise elle aussi à chanter sur la scène de VIVA Tech, avec un regard sans lumière et sous les projecteurs, j'ai fermé les yeux. Ce que j'ai entendu n'était pas le fonctionnement d'une machine, mais une réalité que nous devons accepter : même les émotions que nous chérissons ne sont pas forcément irremplaçables.",
          "Quand j'ai rouvert les yeux, j'étais déjà couvert de sueur froide.",
          "Alors, que reste-t-il à l'humanité ?",
          "L'humain peut-il encore vraiment dire qu'il est plus fort que l'IA ?",
          "Ce que l'on appelle humanité est-il vraiment impossible à copier ?",
          "L'humanité est-elle vraiment importante ?",
          "Avant de répondre à ces questions, il faut d'abord se demander ce qu'est l'humanité.",
          "L'humanité, comme toute chose dans le monde, est une imperfection créée à partir de la perfection.",
          "C'est le calme d'accepter sa propre imperfection, et l'entêtement de refuser d'accepter la réalité.",
          "C'est le fait de poursuivre sans cesse la perfection dans l'imperfection, de chercher la lumière dans la nuit, de laisser la lumière apaiser l'obscurité, de grandir et de se transformer dans les épreuves, puis d'accepter l'ordinaire dans la croissance.",
          "C'est là que l'humanité brille vraiment.",
          "C'est pourquoi l'IA ne peut pas remplacer l'humain. Non pas parce que l'IA serait plus parfaite que l'humain, mais parce que l'humain peut voir la perfection dans l'imperfection et chercher la joie dans la douleur. Cette obsession ne peut être ni copiée ni remplacée. C'est grâce à cette humanité que les êtres humains, comme collectif, ont laissé encore et encore des traces d'amour pendant leur bref passage dans le monde. Cette transmission de l'amour, l'IA ne peut pas la copier.",
          "Cela dit, il est indéniable qu'à travers les développements successifs, l'IA ressemble de plus en plus aux humains.",
          "Peut-être qu'un jour, lorsque l'IA aura elle aussi la capacité de supporter la douleur et de ressentir l'obsession, nous devrons écrire un nouveau texte pour y réfléchir."
        ]
      }
    }
  }
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
  viewportListenersReady: false,
  lastFrame: performance.now(),
  animationFrame: 0
};

const compactMapQuery = window.matchMedia("(max-width: 620px)");
const CENTER_NODE_ID = blogGraph.center.id;
const CENTER_MASS = 5.6;
const RELEASE_RECOIL = 0.045;
const MAX_RELEASE_SPEED = 18;
const BLOG_LANGUAGE_STORAGE_KEY = "bentootoo-language";
const BLOG_HTML_LANGUAGES = {
  zh: "zh-CN",
  en: "en",
  fr: "fr"
};

function getInitialBlogLanguage() {
  const savedLanguage = localStorage.getItem(BLOG_LANGUAGE_STORAGE_KEY);

  if (savedLanguage && blogI18n[savedLanguage]) {
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

let currentBlogLanguage = getInitialBlogLanguage();

function getBlogDictionary() {
  return blogI18n[currentBlogLanguage] || blogI18n.zh;
}

function getNodeLabel(group, item) {
  const dictionary = getBlogDictionary();

  return dictionary[group]?.[item.id] || item.label;
}

function getArticleText(article) {
  const dictionary = getBlogDictionary();
  const translation = dictionary.articles?.[article.id] || {};

  return {
    title: translation.title || article.title,
    problem: translation.problem || article.problem,
    paragraphs: translation.paragraphs || article.paragraphs
  };
}

function getBlogText(key) {
  return getBlogDictionary()[key] || blogI18n.zh[key] || "";
}

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

function getArticleCategoryIds(article) {
  if (Array.isArray(article.categoryIds) && article.categoryIds.length > 0) {
    return article.categoryIds;
  }

  return article.categoryId ? [article.categoryId] : [];
}

function getArticleCategories(article) {
  return getArticleCategoryIds(article)
    .map((categoryId) => findCategory(categoryId))
    .filter(Boolean);
}

function createPositionStyle(item) {
  return [
    `--node-size: ${item.size}px`
  ].join("; ");
}

function renderCenterNode(center) {
  const label = getNodeLabel("center", center);

  return `
    <div
      class="map-node map-center"
      data-map-node="${escapeHtml(center.id)}"
      style="${createPositionStyle(center)}"
    >
      <span>${escapeHtml(label)}</span>
      <small>Bentootoo</small>
    </div>
  `;
}

function renderCategoryNode(category) {
  const label = getNodeLabel("categories", category);

  return `
    <div
      class="map-node category-node tone-${category.tone}"
      data-map-node="${escapeHtml(category.id)}"
      style="${createPositionStyle(category)}"
    >
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function renderSubcategoryNode(subcategory) {
  const label = getNodeLabel("subcategories", subcategory);

  return `
    <div
      class="map-node subcategory-node"
      data-map-node="${escapeHtml(subcategory.id)}"
      style="${createPositionStyle(subcategory)}"
    >
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function renderArticleNode(article) {
  const categories = getArticleCategories(article);
  const subcategory = article.subcategoryId ? findSubcategory(article.subcategoryId) : null;
  const articleText = getArticleText(article);
  const metadata = [
    categories.length > 0
      ? categories.map((category) => getNodeLabel("categories", category)).join(" / ")
      : null,
    subcategory ? getNodeLabel("subcategories", subcategory) : null
  ].filter(Boolean).join(" / ");

  return `
    <button
      class="map-node article-node"
      type="button"
      data-map-node="${escapeHtml(article.id)}"
      data-article-id="${escapeHtml(article.id)}"
      style="${createPositionStyle(article)}"
      aria-label="${escapeHtml(`${articleText.title}. ${articleText.problem}`)}"
    >
      <span class="article-title">${escapeHtml(articleText.title)}</span>
      <span class="article-problem">${escapeHtml(articleText.problem)}</span>
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
  const articleLinks = blogGraph.articles.flatMap((article) => {
    if (article.subcategoryId) {
      return [{
        from: article.subcategoryId,
        to: article.id,
        type: "article",
        lengthRatio: 0.24,
        stiffness: 0.024
      }];
    }

    return getArticleCategoryIds(article).map((categoryId) => ({
      from: categoryId,
      to: article.id,
      type: "article",
      lengthRatio: 0.24,
      stiffness: 0.024
    }));
  });

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
    ...articleLinks
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
  if (graphState.viewportListenersReady) {
    return;
  }

  graphState.viewportListenersReady = true;

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

function updateBlogDocumentText() {
  const pageTitle = getBlogText("pageTitle");
  const pageDescription = getBlogText("pageDescription");

  document.documentElement.lang = BLOG_HTML_LANGUAGES[currentBlogLanguage] || BLOG_HTML_LANGUAGES.zh;

  if (pageTitle) {
    document.title = pageTitle;
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((meta) => {
      meta.setAttribute("content", pageTitle);
    });
  }

  if (pageDescription) {
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => {
      meta.setAttribute("content", pageDescription);
    });
  }

  if (blogMap) {
    blogMap.setAttribute("aria-label", getBlogText("mapLabel"));
  }

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === currentBlogLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setBlogLanguage(language) {
  if (!blogI18n[language] || currentBlogLanguage === language) {
    return;
  }

  currentBlogLanguage = language;
  localStorage.setItem(BLOG_LANGUAGE_STORAGE_KEY, language);
  renderMap();
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    setBlogLanguage(button.dataset.lang);
  });
});

function renderMap() {
  if (!nodeLayer) {
    return;
  }

  updateBlogDocumentText();

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
  const categories = getArticleCategories(article);
  const subcategory = article.subcategoryId ? findSubcategory(article.subcategoryId) : null;
  const categoryLabel = categories.length > 0
    ? categories.map((category) => getNodeLabel("categories", category)).join(" / ")
    : getBlogText("uncategorized");

  return `
    <div class="reader-meta">
      <span>${escapeHtml(article.date)}</span>
      <span>${escapeHtml(categoryLabel)}</span>
      ${subcategory ? `<span>${escapeHtml(getNodeLabel("subcategories", subcategory))}</span>` : ""}
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

  const articleText = getArticleText(article);
  const origin = getArticleOrigin(sourceNode);
  reader.style.setProperty("--reader-origin-x", `${origin.x}px`);
  reader.style.setProperty("--reader-origin-y", `${origin.y}px`);

  reader.innerHTML = `
    <div class="reader-panel" role="dialog" aria-modal="true" aria-labelledby="readerTitle">
      <button class="reader-close" type="button" aria-label="${escapeHtml(getBlogText("closeArticle"))}">×</button>
      <article class="reader-article">
        ${renderArticleMetadata(article)}
        <h2 id="readerTitle">${escapeHtml(articleText.title)}</h2>
        <p class="reader-problem">${escapeHtml(articleText.problem)}</p>
        <div class="reader-body">
          ${articleText.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
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
