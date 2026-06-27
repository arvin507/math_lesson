const MathCourseUpgrade = (() => {
  const diagramCatalog = {
    place: {
      tool: "数位图",
      habit: "先把数字放进图，再看每一列发生了什么。",
      drawPrompt: "画百十个位表，把每个数字放进对应格子，用小箭头标出进位或退位。",
      checkpoint: "算式里的每个数字都能在数位表里找到位置。",
    },
    array: {
      tool: "点阵图",
      habit: "看到几个几，先画整齐的行和列。",
      drawPrompt: "画行列点阵，圈出一行、一列和总数，写出一乘两除。",
      checkpoint: "乘法、除法说的是同一张点阵。",
    },
    stairs: {
      tool: "顺序图",
      habit: "混合算式先圈第一步，不急着算。",
      drawPrompt: "给括号、乘除、加减排队，用编号标出第1步、第2步。",
      checkpoint: "第一步的位置能从图上看出来。",
    },
    detective: {
      tool: "错因证据图",
      habit: "找错要圈证据，不用“粗心”糊过去。",
      drawPrompt: "画符号、数位、口诀、顺序四格，把可疑位置圈出来。",
      checkpoint: "能说出错在具体哪一步。",
    },
    blocks: {
      tool: "凑整积木图",
      habit: "先找能凑整的朋友，再算剩下的数。",
      drawPrompt: "把能凑成整十或整百的两块积木拼在一起，剩余数字接在后面。",
      checkpoint: "移动顺序后，总数没有变。",
    },
    numberline: {
      tool: "数轴补偿图",
      habit: "多减要加回，少减要再减。",
      drawPrompt: "在数轴上先跳到整十整百，再画补偿小箭头。",
      checkpoint: "能说清刚才是多走了还是少走了。",
    },
    split: {
      tool: "面积拆分图",
      habit: "难乘法先拆成好算的两块。",
      drawPrompt: "画一个长方形，把难数切成整十和零头，两块分别列式。",
      checkpoint: "两块合起来才是原来的总面积。",
    },
    strategy: {
      tool: "策略选择树",
      habit: "先观察数字特点，再选择方法。",
      drawPrompt: "画三条路线：能凑整、接近整百、乘法难数，给题目贴标签。",
      checkpoint: "能说出为什么选这个策略。",
    },
    cards: {
      tool: "条件整理图",
      habit: "文字题先收拾条件，不看见数字就列式。",
      drawPrompt: "圈人物和数量，框住关系词，给问题句画波浪线。",
      checkpoint: "图上能看到谁、多少、发生什么、问什么。",
    },
    venn: {
      tool: "圈图",
      habit: "先放重叠部分，再补两边。",
      drawPrompt: "画两个相交圆，先把两样都会的数量写中间。",
      checkpoint: "中间的人没有被重复算进总数。",
    },
    puzzle: {
      tool: "方格拼剪图",
      habit: "面积数小格，周长只数外边。",
      drawPrompt: "在方格纸上描外圈，把贴在里面的边画成虚线。",
      checkpoint: "内部边不会被当作周长。",
    },
    cubes: {
      tool: "视角箭头图",
      habit: "先确定眼睛站在哪里，再画看到的样子。",
      drawPrompt: "画眼睛和观察箭头，再画上面、前面或右面的轮廓。",
      checkpoint: "从上面看位置，从前面看最高高度。",
    },
    whole: {
      tool: "整体框",
      habit: "分数先问整体是谁，再问是否平均分。",
      drawPrompt: "给整体画外框，再检查每一份是不是一样大。",
      checkpoint: "不是平均分，不能直接写分数。",
    },
    unitFraction: {
      tool: "等长分数条",
      habit: "比较几分之一，整体必须一样大。",
      drawPrompt: "画同样长的纸带，分别平均分成2份、4份、8份并涂1份。",
      checkpoint: "分得越多，每一份越小。",
    },
    fractionParts: {
      tool: "分数条",
      habit: "下面看分几份，上面看取几份。",
      drawPrompt: "先平均分格，再给取到的份数涂色。",
      checkpoint: "分母来自总份数，分子来自涂色份数。",
    },
    lifeFraction: {
      tool: "生活测量图",
      habit: "生活里的半个、四分之一，也要说清整体。",
      drawPrompt: "画钟面、米尺或杯子刻度，标出整体和取到的部分。",
      checkpoint: "能把图上的分数换成分钟、厘米或杯数。",
    },
    table: {
      tool: "表格定位图",
      habit: "先看标题、行列和单位，再取数。",
      drawPrompt: "圈标题，描出目标行列的交叉格。",
      checkpoint: "答案来自哪一格说得清楚。",
    },
    bars: {
      tool: "条形比较图",
      habit: "比较不是只看长短，还要读刻度求差。",
      drawPrompt: "画等宽刻度，把多出来的一段用括号标出。",
      checkpoint: "多多少能在差值括号里看到。",
    },
    segment: {
      tool: "线段图",
      habit: "谁多画长，谁少画短，问题标在线段上。",
      drawPrompt: "先画基准线段，再接多出来或少掉的一段。",
      checkpoint: "算式中的加减来自线段长短关系。",
    },
    pattern: {
      tool: "规律分组图",
      habit: "先圈一组，再找目标位置。",
      drawPrompt: "把重复的一组框起来，给每个位置编号。",
      checkpoint: "答案能用规则解释，不是猜出来的。",
    },
    challenge: {
      tool: "闯关路线图",
      habit: "综合题先判断关卡类型，再动笔。",
      drawPrompt: "把题目分到准确关、顺序关、巧算关，并写选择理由。",
      checkpoint: "每题都有方法标签和检查方式。",
    },
    logicMix: {
      tool: "图形工具箱",
      habit: "先选圈图、格子图或视角图，再解决。",
      drawPrompt: "读题后选一张工具卡，说明为什么选它。",
      checkpoint: "图和算式处理的是同一个关系。",
    },
    fractionTable: {
      tool: "整体条+表格图",
      habit: "先把整体变成条，再把表格信息放回去。",
      drawPrompt: "一整条表示总人数或总量，再切分、涂色、填表。",
      checkpoint: "分数、表格和算式的总量一致。",
    },
    project: {
      tool: "项目流程图",
      habit: "能教别人，才是真的会。",
      drawPrompt: "画开始、抽题、画图、答题、讲解、修改六步流程。",
      checkpoint: "游戏有规则、题目、答案和解释。",
    },
    drawStory: {
      tool: "条件箭头图",
      habit: "先画原来，再按事情顺序接箭头。",
      drawPrompt: "圈数量和单位，把增加、减少、分组按顺序画出来。",
      checkpoint: "每一步箭头都对应一道算式。",
    },
    arrayGroup: {
      tool: "阵列/分组图",
      habit: "乘法看几个几，除法看怎么分。",
      drawPrompt: "画点阵，再按每份数量或份数圈组。",
      checkpoint: "同一张图能解释乘法和除法。",
    },
    barModel: {
      tool: "倍数线段图",
      habit: "多几看差，几倍看同样长的几段。",
      drawPrompt: "先画一份，再复制成几份，或把总量平均切成几份。",
      checkpoint: "倍数图里的每一段长度相同。",
    },
    drawingChallenge: {
      tool: "一题多图工具箱",
      habit: "先选图，再尝试第二种图。",
      drawPrompt: "在分组图、线段图、圈图、表格图、逆向图中选两种解释。",
      checkpoint: "两种图得到同一个答案。",
    },
  };


  const childLessonGuides = [
    { role: "小票侦探", slogan: "数位先站队，算完倒着查。", mission: "帮小票算出总价，再用减法倒着检查。", watch: "个位、十位、百位不能串门，进位退位要留下记号。", tryThis: "给自己出一道三位数加减题，写出一条验算路线。" },
    { role: "点阵摆盘师", slogan: "一张点阵，讲出一乘两除。", mission: "把几个几摆整齐，再从同一张图里找乘法和除法。", watch: "先分清题目问的是每份几个，还是一共有几份。", tryThis: "用 24 个点画一张图，说出 3 道相关算式。" },
    { role: "符号排队员", slogan: "括号最先走，乘除排前头。", mission: "给每个运算符号排队，再一步一步算。", watch: "不要看到前面的加减就先算，先找括号和乘除。", tryThis: "把同一组数字加上不同括号，比较结果怎么变。" },
    { role: "错因侦探", slogan: "不说粗心，说出证据。", mission: "给错题贴上错因标签，再写出正确第一步。", watch: "错因要具体到符号、数位、口诀或顺序。", tryThis: "把今天一道错题做成‘案件卡’，正面写错题，背面写证据。" },
    { role: "凑整搬运工", slogan: "先找好朋友，凑整再计算。", mission: "把能凑成整十整百的数搬到一起。", watch: "搬家只换位置，不能漏掉剩下的数。", tryThis: "找两组能凑整的数字朋友，编一道四个数连加题。" },
    { role: "数轴导航员", slogan: "多走要退回，少走要补上。", mission: "在数轴上先跳到整十整百，再做补偿小跳。", watch: "每次都要说清是多减了还是少减了。", tryThis: "画一条数轴解释 304-197，箭头上写出补偿理由。" },
    { role: "面积切块师", slogan: "难数拆开算，分块再合并。", mission: "把难乘法切成整十块和零头块。", watch: "每一块都要算，最后别忘了合起来。", tryThis: "用长方形图解释 8×23，也可以试试另一种拆法。" },
    { role: "算法路线师", slogan: "先观察，再选路；不硬套。", mission: "给每道题选择最省力的路线，并说理由。", watch: "如果巧算更麻烦，就老老实实计算。", tryThis: "同一道题写两种算法，圈出你觉得更省力的一种。" },
    { role: "题目整理师", slogan: "先收拾题目，再列式。", mission: "圈数字、画单位、框关系词，把问题找出来。", watch: "不要看见两个数字就急着加减，先看谁和谁比。", tryThis: "把一道文字题改成条件卡片，再重新排列讲给别人听。" },
    { role: "重叠圈圈师", slogan: "中间数两次，合计减一次。", mission: "先把两样都会的数量放进中间，再补两边。", watch: "总数不是两边直接相加，中间有没有重复最关键。", tryThis: "用家里人的兴趣编一个两圈重叠小调查。" },
    { role: "方格拼图师", slogan: "面积看小格，周长数外边。", mission: "在方格纸上拼图形，描出真正的外边。", watch: "贴在里面的边不是外边，不能算进周长。", tryThis: "用 4 个小正方形拼两种图形，比较周长是否一样。" },
    { role: "视角摄影师", slogan: "眼睛站哪边，就画哪边样子。", mission: "先画观察箭头，再画从前面、侧面或上面看到的图。", watch: "从上面看位置，从前面看高度，不要混在一起。", tryThis: "搭 4 块积木，给家人猜这是从哪一面看到的。" },
    { role: "整体检查员", slogan: "先问整体是谁，再看平均分。", mission: "给整体画外框，检查每份是不是一样大。", watch: "不是同一个整体，或者没有平均分，就不能直接写分数。", tryThis: "找两个看起来都是一半但整体不同的例子。" },
    { role: "分数切分师", slogan: "整体一样，分得越多每份越小。", mission: "画同样长的分数条，比较几分之一的大小。", watch: "比较前先确认整体一样大。", tryThis: "画 1/2、1/4、1/8，让家人指出哪一份最大。" },
    { role: "涂色记录员", slogan: "下面分几份，上面取几份。", mission: "先平均分格，再按分子涂色。", watch: "分母看总份数，分子看涂色份数，别写反。", tryThis: "自己画一个 3/4，再换成 2/4 比较涂色变化。" },
    { role: "生活分数发现家", slogan: "生活里的半个，也要说整体。", mission: "在钟面、杯子、纸条里找分数，并说清整体。", watch: "半小时、半杯、半张纸的整体不一样。", tryThis: "在家找 3 个分数例子，每个都补一句‘整体是……’。" },
    { role: "表格定位员", slogan: "标题定主题，行列找位置，单位别漏掉。", mission: "先读标题和单位，再找到行列交叉格。", watch: "不要只拿数字，要说出数字来自哪一行哪一列。", tryThis: "把一张家庭零花钱表读给别人听，并问一个问题。" },
    { role: "条形图测量师", slogan: "不只看长短，还要读刻度。", mission: "用条形长度比较多少，再用刻度求差。", watch: "多出来的一段要标括号，差值从刻度里来。", tryThis: "把 3 个项目画成条形图，问‘谁比谁多多少’。" },
    { role: "线段画图师", slogan: "谁多画长，问题标上。", mission: "用线段表示总数、部分、差和多几少几。", watch: "线段长短要跟题目关系一致，问题要标在图上。", tryThis: "把一道比多比少题只画图不计算，让家人看图列式。" },
    { role: "规律侦察员", slogan: "先圈一组，再找位置。", mission: "找数字、图形或位置的变化规则。", watch: "答案要能说出规则，不能只靠猜。", tryThis: "设计一串有规律的珠子，让家人猜第 12 个是什么。" },
    { role: "闯关分类员", slogan: "先看关卡类型，再动笔。", mission: "把题目分成准确关、顺序关或巧算关。", watch: "综合题更要慢一点选方法，别一上来硬算。", tryThis: "给 3 道题贴方法标签：验算、顺序、巧算。" },
    { role: "图形工具师", slogan: "先选图，再判断。", mission: "在圈图、格子图、视角图里选合适工具。", watch: "图和算式必须处理同一个关系，不能图画一套、算式写一套。", tryThis: "同一道空间题先选工具卡，再说为什么不用另一张。" },
    { role: "信息翻译官", slogan: "文字变成图，图再回到算式。", mission: "把分数、表格和图形信息放到同一个整体里。", watch: "总量要一致，分数和表格不能各说各的。", tryThis: "把一张小表格改成整体条，再涂出其中一部分。" },
    { role: "数学游戏设计师", slogan: "能教别人，才是真的会。", mission: "设计一个有规则、题目、答案和解释的数学小游戏。", watch: "游戏好玩还不够，别人要能听懂为什么答案对。", tryThis: "邀请家人试玩，记录一个听不懂的地方并修改规则。" },
    { role: "条件路线员", slogan: "原来先画好，变化接箭头。", mission: "按事情发生顺序，把增加、减少、分组画成箭头。", watch: "每一步箭头都要对应一道算式，不能跳步。", tryThis: "把一道两步应用题画成‘原来→变化→结果’路线图。" },
    { role: "分组圈画师", slogan: "乘法看几个几，除法看怎么分。", mission: "用同一张点阵解释乘法、包含分和平均分。", watch: "每组必须一样多，圈组方式决定除法含义。", tryThis: "用 32 个点画两种分组方法，说出两道除法。" },
    { role: "倍数线段师", slogan: "多几看差，几倍看几段。", mission: "先画一份，再复制成几份或标出相差的一段。", watch: "倍数图里的每一段要一样长。", tryThis: "把‘24 是 6 的几倍’和‘24 比 6 多几’画成两张不同线段图。" },
    { role: "一题多图挑战者", slogan: "换一种图，也要同一个答案。", mission: "给一道题尝试两种图，检查答案是否一致。", watch: "开放题也要有顺序，枚举不能漏、不能重复。", tryThis: "挑一题分别用表格图和线段图解释。" },
  ];

  const abilityMission = {
    calc: "把计算过程画出来，养成检查和说理的习惯。",
    quick: "用图发现省力路线，而不是硬算到底。",
    logic: "用圈、格子和箭头把复杂关系看清楚。",
    fraction: "把整体、平均分和取几份画成可见的量。",
    info: "在文字、表格、图形和算式之间来回翻译。",
    drawing: "主动选择图示工具，用图解释数量关系。",
  };

  const stepTemplates = [
    { title: "读题侦察", role: "read" },
    { title: "选图工具", role: "choose" },
    { title: "跟画例题", role: "model" },
    { title: "独立闯关", role: "practice" },
    { title: "复盘讲题", role: "reflect" },
  ];

  function diagramFor(lesson) {
    return diagramCatalog[lesson.visualType] || diagramCatalog.project;
  }

  function outputFor(lesson) {
    const diagram = diagramFor(lesson);
    return `能用${diagram.tool}解释${lesson.title}，并把图、算式、理由连起来。`;
  }

  function childGuideFor(lesson) {
    const guide = childLessonGuides[lesson.number - 1];
    if (guide) return guide;

    const diagram = diagramFor(lesson);
    return {
      role: "数学小老师",
      slogan: diagram.habit,
      mission: `用${diagram.tool}讲清${lesson.title}。`,
      watch: diagram.checkpoint,
      tryThis: "换一个数字或物品，重新讲一遍。",
    };
  }

  function buildMeta(lesson) {
    return {
      title: lesson.title,
      ability: lesson.ability,
      week: lesson.week,
      number: lesson.number,
      goal: lesson.goal,
      output: outputFor(lesson),
      mission: abilityMission[lesson.ability] || abilityMission.drawing,
    };
  }

  function buildSteps(lesson) {
    const diagram = diagramFor(lesson);
    const childGuide = childGuideFor(lesson);
    const example = lesson.workedExample?.problem || lesson.exercises[0][1];
    const steps = {
      read: {
        title: "读题侦察",
        intro: `${childGuide.role}先看情境，不急着算。把已知、关系词和问题找出来。`,
        task: lesson.scene
          ? `完成“${lesson.scene.title}”：${lesson.scene.steps[0]}`
          : `读一遍情境：${lesson.lifeIntro}`,
        prompt: childGuide.mission,
      },
      choose: {
        title: "选图工具",
        intro: `今天主工具是${diagram.tool}。先判断为什么它适合这类题。`,
        task: diagram.drawPrompt,
        prompt: diagram.checkpoint,
      },
      model: {
        title: "跟画例题",
        intro: `照着例题画一遍，边画边把每个数量标到图上。`,
        task: example,
        prompt: lesson.workedExample?.childSay || childGuide.slogan,
      },
      practice: {
        title: "独立闯关",
        intro: "先自己画图，再列式。不会时只看提示，不直接看答案。",
        task: lesson.exercises[1]?.[1] || lesson.exercises[0][1],
        prompt: childGuide.watch,
      },
      reflect: {
        title: "复盘讲题",
        intro: "像小老师一样讲一遍：为什么这样画，为什么这样算。",
        task: lesson.reviewPrompt,
        prompt: `${childGuide.slogan} ${childGuide.tryThis}`,
      },
    };

    return stepTemplates.map((template) => ({ ...steps[template.role], role: template.role }));
  }

  function buildVisualTasks(lesson) {
    const diagram = diagramFor(lesson);
    const core = lesson.diagramSteps?.[0]?.detail || diagram.drawPrompt;
    return [
      {
        type: lesson.visualType,
        name: diagram.tool,
        prompt: diagram.drawPrompt,
        checkpoint: diagram.checkpoint,
      },
      {
        type: lesson.visualType,
        name: "图算对照",
        prompt: core,
        checkpoint: "算式里的每个数，都能在图上指出它表示哪一段或哪一块。",
      },
    ];
  }

  function buildPracticeSets(lesson) {
    const childGuide = childGuideFor(lesson);
    const base = lesson.exercises.map(([level, question, answer, explanation]) => ({
      level,
      question,
      answer,
      explanation,
      diagramType: diagramFor(lesson).tool,
      drawHint: diagramFor(lesson).drawPrompt,
      reasoningPrompt: childGuide.slogan,
    }));
    const core = lesson.exercises[1] || lesson.exercises[0];
    const transfer = {
      level: "迁移",
      question: `把“${core[1]}”里的数字或物品换一换，自己编一道同类型题，并画图说明。`,
      answer: "开放题：图、算式、解释一致即可。",
      explanation: "迁移题重点看能不能把今天的图示方法用到新题里。",
      diagramType: diagramFor(lesson).tool,
      drawHint: "沿用今天的主图示，换数字后重新标出条件和问题。",
      reasoningPrompt: `我为什么仍然选择这张图？${childGuide.watch}`,
    };
    return [...base, transfer];
  }

  function decoratePractice(item, lesson, category) {
    const diagram = diagramFor(lesson);
    const childGuide = childGuideFor(lesson);
    return {
      category,
      diagramType: diagram.tool,
      drawHint: diagram.drawPrompt,
      reasoningPrompt: category === "易错判断" ? childGuide.watch : childGuide.slogan,
      ...item,
    };
  }

  function buildExtraPractice(lesson) {
    const baseExercise = lesson.exercises.find((exercise) => exercise[0] === "基础") || lesson.exercises[0];
    const coreExercise = lesson.exercises.find((exercise) => exercise[0] === "核心") || lesson.exercises[1] || lesson.exercises[0];
    const challengeExercise = lesson.exercises.find((exercise) => exercise[0] === "挑战") || lesson.exercises[2] || coreExercise;
    const diagram = diagramFor(lesson);
    const childGuide = childGuideFor(lesson);

    return {
      base: [
        decoratePractice(
          {
            level: "基础巩固",
            question: `${baseExercise[1]} 做完后，把题目中的数量标到${diagram.tool}上。`,
            answer: baseExercise[2],
            explanation: `${baseExercise[3]} 这题重点是先把基础关系画清楚。`,
          },
          lesson,
          "基础巩固",
        ),
        decoratePractice(
          {
            level: "基础巩固",
            question: `换一组小一点的数字，仿照“${baseExercise[1]}”再做一题。`,
            answer: "开放题：数字合理、图和算式一致即可。",
            explanation: "基础巩固题重点是方法稳定，不追求难度。",
          },
          lesson,
          "基础巩固",
        ),
      ],
      core: [
        decoratePractice(
          {
            level: "核心迁移",
            question: `${coreExercise[1]} 请先写“我为什么选${diagram.tool}”，再列式。`,
            answer: coreExercise[2],
            explanation: `${coreExercise[3]} 迁移时要把选图理由说出来。`,
          },
          lesson,
          "核心迁移",
        ),
        decoratePractice(
          {
            level: "核心迁移",
            question: `把“${challengeExercise[1]}”改成家里暑假场景，比如读书打卡、零花钱、游泳课或积木收纳，再画图解答。`,
            answer: "开放题：情境合理、数量关系不变、答案能用图解释即可。",
            explanation: "生活化迁移能帮助孩子把方法带到新题里。",
          },
          lesson,
          "核心迁移",
        ),
      ],
      mistake: [
        decoratePractice(
          {
            level: "易错判断",
            question: `判断：有人做“${coreExercise[1]}”时没有画图，直接套算式，结果和图上的关系对不上。请找出可能错在哪里，并改正。`,
            answer: "重点检查条件是否漏读、关系是否画反、算式中的数是否都能在图上找到。",
            explanation: `这类错题要盯住：${childGuide.watch}`,
          },
          lesson,
          "易错判断",
        ),
      ],
      explain: [
        decoratePractice(
          {
            level: "表达讲题",
            question: `像${childGuide.role}一样讲给家人听：今天为什么要用${diagram.tool}？它帮我看清了什么？`,
            answer: "开放题：能说出选图理由、图上的关键数量、对应算式即可。",
            explanation: childGuide.tryThis,
          },
          lesson,
          "表达讲题",
        ),
      ],
    };
  }

  function buildSelfCheck(lesson) {
    const diagram = diagramFor(lesson);
    const childGuide = childGuideFor(lesson);
    return {
      criteria: [
        `我能独立选择${diagram.tool}。`,
        "我能先画图，再列式，不跳过关系说明。",
        "我能把答案从图上解释出来。",
        `我能避开：${childGuide.watch}`,
        `我能当${childGuide.role}讲出：${childGuide.slogan}`,
      ],
      reflection: lesson.reviewPrompt,
      mistakeTips: lesson.mistakeTips,
      tryThis: childGuide.tryThis,
    };
  }

  function buildParentOptional(lesson) {
    const source = lesson.parentGuide || [lesson.parentScript];
    return source.map((line) => line.replaceAll("家长", "陪学者"));
  }

  function enrichLesson(lesson) {
    const upgraded = {
      meta: buildMeta(lesson),
      steps: buildSteps(lesson),
      visualTasks: buildVisualTasks(lesson),
      practiceSets: buildPracticeSets(lesson),
      extraPractice: buildExtraPractice(lesson),
      selfCheck: buildSelfCheck(lesson),
      parentOptional: buildParentOptional(lesson),
      childGuide: childGuideFor(lesson),
    };

    return { ...lesson, upgraded };
  }

  function enrichLessons(lessons) {
    return lessons.map(enrichLesson);
  }

  function enrichQuestion(question, lesson) {
    const diagram = diagramFor(lesson);
    return {
      diagramType: diagram.tool,
      drawHint: diagram.drawPrompt,
      reasoningPrompt: "先画图整理关系，再列式计算，最后用图解释答案。",
      ...question,
    };
  }

  return {
    diagramCatalog,
    enrichLessons,
    enrichQuestion,
  };
})();

window.MathCourseUpgrade = MathCourseUpgrade;
