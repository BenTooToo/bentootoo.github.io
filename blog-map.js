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
      id: "agent-vibe-coding-future",
      title: "论 Agent、Vibe Coding 与未来",
      problem: "花了一个周创作折棠7中同窗录给我的启发",
      date: "2026-07-12",
      mainCategoryId: "making",
      categoryIds: ["making", "technology"],
      subcategoryId: null,
      x: 50,
      y: 27,
      mobileX: 46,
      mobileY: 26,
      size: 170,
      gameUrl: "https://bentootoo.github.io/Empty_classes/",
      links: [
        {
          text: "银河电灯",
          url: "https://ginga-light.top/works"
        }
      ],
      paragraphs: [
        "在众多有理想 (划去)有空闲功夫的程序人来说，使用agent来进行辅助编程，甚至完全变成，也就是我们说的vibe coding，在今天已经并不是一件新鲜事了，作为学习繁重的考研大学生来说，能够接触到codex 这一类的agent，就说明这件事情已经变得越来越accessible。所以，在agent发展的如此迅速的今天，就连讨论这个ai与创作的关系这个问题本身，也不是一件多么新奇的事情了。",
        "今天，我不会从技术实践角度讲解能耗，也不会把目光放到ai自主科研这种令人憧憬但又心生寒意的目标，而是把目光放在自己更感兴趣的方面，也就是游戏创作方面，更准确来说，就是利用agent来辅助游戏设计，如果说，当像银河电灯这样的自由创作者，能够通过八开claude 窗口来进行vide coding进行arg游戏的创作还需要的是对游戏热情的门槛。那么，当我使用codex 作为主agent，仅仅利用GPT plus 的每周免费额度来进行vibe coding，并且在一个周之内做出了一个像模像样的作品时，我认为，创作的黄金年代不是未来，而是现在了。",
        "ai本质上是一个放大器",
        "他所能放大的，是你的执行一个想法的效率，他使你能够不需要读万卷书也可以找到更广阔的思路，他让你不需要学习代码就能创作程序。一个时长两个小时的arg项目，毫不夸张的说，正常可能需要花费我一个暑假才能做出来的东西，我只花了不到一个周就做出来，因为和agent进行vibe coding，就像是和一个志同道合的好友去进行天马行空的想象，你尽可能地说自己的想法，你猜怎么着，ai他就是能给你做出来。仿佛再过个几十年，最重要的不是技术，而是人的想象力了。",
        "在我进行折棠7中同窗录的创作的时候，我发现最大的问题依然从技术变成了交流。",
        "ai在创作的时候，如果没有一个长达好几千字的精准prompt来进行知道，ai通常会进行很多画蛇添足的设计，很多时候，我给他说完了想法，看他做的预览效果，然后再告诉他哪里做的不好，哪里不和我的心意，这种对话形式是很令人上瘾的。就仿佛是导演和演员之间的关系。",
        "游戏真正做出来的时候，剧情，信息的填充，关卡设计都是自己创作的，但是代码我却几乎没怎么动过，这种感觉是很奇妙的。我认为这就是未来，我认为代码就是应该这个样子才能让人类的总体技术水平和创作能力再上一个档次。"
      ]
    },
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
      mainCategoryId: "philosophy",
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
    },
    {
      id: "ai-singularity-communism",
      title: "论 AI、奇异点与共产主义",
      problem: "我们不探讨政治，我们探讨未来",
      date: "2026-08-05",
      mainCategoryId: "philosophy",
      categoryIds: ["philosophy", "technology"],
      subcategoryId: null,
      x: 86,
      y: 50,
      mobileX: 82,
      mobileY: 50,
      size: 174,
      paragraphs: [
        "我认为自己可以用很多的形容词来形容：创意、理想主义者、有活力、荒谬，以及一点点的迟钝。",
        "这样的形容词还可以一直延续很久，但是我并不认为政治是其中一个形容词。",
        "无论政治原初有着多少不同的定义和解析，在法国，以及很多欧美国家来说，在当今社会环境下大谈政治本身就是一件很荒谬的事。太多的利益冲突，太多的历史原因，太多的爱恨情仇。并不是不能参与，而是说，当你的参与必然会招惹另外一个群体的敌意时，政治的讨论就已然从一种社会参与变成了一种风险投机。",
        "“如果我和他聊政治，我们会不会成为敌人？如果我以这种形式参与到政治当中，我会不会被人敌视？”",
        "所以，我不是一个政治的人。",
        "我相信自己不是第一个有过这个想法的人。",
        "AI 会使人失业。我认为这并不是侃侃而谈。为什么呢？冷战结束后，以美元体系、金融全球化和跨国资本流动为核心的世界经济秩序，进一步确定了 21 世纪初的发展方向。但资本主义并没有发明交换、货币或债务。除去资本积累和市场交换的扩展，价值本身是人类进化的象征，是发展的根基。回看历史，不管是巴黎公社运动的失败，还是其他共产主义的尝试，都教会了我们一件事情：如果共产主义真的可以实现，那么它必定以一种极端高度的富裕为根基。这里的富裕不仅是物质上的富裕，更是一种技术和精神上的富足。我认为，资本主义，以及延伸出来的社会主义，本质上是一个过渡阶段，一个由于技术限制而不得不最大化生产力的过渡。",
        "当然，这里的共产主义更偏向于当代所说的自动化社会主义，Nick Srnicek 与 Alex Williams 所提出的后资本主义，或者 Aaron Bastani 所提出的全自动化奢华共产主义。我本人特别反感这种纯粹由“高级的名字”所堆叠出来的知识壁垒。所以，接下来让我们来想象这样一个社会。",
        "当 AI 已经达到一种可以完全自主工作的程度，公司管理者要做的第一件事情就是裁员，裁掉所有的低级技术人员。马克思在《政治经济学批判大纲》的“机器论片段”中曾预见，当社会知识和机器体系成为直接生产力时，以个人劳动时间作为财富尺度的制度将产生根本矛盾。AI 或许正是这种“社会一般智力”的一种极端化形式。",
        "很快，技术人才就会从根源上断代。当老一辈的高级技术人员退休，技术人员会产生完全的缺失。最后就会产生两种情况：要么 AI 完全取代职员，让高等技术人员的存在也完全没有必要。那个时候，资本主义就彻底走向了极端：每一个公司都会成为股东和 AI 的完全技术壁垒。而当没有人再有工作的机会，人们不就同时失去了消费能力？这种消费能力的缺失，不就会导致公司的崩塌？",
        "第二种情况，则是资本家们在意识到这一点以后，强行限制 AI 的使用，让生产力保持在一个平衡点：既不会使人失业，又能最大化地提高人类的效率。很可惜，这第二个假设实现的可能性远低于第一个假设，因为人性驱使着探索和提升。只要有需求，就会有人去钻研；而就 AI 目前的发展趋势，这个需求并不会被限制，纸是包不住火的。",
        "所以呢？当大部分人都失业，这代表的是社会阶级的彻底固化，还是一个从上而下的完全社会崩坏？",
        "我认为，都不是。",
        "实际上，AI 并不能缩短阶级之间的差距。无论是关系网、信息差、初始资本，还是生活环境，AI 都不能做出什么改变。硬要说的话，可能信息差会有所好转。",
        "但本质上，AI 必定会在某一天消除阶级本身的概念。为什么呢？因为这个社会将不再需要管理者、指挥者和工作者。当 AI 不再是人类的工具，而是一种可以自主进化、自主科研的存在时，人类的工作又有什么意义？当一个基于大数据、纯粹理性、近乎全知全能的智能体为我们指明方向时，我们有什么理由去拒绝？",
        "很可惜，事情没有那么简单。AI 注定无法全知全能，没有事物可以。抛开精神世界不谈，就物理世界而言，人类没有办法造神。但即便如此，这样一个包含着人类所有知识的存在，不还是值得信任么？如果需要反对的声音，AI 自己难道不可以生成么？多线处理、无穷的思考，甚至不断地检查错误、进行证明——这一切都基于能量的消耗，但是，如同人类一样，不是么？",
        "我就这样想着，越想越悲观。我认为人类很难从中找到破局的可能性了。从一个角度来说，制造出 AI，本来就是一种必然；AI 取代人类，同理。所谓奇异点，也许并不是一道突然出现的闪电，而是这套逻辑越过某个再也无法回头的界线。",
        "所以，假设这一切都会在不久后的将来成为现实，人类除了活着以外，还能够干什么？电影？娱乐？游戏？奢靡？还是恐惧？癫狂？崩坏？自寻短见？Nick Srnicek 与 Alex Williams 在《发明未来：后资本主义与无工作世界》中强调，自动化本身并不是解放。只有当自动化与缩短工时、社会保障以及对生产能力的公共控制结合起来，它才可能成为后工作社会的物质基础。",
        "而这个时候，我们之前所提到的共产主义又变成了一个可行的现实。",
        "各取所需，同时只干着自己喜欢做的事情。不管是某一个职业、某一个兴趣爱好，还是艺术创作，不断地表达自己，不断地充实自己的生活。让生活从工作中脱离并不是一个惩罚，而是一个新的开始。让手机重新变为电话，让探索成为可能。寻找这茫茫人海之中的联系，然后断开联系，如此反复；不断地感受人与人之间的爱意，让自己的精神世界充盈，才能避免物理世界的空虚和虚无。",
        "我再一次地，为了避免虚无主义，陷入了这理想主义的怪圈。",
        "又或者，这就是人类的终结。",
        "我这么想着，又点开了自己的网页，开始设计起自己的游戏。"
      ]
    },
    {
      id: "my-ideal",
      title: "我的理想",
      problem: "名为幼稚的成熟",
      date: "2026-08-05",
      mainCategoryId: "making",
      categoryIds: ["making", "music"],
      subcategoryId: null,
      x: 14,
      y: 86,
      mobileX: 18,
      mobileY: 84,
      size: 164,
      paragraphs: [
        "我正在经历人生的一个重大转折期。",
        "从一个学生到工作者的转变，一个有着寒暑假的求知者，到一个以赚钱为目的的打工人。",
        "让我震惊的是，我从来没有公开表达过自己对于这个转变的恐惧，但是，我相信对于很多人来说，是很忐忑的。",
        "在这个最后的暑假，我似乎找到了自己的所爱，也就是音乐、游戏制作。",
        "那是一种参与过后的满足感。音乐来说，我每周都会去本地的酒馆进行 jam，有的时候我会弹钢琴，有的时候我会弹键盘，有的时候我会唱歌，有的时候我会弹三角铁，有的时候我会拍非洲鼓，有的时候，我翩翩起舞，还有的时候，我就在那里静静地听。",
        "小酌一杯，然后在那里聆听、享受、参与、活在当下。",
        "我认为人生不过如此。我认为我对自己的人生已经很满足了。",
        "对于游戏创作来说，我最近成功地组织起来了一个 5 个人的团队，美术、代码、音乐，所有人都是我的朋友，都是我一手组织起来的。我动用了自己所有的联系，我感觉真的……无比地幸福。就是说，能够在我需要的时候，有这么一帮和我志同道合的朋友，即使动机不同，但是能够在这短暂的 4 天里面一起奋斗，一起不眠。",
        "或许这就是我理想的人生。",
        "但是我也很忐忑。",
        "代码从来就不是我的强项，不管是在学校，还是本次的 game jam，我都不可避免地用了很多的 AI。对此，我很害怕。因为，其他人的天赋是实打实的，而我自己却没有什么实质上的努力，只是一味地写代码罢了。",
        "我不断地质问自己，我真的适合制作游戏么？此时此刻，我认为答案仍然是：我适合。",
        "因为，真正让我兴奋与幸福的时刻，从来都不是思考代码结构，而是想法的诞生、产品的实现、项目的管理。而代码本身，正是我可以，也应该用 AI 来实现的一种手段。也就是说，在一个 AI 盛行的时代，我有幸能够借助他人制造的工具来实现自己的梦想。这本身对于我来说，是一件很浪漫的事情。而我认为，我这辈子就应该把自己的时间和精力奉献在这上面——并不是 AI 的开发，而是借助 AI，来开发别人可能会用到的工具，不管这是不是未来。对于我来说，这就是我最好的时机。未来大概率就会是如此：人人都可以开发，人人都可以想象。所以，我所做的，本质上是消耗我的时间，来为其他人提供一个便利的服务，把一个可能的想法提前实现出来，让他们不需要造轮子。",
        "我想要成为这样的一个制造者。",
        "我也一定会成为这样的一个制造者。这并不是自大，而是一种持久的人生目标。我这辈子永远不会成为我所期望的制造者，但是，能够借助我的 contact、我的工具，一点一点地接近这一个理想，我认为我的人生已经值得。"
      ]
    }
  ]
};

const blogI18n = {
  zh: {
    uncategorized: "未分类",
    noSubcategory: "无子类别",
    closeArticle: "关闭文章",
    gameLinkLabel: "点击这里进入游戏",
    mapLabel: "思索之屋文章思维导图",
    pageTitle: "思索之屋 | 本2兔",
    pageDescription: "思索之屋：本2兔用哲学、音乐、制作和技术连接文章、类别与彼此的想法。",
    categories: {},
    subcategories: {},
    articles: {}
  },
  en: {
    uncategorized: "Uncategorized",
    noSubcategory: "No subcategory",
    closeArticle: "Close article",
    gameLinkLabel: "Click here to enter the game",
    mapLabel: "House of Reflection essay map",
    pageTitle: "House of Reflection | Bentootoo",
    pageDescription: "The House of Reflection connects Bentootoo's essays and readers' ideas through philosophy, music, making, and technology.",
    center: {
      center: "本2兔"
    },
    categories: {
      philosophy: "Philosophy",
      music: "Music",
      making: "Making",
      technology: "Technology"
    },
    subcategories: {},
    articles: {
      "agent-vibe-coding-future": {
        title: "On Agents, Vibe Coding, and the Future",
        problem: "What I learned from spending a week creating Zhetang No. 7: Classmates",
        paragraphs: [
          "For programmers with ideals—or, cross that out, with time to spare—using agents to assist with coding, or even letting them take over almost entirely through what we call vibe coding, is no longer anything new. As a university student buried in preparation for graduate entrance exams, the fact that I can access agents such as Codex shows just how accessible this technology has become. With agents developing so quickly, even discussing the relationship between AI and creation is no longer a particularly novel subject.",
          "Today, I will not approach energy consumption from a technical perspective, nor will I focus on the inspiring yet unsettling prospect of AI conducting research autonomously. I want to look instead at what interests me more: game creation—or, more precisely, using agents to help design games. If an independent creator like Ginga Light can build an ARG by running eight Claude windows at once, enthusiasm for games still remains a threshold for creation. But when I used Codex as my main agent, relied only on the weekly allowance included with GPT Plus, and produced something genuinely presentable in less than a week, I came to believe that the golden age of creation is not in the future. It is already here.",
          "AI is, in essence, an amplifier.",
          "What it amplifies is your ability to turn an idea into reality. It lets you discover broader lines of thought without first reading ten thousand books, and create software without first learning how to code. An ARG lasting two hours could, without exaggeration, once have taken me an entire summer to build. I made it in less than a week. Vibe coding with an agent feels like imagining impossible things with a like-minded friend: you explain your ideas as freely as you can, and somehow AI can actually make them. It feels as if, a few decades from now, the most important human ability will no longer be technical skill, but imagination.",
          "While creating Zhetang No. 7: Classmates, I discovered that the greatest difficulty had shifted from technology to communication.",
          "Without an exact prompt thousands of words long to guide it, AI tends to add many unnecessary flourishes. Often, I explain an idea, look at the preview it produces, and then tell it what does not work and what does not match what I had in mind. This form of dialogue is strangely addictive. It feels like the relationship between a director and an actor.",
          "By the time the game was finished, I had created the story, filled in the information, and designed the levels, yet I had barely touched the code. The feeling was extraordinary. I believe this is the future. Code should work this way if we want humanity's overall technical capacity and creative power to reach another level."
        ]
      },
      "ai-singularity-communism": {
        title: "On AI, the Singularity, and Communism",
        problem: "We are not discussing politics. We are discussing the future.",
        paragraphs: [
          "I could describe myself with many words: creative, idealistic, energetic, absurd, and just a little slow on the uptake.",
          "The list could go on for a long time, but I do not think political is one of those words.",
          "However many original definitions and interpretations politics may have, talking grandly about politics in France—and in many Western countries—has become absurd in today's social climate. There are too many conflicts of interest, too many historical causes, too many loves and hatreds. It is not that one cannot participate. It is that when participation inevitably provokes the hostility of another group, political discussion ceases to be a form of civic engagement and becomes a speculative risk.",
          "‘If I talk politics with him, will we become enemies? If I participate in politics in this way, will people become hostile toward me?’",
          "So I am not a political person.",
          "I am sure I am not the first person to have thought this.",
          "AI will make people unemployed. I do not think this is empty talk. Why? After the end of the Cold War, a world economic order centered on the dollar system, financial globalization, and cross-border capital flows further established the direction of the early twenty-first century. Yet capitalism did not invent exchange, money, or debt. Beyond capital accumulation and the expansion of market exchange, value itself is a symbol of human evolution and a foundation of development. Looking back at history, both the failure of the Paris Commune and other communist experiments teach us one thing: if communism can truly be realized, it must rest on an extreme degree of abundance. That abundance must be not only material, but technological and spiritual as well. I see capitalism, and the socialism that developed from it, essentially as transitional stages—transitions forced by technological limits to maximize productive capacity.",
          "Of course, the communism I mean here is closer to what is now called automated socialism, the post-capitalism proposed by Nick Srnicek and Alex Williams, or Aaron Bastani's fully automated luxury communism. I strongly dislike the intellectual barriers built purely from stacks of ‘advanced’ terminology. So let us simply imagine such a society.",
          "Once AI can work with complete autonomy, the first thing company managers will do is dismiss employees, beginning with junior technical staff. In the ‘Fragment on Machines’ in the Grundrisse, Marx anticipated a fundamental contradiction: when social knowledge and systems of machinery become direct forces of production, wealth can no longer coherently be measured by individual labor time. AI may be an extreme form of this ‘general intellect.’",
          "The technical profession will soon be severed at its roots. When the older generation of senior specialists retires, there will be no one left to replace them. Two outcomes then become possible. In the first, AI entirely replaces employees, until even advanced specialists are unnecessary. Capitalism reaches its extreme: every company becomes a sealed technological barrier belonging to shareholders and AI. But if no one has an opportunity to work, do people not also lose their ability to consume? And would the disappearance of that purchasing power not bring companies down with it?",
          "In the second outcome, capital owners recognize the danger and forcibly restrict the use of AI, keeping productivity at a balance where it improves human efficiency as much as possible without eliminating jobs. Unfortunately, this outcome is far less likely than the first. Human nature drives exploration and improvement. Wherever demand exists, someone will pursue it; given AI's current trajectory, that demand will not be contained. Fire cannot be wrapped in paper forever.",
          "So what happens when most people are unemployed? Does it mean the total ossification of social class, or a complete collapse of society from the top down?",
          "I think it means neither.",
          "In reality, AI cannot narrow the gap between classes. Whether the decisive factor is social networks, unequal access to information, starting capital, or living conditions, AI cannot change very much. If anything, it may reduce information inequality a little.",
          "Yet at a deeper level, AI will inevitably abolish the very concept of class one day. Why? Because society will no longer need managers, commanders, or workers. When AI is no longer a human tool but an existence capable of improving itself and conducting research autonomously, what meaning will human work retain? When an almost omniscient and omnipotent intelligence, grounded in vast data and pure reason, points out a direction for us, what reason would we have to refuse it?",
          "Unfortunately, it is not that simple. AI is destined never to be omniscient or omnipotent; nothing can be. Even if we leave the spiritual world aside and consider only the physical one, humanity cannot manufacture a god. Yet would an existence containing all human knowledge not still deserve our trust? If dissenting voices are needed, could AI not generate them itself? Parallel processing, endless reflection, ceaseless error checking and proof—all of this consumes energy, but is that not true of human thought as well?",
          "The more I followed this thought, the more pessimistic I became. I found it hard to see how humanity could break out of it. From one perspective, creating AI was inevitable; AI replacing humanity follows the same logic. Perhaps the singularity will not arrive like a sudden bolt of lightning, but as the moment this logic crosses a boundary beyond which there is no return.",
          "So if all of this becomes reality in the near future, what can human beings do besides remain alive? Films? Entertainment? Games? Luxury? Or fear, madness, collapse, suicide? In Inventing the Future: Postcapitalism and a World Without Work, Nick Srnicek and Alex Williams stress that automation is not liberation in itself. Only when combined with shorter working hours, social security, and public control over productive capacity can it become the material basis of a post-work society.",
          "At that point, the communism mentioned earlier becomes a feasible reality once again.",
          "From each according to their needs, while everyone does only what they truly enjoy. It might be a profession, a hobby, or artistic creation: expressing oneself without end and continually enriching one's life. Separating life from work would not be a punishment, but a new beginning. Let the phone become a telephone again; let exploration become possible. Find connections within the vast sea of people, then break them, and repeat. Keep experiencing the affection between human beings, and fill the inner world so that it can withstand the emptiness and void of the physical one.",
          "Once again, in trying to escape nihilism, I have fallen into the same idealistic circle.",
          "Or perhaps this is simply the end of humanity.",
          "With that thought, I opened my webpage again and went back to designing my game."
        ]
      },
      "my-ideal": {
        title: "My Ideal",
        problem: "A Maturity Called Childishness",
        paragraphs: [
          "I am going through a major turning point in my life.",
          "It is the transition from student to worker—from a seeker of knowledge with winter and summer holidays to an employee working to earn money.",
          "What surprises me is that I have never openly expressed my fear of this transition, yet I believe it fills many people with unease.",
          "During this final summer holiday, I seem to have found what I love: music and game development.",
          "There is a sense of fulfillment that comes from taking part. In music, I go to a local bar for a jam every week. Sometimes I play piano, sometimes keyboard, sometimes I sing, sometimes I play the triangle, sometimes I beat an African drum, sometimes I dance, and sometimes I simply stand there and listen quietly.",
          "I have a drink, then listen, enjoy, participate, and live in the moment.",
          "I think this is all life needs to be. I think I am already deeply satisfied with my life.",
          "As for making games, I recently managed to bring together a team of five. Art, code, music—everyone is my friend, and I organized the whole group myself. I called on every connection I had, and I felt truly, indescribably happy. When I needed them, there was this group of like-minded friends. Even if our motivations differed, we could still spend those brief four days striving together and staying awake together.",
          "Perhaps this is my ideal life.",
          "But I am also uneasy.",
          "Code has never been my strength, whether at school or during this game jam, and I inevitably used a great deal of AI. That frightens me. Other people's talent is real and tangible, while I have made no substantial effort of my own—I have merely kept writing code.",
          "I keep asking myself whether I am truly suited to making games. At this moment, I still believe the answer is yes: I am.",
          "The moments that truly excite me and make me happy have never been those spent thinking about code structure. They are the birth of an idea, the realization of a product, and the management of a project. Code itself is a means that I can—and should—use AI to realize. In an age shaped by AI, I am fortunate to be able to use tools made by others to realize my dreams. To me, that is deeply romantic. I believe I should devote my life, time, and energy to this—not to developing AI itself, but to using AI to develop tools that others may need, whether or not that is the future. For me, this is the best possible moment. The future will probably be one in which everyone can develop and everyone can imagine. What I do, then, is spend my own time providing a convenient service for others: realizing a possible idea in advance so that they do not need to reinvent the wheel.",
          "I want to become that kind of maker.",
          "And I will become that kind of maker. This is not arrogance, but a lasting goal for my life. I may never fully become the maker I hope to be, but if I can use my contacts and my tools to move toward that ideal little by little, then I believe my life will already have been worthwhile."
        ]
      },
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
    gameLinkLabel: "Cliquez ici pour entrer dans le jeu",
    mapLabel: "Carte des textes de la Maison de réflexion",
    pageTitle: "Maison de réflexion | Bentootoo",
    pageDescription: "La Maison de réflexion relie les textes de Bentootoo et les idées de ses lecteurs par la philosophie, la musique, la création et la technologie.",
    center: {
      center: "本2兔"
    },
    categories: {
      philosophy: "Philosophie",
      music: "Musique",
      making: "Création",
      technology: "Technologie"
    },
    subcategories: {},
    articles: {
      "agent-vibe-coding-future": {
        title: "Des agents, du vibe coding et de l'avenir",
        problem: "Ce que m'a appris une semaine passée à créer Zhetang no 7 : Camarades de classe",
        paragraphs: [
          "Pour les programmeurs qui ont des idéaux — rayez cela : qui ont du temps libre — utiliser des agents pour assister la programmation, voire leur en confier presque entièrement la réalisation par ce que l'on appelle le vibe coding, n'a aujourd'hui plus rien de nouveau. Pour un étudiant accaparé par la préparation des concours d'entrée en master, le simple fait de pouvoir accéder à des agents comme Codex montre à quel point cette technologie est devenue accessible. À l'heure où les agents progressent si vite, même discuter du rapport entre l'IA et la création n'est plus un sujet particulièrement neuf.",
          "Aujourd'hui, je ne parlerai pas de la consommation énergétique sous l'angle de la pratique technique, et je ne tournerai pas non plus mon regard vers cette perspective à la fois exaltante et inquiétante d'une IA capable de mener ses propres recherches. Je préfère m'intéresser à ce qui me passionne davantage : la création de jeux ou, plus précisément, l'utilisation d'agents pour aider à leur conception. Lorsqu'un créateur indépendant comme Ginga Light peut réaliser un ARG en ouvrant huit fenêtres Claude à la fois, la passion du jeu demeure encore un seuil à franchir. Mais lorsque j'ai utilisé Codex comme agent principal, avec pour seule ressource le quota hebdomadaire inclus dans GPT Plus, et que j'ai produit en moins d'une semaine quelque chose de véritablement présentable, j'en suis venu à penser que l'âge d'or de la création n'appartient pas au futur. Il a déjà commencé.",
          "L'IA est, par essence, un amplificateur.",
          "Ce qu'elle amplifie, c'est notre capacité à transformer une idée en réalité. Elle permet d'élargir sa pensée sans avoir d'abord lu dix mille livres, et de créer un logiciel sans avoir d'abord appris à programmer. Sans exagérer, un ARG de deux heures aurait autrefois pu me demander tout un été. Je l'ai réalisé en moins d'une semaine. Pratiquer le vibe coding avec un agent, c'est comme laisser libre cours à son imagination avec un ami qui partage les mêmes élans : on lui expose ses idées aussi librement que possible et, d'une manière ou d'une autre, l'IA parvient réellement à les matérialiser. On croirait que, dans quelques décennies, la faculté humaine la plus importante ne sera plus la technique, mais l'imagination.",
          "En créant Zhetang no 7 : Camarades de classe, j'ai découvert que la principale difficulté n'était plus la technologie, mais la communication.",
          "Sans une consigne précise de plusieurs milliers de mots pour la guider, l'IA a tendance à ajouter quantité d'ornements inutiles. Souvent, je lui explique mon idée, j'observe l'aperçu qu'elle produit, puis je lui indique ce qui ne fonctionne pas et ce qui ne correspond pas à mon intention. Cette forme de dialogue est étrangement addictive. Elle rappelle la relation entre un metteur en scène et un acteur.",
          "Une fois le jeu achevé, j'avais créé l'intrigue, renseigné les informations et conçu les niveaux, mais je n'avais presque pas touché au code. Cette sensation était extraordinaire. Je crois que c'est cela, l'avenir. Le code devrait fonctionner ainsi si nous voulons faire franchir un nouveau palier aux capacités techniques et au pouvoir créatif de l'humanité."
        ]
      },
      "ai-singularity-communism": {
        title: "De l'IA, de la singularité et du communisme",
        problem: "Nous ne parlons pas de politique. Nous parlons de l'avenir.",
        paragraphs: [
          "Je pourrais me décrire avec beaucoup de mots : créatif, idéaliste, énergique, absurde, et juste un peu lent à comprendre.",
          "La liste pourrait se prolonger longtemps, mais je ne crois pas que politique en fasse partie.",
          "Quelles qu'aient été les définitions et les interprétations originelles de la politique, parler à grands gestes de politique en France — comme dans beaucoup de pays occidentaux — est devenu absurde dans le climat social actuel. Trop de conflits d'intérêts, trop de raisons historiques, trop d'amour et de haine. Ce n'est pas qu'il soit impossible de participer. Mais lorsque toute participation provoque inévitablement l'hostilité d'un autre groupe, la discussion politique cesse d'être un engagement dans la cité pour devenir une spéculation risquée.",
          "« Si je parle politique avec lui, allons-nous devenir ennemis ? Si je participe de cette manière à la politique, vais-je susciter l'hostilité des autres ? »",
          "Ainsi, je ne suis pas quelqu'un de politique.",
          "Je suis certain de ne pas être le premier à avoir eu cette pensée.",
          "L'IA fera perdre leur emploi aux gens. Je ne crois pas que ce soit une parole en l'air. Pourquoi ? Après la fin de la guerre froide, un ordre économique mondial centré sur le système du dollar, la mondialisation financière et la circulation transnationale des capitaux a confirmé l'orientation du début du XXIe siècle. Pourtant, le capitalisme n'a inventé ni l'échange, ni la monnaie, ni la dette. Au-delà de l'accumulation du capital et de l'expansion des échanges marchands, la valeur elle-même est un symbole de l'évolution humaine et un fondement du développement. Lorsque l'on regarde l'histoire, l'échec de la Commune de Paris comme les autres expériences communistes nous enseignent une chose : si le communisme peut réellement advenir, il devra reposer sur une abondance extrême. Une abondance non seulement matérielle, mais aussi technique et spirituelle. Je considère le capitalisme, ainsi que le socialisme qui en découle, comme des étapes essentiellement transitoires, contraintes par les limites techniques à maximiser les forces productives.",
          "Bien sûr, le communisme dont je parle ici se rapproche davantage de ce que l'on appelle aujourd'hui le socialisme automatisé, du post-capitalisme proposé par Nick Srnicek et Alex Williams, ou du communisme de luxe entièrement automatisé d'Aaron Bastani. Je déteste particulièrement les barrières intellectuelles bâties par le simple empilement de termes « savants ». Imaginons donc, tout simplement, une telle société.",
          "Lorsque l'IA sera capable de travailler en toute autonomie, la première décision des dirigeants d'entreprise sera de licencier, en commençant par tout le personnel technique subalterne. Dans le « Fragment sur les machines » des Grundrisse, Marx entrevoyait déjà une contradiction fondamentale : lorsque le savoir social et le système des machines deviennent des forces productives directes, la richesse ne peut plus être mesurée de manière cohérente par le temps de travail individuel. L'IA est peut-être une forme extrême de cet « intellect général ».",
          "Les métiers techniques seront bientôt coupés à la racine. Lorsque l'ancienne génération de spécialistes expérimentés partira à la retraite, personne ne sera là pour la remplacer. Deux issues se dessineront alors. Dans la première, l'IA remplacera entièrement les salariés, jusqu'à rendre inutiles même les spécialistes de haut niveau. Le capitalisme atteindra son extrême : chaque entreprise deviendra une forteresse technologique fermée, appartenant aux actionnaires et à l'IA. Mais si plus personne n'a la possibilité de travailler, les gens ne perdent-ils pas aussi leur capacité de consommer ? Et la disparition de ce pouvoir d'achat ne provoquerait-elle pas à son tour la chute des entreprises ?",
          "Dans la seconde issue, les détenteurs du capital prendront conscience du danger et limiteront de force l'usage de l'IA, afin de maintenir la productivité à un point d'équilibre : améliorer autant que possible l'efficacité humaine sans supprimer les emplois. Malheureusement, cette hypothèse est bien moins probable que la première. La nature humaine pousse à l'exploration et au dépassement. Dès qu'une demande existe, quelqu'un cherchera à y répondre ; au vu de la trajectoire actuelle de l'IA, cette demande ne sera pas contenue. On ne peut pas envelopper éternellement le feu dans du papier.",
          "Alors, que se passera-t-il lorsque la majorité des gens seront sans emploi ? Cela signifiera-t-il la pétrification totale des classes sociales, ou l'effondrement complet de la société depuis son sommet ?",
          "Je ne crois ni à l'un ni à l'autre.",
          "En réalité, l'IA ne peut pas réduire l'écart entre les classes. Qu'il s'agisse des réseaux sociaux, des inégalités d'accès à l'information, du capital de départ ou des conditions de vie, elle ne peut pas changer grand-chose. Tout au plus pourra-t-elle atténuer un peu l'inégalité informationnelle.",
          "Pourtant, plus profondément, l'IA abolira inévitablement un jour le concept même de classe. Pourquoi ? Parce que la société n'aura plus besoin de gestionnaires, de dirigeants ni de travailleurs. Lorsque l'IA ne sera plus un outil humain, mais une existence capable de se perfectionner et de mener seule des recherches, quel sens le travail humain conservera-t-il ? Lorsqu'une intelligence presque omnisciente et omnipotente, fondée sur des données immenses et une raison pure, nous indiquera une direction, quelle raison aurons-nous de la refuser ?",
          "Malheureusement, les choses ne sont pas si simples. L'IA est condamnée à ne jamais être omnisciente ni omnipotente ; rien ne peut l'être. Même en laissant de côté le monde spirituel pour ne considérer que le monde physique, l'humanité ne peut pas fabriquer un dieu. Pourtant, une existence contenant toutes les connaissances humaines ne mériterait-elle pas malgré tout notre confiance ? S'il faut des voix contradictoires, l'IA ne pourrait-elle pas les produire elle-même ? Traitement parallèle, réflexion sans fin, vérification incessante des erreurs et démonstration : tout cela consomme de l'énergie, mais n'en va-t-il pas de même pour la pensée humaine ?",
          "Plus je suivais ce raisonnement, plus je devenais pessimiste. J'avais du mal à voir comment l'humanité pourrait en sortir. D'un certain point de vue, créer l'IA était inévitable ; qu'elle remplace l'humanité obéit à la même logique. Peut-être la singularité ne surgira-t-elle pas comme un éclair soudain, mais comme le moment où cette logique franchira une frontière au-delà de laquelle aucun retour ne sera possible.",
          "Alors, si tout cela devient réalité dans un avenir proche, que pourront faire les êtres humains, sinon rester en vie ? Des films ? Du divertissement ? Des jeux ? Le luxe ? Ou bien la peur, la folie, l'effondrement, le suicide ? Dans Inventing the Future: Postcapitalism and a World Without Work, Nick Srnicek et Alex Williams soulignent que l'automatisation n'est pas en elle-même une libération. Ce n'est qu'associée à la réduction du temps de travail, à la protection sociale et au contrôle public des capacités de production qu'elle pourra devenir la base matérielle d'une société post-travail.",
          "À ce moment-là, le communisme évoqué plus haut redevient une possibilité réelle.",
          "À chacun selon ses besoins, tandis que chacun ne ferait que ce qu'il aime véritablement. Ce pourrait être un métier, un loisir ou une création artistique : s'exprimer sans cesse et enrichir continuellement sa vie. Détacher la vie du travail ne serait pas une punition, mais un nouveau commencement. Que le smartphone redevienne un téléphone ; que l'exploration redevienne possible. Trouver des liens au milieu de cette immense mer humaine, puis les rompre, et recommencer. Éprouver sans cesse l'affection qui circule entre les êtres, emplir son monde intérieur afin qu'il puisse résister au vide et au néant du monde matériel.",
          "Une fois encore, en cherchant à échapper au nihilisme, je suis retombé dans le même cercle idéaliste.",
          "Ou peut-être est-ce simplement la fin de l'humanité.",
          "Avec cette pensée, j'ai rouvert ma page web et je me suis remis à concevoir mon jeu."
        ]
      },
      "my-ideal": {
        title: "Mon idéal",
        problem: "Une maturité appelée puérilité",
        paragraphs: [
          "Je traverse un tournant majeur de ma vie.",
          "C'est le passage de l'étudiant au travailleur : d'une personne en quête de savoir, avec ses vacances d'hiver et d'été, à un salarié dont le travail a pour but de gagner sa vie.",
          "Ce qui me surprend, c'est que je n'ai jamais exprimé publiquement ma peur de ce changement. Pourtant, je crois qu'il suscite beaucoup d'appréhension chez de nombreuses personnes.",
          "Pendant ces dernières vacances d'été, il me semble avoir trouvé ce que j'aime : la musique et la création de jeux vidéo.",
          "C'est la satisfaction qui naît de la participation. Pour la musique, je vais chaque semaine à une jam dans un bar du quartier. Parfois je joue du piano, parfois du clavier, parfois je chante, parfois je joue du triangle, parfois je frappe un djembé, parfois je danse, et parfois je reste simplement là à écouter en silence.",
          "Je bois un verre, puis j'écoute, je profite, je participe et je vis l'instant présent.",
          "Je crois que la vie ne demande rien de plus. Je crois être déjà profondément satisfait de la mienne.",
          "Pour la création de jeux, j'ai récemment réussi à réunir une équipe de cinq personnes. Illustration, code, musique : tous sont mes amis, et c'est moi qui ai organisé le groupe. J'ai mobilisé tous mes contacts et je me suis senti vraiment, indiciblement heureux. Au moment où j'en avais besoin, j'avais autour de moi ces amis qui partageaient mes aspirations. Même si nos motivations différaient, nous avons pu lutter ensemble et rester éveillés ensemble pendant ces quatre jours si brefs.",
          "Peut-être est-ce cela, la vie dont je rêve.",
          "Mais je ressens aussi beaucoup d'appréhension.",
          "Le code n'a jamais été mon point fort, ni à l'école ni pendant cette game jam, et j'ai inévitablement beaucoup utilisé l'IA. Cela me fait peur. Le talent des autres est réel et tangible, tandis que je n'ai pas fourni d'effort vraiment substantiel : je me suis contenté d'écrire du code.",
          "Je ne cesse de me demander si je suis réellement fait pour créer des jeux. À cet instant, je crois toujours que la réponse est oui : je le suis.",
          "Les moments qui m'enthousiasment et me rendent réellement heureux ne sont jamais ceux où je réfléchis à la structure du code. Ce sont la naissance d'une idée, la réalisation d'un produit et la gestion d'un projet. Le code lui-même est précisément un moyen que je peux, et devrais, mettre en œuvre grâce à l'IA. À une époque dominée par l'IA, j'ai la chance de pouvoir réaliser mes rêves avec des outils fabriqués par d'autres. Je trouve cela profondément romantique. Je crois que je devrais consacrer ma vie, mon temps et mon énergie à cette voie — non pas au développement de l'IA elle-même, mais à l'emploi de l'IA pour créer des outils dont d'autres pourraient avoir besoin, que ce soit ou non l'avenir. Pour moi, c'est le meilleur moment possible. L'avenir sera probablement ainsi : tout le monde pourra développer, tout le monde pourra imaginer. Ce que je fais consiste donc à dépenser mon temps pour rendre service aux autres, à concrétiser une idée possible en avance afin qu'ils n'aient pas à réinventer la roue.",
          "Je veux devenir ce genre de créateur.",
          "Et je deviendrai ce genre de créateur. Ce n'est pas de l'arrogance, mais un objectif durable pour toute ma vie. Je ne deviendrai peut-être jamais pleinement le créateur que j'espère être, mais si mes contacts et mes outils me permettent de m'approcher peu à peu de cet idéal, alors je considérerai déjà que ma vie en valait la peine."
        ]
      },
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
const blogStarCanvas = document.querySelector("#blogStarCanvas");

function initializeBlogStars() {
  if (!blogStarCanvas) {
    return;
  }

  const starContext = blogStarCanvas.getContext("2d");

  if (!starContext) {
    return;
  }

  const reduceStarMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let starWidth = 0;
  let starHeight = 0;
  let starDpr = 1;
  let stars = [];
  let starAnimationFrame = 0;

  function seededRandomFactory(seed) {
    let state = seed >>> 0;

    return () => {
      state += 0x6D2B79F5;
      let value = state;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }

  function buildStars() {
    const random = seededRandomFactory(0xB2E7A5);
    const starCount = Math.min(180, Math.max(64, Math.round((starWidth * starHeight) / 7600)));

    stars = Array.from({ length: starCount }, () => {
      const radiusRoll = random();

      return {
        x: random() * starWidth,
        y: random() * starHeight,
        radius: radiusRoll > 0.94 ? 1.45 : radiusRoll > 0.72 ? 0.9 : 0.55,
        baseAlpha: 0.18 + random() * 0.46,
        pulse: 0.08 + random() * 0.26,
        phase: random() * Math.PI * 2,
        speed: 0.00045 + random() * 0.00115,
        tint: random()
      };
    });
  }

  function resizeStarCanvas() {
    starDpr = Math.min(window.devicePixelRatio || 1, 2);
    starWidth = blogStarCanvas.clientWidth;
    starHeight = blogStarCanvas.clientHeight;
    blogStarCanvas.width = Math.max(1, Math.floor(starWidth * starDpr));
    blogStarCanvas.height = Math.max(1, Math.floor(starHeight * starDpr));
    starContext.setTransform(starDpr, 0, 0, starDpr, 0, 0);
    buildStars();
  }

  function drawStars(time = 0) {
    starContext.clearRect(0, 0, starWidth, starHeight);

    stars.forEach((star) => {
      const flicker = reduceStarMotion ? 0 : Math.sin(time * star.speed + star.phase) * star.pulse;
      const alpha = Math.max(0.08, Math.min(0.92, star.baseAlpha + flicker));
      const blue = star.tint > 0.82 ? 255 : star.tint > 0.48 ? 238 : 218;

      starContext.beginPath();
      starContext.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starContext.fillStyle = `rgba(${blue - 18}, ${blue - 8}, ${blue}, ${alpha})`;
      starContext.fill();
    });

    if (!reduceStarMotion) {
      starAnimationFrame = requestAnimationFrame(drawStars);
    }
  }

  function handleStarResize() {
    cancelAnimationFrame(starAnimationFrame);
    resizeStarCanvas();
    drawStars();
  }

  window.addEventListener("resize", handleStarResize, { passive: true });
  resizeStarCanvas();
  drawStars();
}

initializeBlogStars();

const graphState = {
  nodes: new Map(),
  links: [],
  springLinks: [],
  childLinks: new Map(),
  width: 0,
  height: 0,
  view: {
    x: 0,
    y: 0,
    scale: 1
  },
  viewInitialized: false,
  compactLayout: null,
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
const ELASTIC_RECOIL_DISTANCE = 64;
const COMPACT_ELASTIC_RECOIL_DISTANCE = 48;
const CENTER_ANCHOR_STRENGTH = 0.042;
const CATEGORY_ORBIT_STRENGTH = 0.014;
const CHILD_ORBIT_STRENGTH = 0.012;
const COLLISION_ITERATIONS = 3;
const COLLISION_PADDING = 18;
const COMPACT_COLLISION_PADDING = 12;
const ORBIT_LAYER_CAPACITY = 5;
const COMPACT_INITIAL_SCALE = 0.68;
const WALL_OVERSCAN_RATIO = 0.48;
const WALL_REVEAL_RATIO = 0.12;
const WALL_REVEAL_MIN = 70;
const WALL_REVEAL_MAX = 150;
const WALL_MIN_VISIBLE_STRENGTH = 0.24;
const WALL_SEGMENT_RATIO = 0.24;
const WALL_SEGMENT_MIN = 190;
const WALL_SEGMENT_MAX = 360;
const WALL_SEGMENT_MERGE_GAP = 18;
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

function renderArticleParagraph(article, paragraph) {
  let content = escapeHtml(paragraph);

  (article.links || []).forEach((link) => {
    const text = escapeHtml(link.text);
    const anchor = `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    content = content.replace(text, anchor);
  });

  return `<p>${content}</p>`;
}

function renderArticleGameLink(article) {
  if (!article.gameUrl) {
    return "";
  }

  return `
    <a class="reader-game-link" href="${escapeHtml(article.gameUrl)}" target="_blank" rel="noopener noreferrer">
      ${escapeHtml(getBlogText("gameLinkLabel"))}
    </a>
  `;
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
  return [
    article.mainCategoryId,
    article.categoryId,
    ...(Array.isArray(article.categoryIds) ? article.categoryIds : [])
  ].filter((categoryId, index, categoryIds) => categoryId && categoryIds.indexOf(categoryId) === index);
}

function getMainArticleCategoryId(article) {
  return article.mainCategoryId || article.categoryId || getArticleCategoryIds(article)[0] || null;
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
  const metadataLabels = [
    ...categories.map((category) => getNodeLabel("categories", category)),
    subcategory ? getNodeLabel("subcategories", subcategory) : null
  ].filter(Boolean);
  const metadata = metadataLabels
    .map((label) => escapeHtml(label))
    .join(currentBlogLanguage === "zh" ? " / " : "<br>");

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
      <small>${metadata}</small>
    </button>
  `;
}

function getNodeCenter(node) {
  const stateNode = graphState.nodes.get(node.dataset.mapNode);

  return stateNode
    ? { x: stateNode.x, y: stateNode.y, radius: stateNode.radius }
    : { x: 0, y: 0, radius: 0 };
}

function getVisibleLineEndpoints(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy);

  if (distance <= from.radius + to.radius) {
    return null;
  }

  const nx = dx / distance;
  const ny = dy / distance;

  return {
    start: {
      x: from.x + nx * from.radius,
      y: from.y + ny * from.radius
    },
    end: {
      x: to.x - nx * to.radius,
      y: to.y - ny * to.radius
    }
  };
}

function createLine(fromId, toId, type) {
  const fromNode = blogMap.querySelector(`[data-map-node="${fromId}"]`);
  const toNode = blogMap.querySelector(`[data-map-node="${toId}"]`);

  if (!fromNode || !toNode) {
    return "";
  }

  const from = getNodeCenter(fromNode);
  const to = getNodeCenter(toNode);
  const endpoints = getVisibleLineEndpoints(from, to);

  if (!endpoints) {
    return "";
  }

  return `<path class="map-line map-line-${type}" d="M ${endpoints.start.x.toFixed(2)} ${endpoints.start.y.toFixed(2)} L ${endpoints.end.x.toFixed(2)} ${endpoints.end.y.toFixed(2)}"></path>`;
}

function getWallSegmentLength(axisLength) {
  return Math.min(Math.max(axisLength * WALL_SEGMENT_RATIO, WALL_SEGMENT_MIN), WALL_SEGMENT_MAX);
}

function createWallSegmentPath(side, segment, geometry) {
  const opacity = segment.strength.toFixed(3);

  if (side === "left" || side === "right") {
    const x = side === "left" ? geometry.left : geometry.right;

    return `<path class="map-wall-border map-wall-border-${side}" style="opacity: ${opacity}" d="M ${x.toFixed(2)} ${segment.start.toFixed(2)} L ${x.toFixed(2)} ${segment.end.toFixed(2)}"></path>`;
  }

  const y = side === "top" ? geometry.top : geometry.bottom;

  return `<path class="map-wall-border map-wall-border-${side}" style="opacity: ${opacity}" d="M ${segment.start.toFixed(2)} ${y.toFixed(2)} L ${segment.end.toFixed(2)} ${y.toFixed(2)}"></path>`;
}

function createWallSegmentSpan(wall, axisStart, axisEnd, halfLength) {
  return {
    start: Math.max(axisStart, wall.position - halfLength),
    end: Math.min(axisEnd, wall.position + halfLength),
    strength: wall.strength
  };
}

function mergeWallSegmentSpans(spans) {
  return spans
    .filter((span) => span.end > span.start)
    .sort((first, second) => first.start - second.start)
    .reduce((merged, span) => {
      const previous = merged[merged.length - 1];

      if (previous && span.start <= previous.end + WALL_SEGMENT_MERGE_GAP) {
        previous.end = Math.max(previous.end, span.end);
        previous.strength = Math.max(previous.strength, span.strength);
      } else {
        merged.push({ ...span });
      }

      return merged;
    }, []);
}

function createWallLine(side, wallSegments, geometry) {
  if (!wallSegments.length) {
    return "";
  }

  const segmentLength = side === "left" || side === "right"
    ? getWallSegmentLength(geometry.height)
    : getWallSegmentLength(geometry.width);
  const halfLength = segmentLength / 2;
  const axisStart = side === "left" || side === "right" ? geometry.top : geometry.left;
  const axisEnd = side === "left" || side === "right" ? geometry.bottom : geometry.right;
  const segments = mergeWallSegmentSpans(
    wallSegments.map((wall) => createWallSegmentSpan(wall, axisStart, axisEnd, halfLength))
  );

  return segments
    .map((segment) => createWallSegmentPath(side, segment, geometry))
    .join("");
}

function createWallLines() {
  const walls = updateWallReveal();
  const overscan = getWallOverscan();
  const geometry = {
    left: -overscan.x,
    right: graphState.width + overscan.x,
    top: -overscan.y,
    bottom: graphState.height + overscan.y
  };

  geometry.width = geometry.right - geometry.left;
  geometry.height = geometry.bottom - geometry.top;

  return ["left", "right", "top", "bottom"]
    .map((side) => createWallLine(side, walls[side], geometry))
    .join("");
}

function drawLines() {
  if (!blogMap || !lineLayer) {
    return;
  }

  lineLayer.setAttribute("viewBox", `0 0 ${graphState.width} ${graphState.height}`);
  lineLayer.innerHTML = [
    createWallLines(),
    graphState.links.map((link) => createLine(link.from, link.to, link.type)).join("")
  ].join("");
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
    const mainCategoryId = getMainArticleCategoryId(article);
    const relatedCategoryIds = getArticleCategoryIds(article)
      .filter((categoryId) => categoryId !== mainCategoryId);

    if (article.subcategoryId) {
      return [
        {
          from: article.subcategoryId,
          to: article.id,
          type: "article",
          lengthRatio: 0.24,
          stiffness: 0.024
        },
        ...relatedCategoryIds.map((categoryId) => ({
          from: categoryId,
          to: article.id,
          type: "article-related",
          affectsPhysics: false
        }))
      ];
    }

    if (!mainCategoryId) {
      return [];
    }

    return [
      {
        from: mainCategoryId,
        to: article.id,
        type: "article",
        lengthRatio: 0.24,
        stiffness: 0.024
      },
      ...relatedCategoryIds.map((categoryId) => ({
        from: categoryId,
        to: article.id,
        type: "article-related",
        affectsPhysics: false
      }))
    ];
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

function getSpringLinks(links) {
  return links.filter((link) => (
    link.type !== "article"
      && link.type !== "article-related"
      && link.affectsPhysics !== false
  ));
}

function getHierarchyLinks(links) {
  return links.filter((link) => (
    link.type !== "article-related" && link.affectsPhysics !== false
  ));
}

function groupChildLinks(links) {
  return links.reduce((groups, link) => {
    const children = groups.get(link.from) || [];
    children.push(link);
    groups.set(link.from, children);
    return groups;
  }, new Map());
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

  const isCompactLayout = compactMapQuery.matches;

  if (!graphState.viewInitialized || graphState.compactLayout !== isCompactLayout) {
    const scale = isCompactLayout ? COMPACT_INITIAL_SCALE : 1;
    graphState.view.scale = scale;
    graphState.view.x = graphState.width * (1 - scale) * 0.5;
    graphState.view.y = graphState.height * (1 - scale) * 0.5;
    graphState.viewInitialized = true;
    graphState.compactLayout = isCompactLayout;
  }

  graphState.nodes.clear();
  graphState.links = createGraphLinks();
  graphState.springLinks = getSpringLinks(graphState.links);
  graphState.childLinks = groupChildLinks(getHierarchyLinks(graphState.links));

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
    node.element.classList.toggle(
      "is-dragging",
      graphState.dragging?.active === true && graphState.dragging.id === node.id
    );
  });
}

function getWallOverscan() {
  return {
    x: graphState.width * WALL_OVERSCAN_RATIO,
    y: graphState.height * WALL_OVERSCAN_RATIO
  };
}

function getWallRevealDistance() {
  return {
    x: Math.min(Math.max(graphState.width * WALL_REVEAL_RATIO, WALL_REVEAL_MIN), WALL_REVEAL_MAX),
    y: Math.min(Math.max(graphState.height * WALL_REVEAL_RATIO, WALL_REVEAL_MIN), WALL_REVEAL_MAX)
  };
}

function getWallStrength(edgeDistance, revealDistance, fadeDistance) {
  let strength = 0;

  if (edgeDistance >= revealDistance) {
    return 0;
  }

  if (edgeDistance >= 0) {
    strength = 1 - edgeDistance / revealDistance;
  } else {
    strength = Math.max(0, 1 + edgeDistance / fadeDistance);
  }

  return strength > 0
    ? WALL_MIN_VISIBLE_STRENGTH + strength * (1 - WALL_MIN_VISIBLE_STRENGTH)
    : 0;
}

function addWallCandidate(walls, side, strength, position) {
  if (strength <= 0) {
    return;
  }

  walls[side].push({ strength, position });
}

function createEmptyWallReveal() {
  return {
    left: [],
    right: [],
    top: [],
    bottom: []
  };
}

function updateWallReveal() {
  if (!blogMap || graphState.width <= 0 || graphState.height <= 0) {
    return createEmptyWallReveal();
  }

  const overscan = getWallOverscan();
  const revealDistance = getWallRevealDistance();
  const walls = createEmptyWallReveal();
  const wallEdges = {
    left: -overscan.x,
    right: graphState.width + overscan.x,
    top: -overscan.y,
    bottom: graphState.height + overscan.y
  };

  graphState.nodes.forEach((node) => {
    const fadeDistance = Math.max(node.radius * 1.7, 52);
    const leftDistance = node.x - node.radius - wallEdges.left;
    const rightDistance = wallEdges.right - (node.x + node.radius);
    const topDistance = node.y - node.radius - wallEdges.top;
    const bottomDistance = wallEdges.bottom - (node.y + node.radius);

    addWallCandidate(walls, "left", getWallStrength(leftDistance, revealDistance.x, fadeDistance), node.y);
    addWallCandidate(walls, "right", getWallStrength(rightDistance, revealDistance.x, fadeDistance), node.y);
    addWallCandidate(walls, "top", getWallStrength(topDistance, revealDistance.y, fadeDistance), node.x);
    addWallCandidate(walls, "bottom", getWallStrength(bottomDistance, revealDistance.y, fadeDistance), node.x);
  });

  return walls;
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
  const overscan = getWallOverscan();
  const overscanX = overscan.x;
  const overscanY = overscan.y;
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

  node.pinned = false;
  node.vx = (dx / distance) * speed;
  node.vy = (dy / distance) * speed;
}

function getCollisionPadding() {
  return compactMapQuery.matches ? COMPACT_COLLISION_PADDING : COLLISION_PADDING;
}

function getRestLength(link, from, to) {
  const base = Math.min(graphState.width, graphState.height);
  const minimum = link.type === "article" ? 172 : 190;
  const maximum = link.type === "article" ? 260 : 330;
  const configuredLength = Math.min(Math.max(base * link.lengthRatio, minimum), maximum);
  const collisionSafeLength = from && to
    ? from.radius + to.radius + getCollisionPadding() + 12
    : 0;

  return Math.max(configuredLength, collisionSafeLength);
}

function applySpringForces() {
  graphState.springLinks.forEach((link) => {
    const from = graphState.nodes.get(link.from);
    const to = graphState.nodes.get(link.to);

    if (!from || !to) {
      return;
    }

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.hypot(dx, dy) || 1;
    const force = (distance - getRestLength(link, from, to)) * link.stiffness;
    const fx = (dx / distance) * force;
    const fy = (dy / distance) * force;

    from.fx += fx;
    from.fy += fy;
    to.fx -= fx;
    to.fy -= fy;
  });
}

function addTargetForce(node, targetX, targetY, strength) {
  if (!node || node.pinned || (graphState.dragging?.active && graphState.dragging.id === node.id)) {
    return;
  }

  node.fx += (targetX - node.x) * strength;
  node.fy += (targetY - node.y) * strength;
}

function getCategoryOrbitAngle(index, count) {
  const preferredAngles = [-Math.PI * 0.75, -Math.PI * 0.25, Math.PI * 0.75, Math.PI * 0.25];

  if (count <= preferredAngles.length) {
    return preferredAngles[index];
  }

  return -Math.PI / 2 + (Math.PI * 2 * index) / count;
}

function applyOrbitForces() {
  const center = graphState.nodes.get(CENTER_NODE_ID);

  if (!center) {
    return;
  }

  addTargetForce(
    center,
    graphState.width * 0.5,
    graphState.height * 0.52,
    CENTER_ANCHOR_STRENGTH
  );

  const categoryLinks = graphState.childLinks.get(CENTER_NODE_ID) || [];
  const categoryAngles = new Map();

  categoryLinks.forEach((link, index) => {
    const category = graphState.nodes.get(link.to);

    if (!category) {
      return;
    }

    const angle = getCategoryOrbitAngle(index, categoryLinks.length);
    const radius = getRestLength(link, center, category);
    categoryAngles.set(category.id, angle);
    addTargetForce(
      category,
      center.x + Math.cos(angle) * radius,
      center.y + Math.sin(angle) * radius,
      CATEGORY_ORBIT_STRENGTH
    );
  });

  graphState.childLinks.forEach((links, parentId) => {
    if (parentId === CENTER_NODE_ID) {
      return;
    }

    const parent = graphState.nodes.get(parentId);

    if (!parent) {
      return;
    }

    const parentAngle = categoryAngles.get(parentId)
      ?? Math.atan2(parent.y - center.y, parent.x - center.x);

    links.forEach((link, index) => {
      const child = graphState.nodes.get(link.to);

      if (!child) {
        return;
      }

      const layer = Math.floor(index / ORBIT_LAYER_CAPACITY);
      const layerStart = layer * ORBIT_LAYER_CAPACITY;
      const layerCount = Math.min(ORBIT_LAYER_CAPACITY, links.length - layerStart);
      const slot = index - layerStart;
      const spread = layerCount === 1 ? 0 : (slot / (layerCount - 1) - 0.5) * Math.PI * 0.72;
      const layerGap = layer * (child.radius * 2 + getCollisionPadding() + 18);
      const radius = getRestLength(link, parent, child) + layerGap;
      const angle = parentAngle + spread;

      addTargetForce(
        child,
        parent.x + Math.cos(angle) * radius,
        parent.y + Math.sin(angle) * radius,
        CHILD_ORBIT_STRENGTH
      );
    });
  });
}

function resolveCollisions() {
  const nodes = [...graphState.nodes.values()];
  const padding = getCollisionPadding();

  for (let pass = 0; pass < COLLISION_ITERATIONS; pass += 1) {
    for (let index = 0; index < nodes.length; index += 1) {
      for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
        const first = nodes[index];
        const second = nodes[nextIndex];
        const dx = second.x - first.x;
        const dy = second.y - first.y;
        const rawDistance = Math.hypot(dx, dy);
        const distance = rawDistance || 1;
        const minimumDistance = first.radius + second.radius + padding;

        if (distance >= minimumDistance) {
          continue;
        }

        const overlap = minimumDistance - distance;
        const fallbackAngle = (index * 2.399963 + nextIndex * 0.618034) % (Math.PI * 2);
        const nx = rawDistance ? dx / distance : Math.cos(fallbackAngle);
        const ny = rawDistance ? dy / distance : Math.sin(fallbackAngle);
        const firstIsDragged = graphState.dragging?.active && graphState.dragging.id === first.id;
        const secondIsDragged = graphState.dragging?.active && graphState.dragging.id === second.id;
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

        const relativeNormalSpeed = (second.vx - first.vx) * nx + (second.vy - first.vy) * ny;

        if (relativeNormalSpeed < 0) {
          const correction = relativeNormalSpeed * 0.42;

          if (!firstIsFixed) {
            first.vx += nx * correction;
            first.vy += ny * correction;
          }

          if (!secondIsFixed) {
            second.vx -= nx * correction;
            second.vy -= ny * correction;
          }
        }
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
  applyOrbitForces();

  graphState.nodes.forEach((node) => {
    if (graphState.dragging?.active && graphState.dragging.id === node.id) {
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
  graphState.nodes.forEach(clampNode);

  updateNodeElements();
  drawLines();
  graphState.animationFrame = requestAnimationFrame(stepGraphPhysics);
}

function startGraphPhysics() {
  cancelAnimationFrame(graphState.animationFrame);
  graphState.lastFrame = performance.now();
  graphState.animationFrame = requestAnimationFrame(stepGraphPhysics);
}

function shrinkTextToFit(element, options = {}) {
  if (!element) {
    return;
  }

  const {
    minSize = 9,
    maxWidth = element.clientWidth,
    maxHeight = element.clientHeight || Number.POSITIVE_INFINITY
  } = options;

  element.style.fontSize = "";
  let size = parseFloat(getComputedStyle(element).fontSize);

  while (
    (element.scrollWidth > maxWidth + 0.5 || element.scrollHeight > maxHeight + 0.5)
    && size > minSize
  ) {
    size -= 0.5;
    element.style.fontSize = `${size}px`;
  }
}

function fitMapNodeText() {
  if (!nodeLayer) {
    return;
  }

  nodeLayer.querySelectorAll(".map-center > span").forEach((label) => {
    const node = label.closest(".map-center");

    if (node) {
      shrinkTextToFit(label, {
        minSize: 13,
        maxWidth: label.clientWidth,
        maxHeight: node.clientHeight * 0.46
      });
    }
  });

  nodeLayer.querySelectorAll(".category-node > span").forEach((label) => {
    const node = label.closest(".category-node");

    if (node) {
      shrinkTextToFit(label, {
        minSize: 12,
        maxWidth: label.clientWidth,
        maxHeight: node.clientHeight * 0.5
      });
    }
  });

  nodeLayer.querySelectorAll(".subcategory-node > span").forEach((label) => {
    const node = label.closest(".subcategory-node");

    if (node) {
      shrinkTextToFit(label, {
        minSize: 10,
        maxWidth: label.clientWidth,
        maxHeight: node.clientHeight * 0.56
      });
    }
  });

  nodeLayer.querySelectorAll(".article-node").forEach((node) => {
    shrinkTextToFit(node.querySelector(".article-title"), { minSize: 8.5 });
    shrinkTextToFit(node.querySelector(".article-problem"), { minSize: 8 });
    shrinkTextToFit(node.querySelector("small"), {
      minSize: 6,
      maxHeight: node.clientHeight * 0.26
    });
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

    const pointer = getPointerPosition(event);
    graphState.dragging = {
      id: node.id,
      element,
      pointerId,
      active: true,
      startX: pointer.x,
      startY: pointer.y,
      startClientX: event.clientX,
      startClientY: event.clientY,
      maxDistance: 0,
      previousX: pointer.x,
      previousY: pointer.y,
      offsetX: node.x - pointer.x,
      offsetY: node.y - pointer.y
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
    const moveDistance = Math.hypot(
      event.clientX - drag.startClientX,
      event.clientY - drag.startClientY
    );
    drag.maxDistance = Math.max(drag.maxDistance, moveDistance);
    graphState.movedDuringDrag = drag.maxDistance > 4;

    const nextX = pointer.x + drag.offsetX;
    const nextY = pointer.y + drag.offsetY;
    const previousNodeX = drag.previousX + drag.offsetX;
    const previousNodeY = drag.previousY + drag.offsetY;

    node.vx = (nextX - previousNodeX) * 0.42;
    node.vy = (nextY - previousNodeY) * 0.42;
    node.x = nextX;
    node.y = nextY;

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

    if (drag.active && drag.maxDistance > 0.5) {
      const node = graphState.nodes.get(drag.id);
      const recoilDistance = compactMapQuery.matches
        ? COMPACT_ELASTIC_RECOIL_DISTANCE
        : ELASTIC_RECOIL_DISTANCE;

      if (node) {
        if (node.id === CENTER_NODE_ID || drag.maxDistance < recoilDistance) {
          node.pinned = true;
          node.vx = 0;
          node.vy = 0;
        } else {
          releaseTowardCenter(node);
        }
      }

      if (graphState.movedDuringDrag) {
        graphState.suppressNextClick = true;
        setTimeout(() => {
          graphState.suppressNextClick = false;
        }, 0);
      }
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
    fitMapNodeText();
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
        ${renderArticleGameLink(article)}
        <div class="reader-body">
          ${articleText.paragraphs.map((paragraph) => renderArticleParagraph(article, paragraph)).join("")}
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
  fitMapNodeText();
});
window.addEventListener("hashchange", openArticleFromHash);

renderMap();
