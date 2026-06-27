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
    const example = lesson.workedExample?.problem || lesson.exercises[0][1];
    const steps = {
      read: {
        title: "读题侦察",
        intro: "先看情境，不急着算。把已知、关系词和问题找出来。",
        task: lesson.scene
          ? `完成“${lesson.scene.title}”：${lesson.scene.steps[0]}`
          : `读一遍情境：${lesson.lifeIntro}`,
        prompt: "我知道了什么？最后要问什么？",
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
        prompt: lesson.workedExample?.childSay || lesson.method,
      },
      practice: {
        title: "独立闯关",
        intro: "先自己画图，再列式。不会时只看提示，不直接看答案。",
        task: lesson.exercises[1]?.[1] || lesson.exercises[0][1],
        prompt: "我的图能不能解释我的算式？",
      },
      reflect: {
        title: "复盘讲题",
        intro: "像小老师一样讲一遍：为什么这样画，为什么这样算。",
        task: lesson.reviewPrompt,
        prompt: `今天要避开的错因：${lesson.mistakeTips[0]}`,
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
    const base = lesson.exercises.map(([level, question, answer, explanation]) => ({
      level,
      question,
      answer,
      explanation,
      diagramType: diagramFor(lesson).tool,
      drawHint: diagramFor(lesson).drawPrompt,
      reasoningPrompt: "先说图，再说算式，最后说答案。",
    }));
    const core = lesson.exercises[1] || lesson.exercises[0];
    const transfer = {
      level: "迁移",
      question: `把“${core[1]}”里的数字或物品换一换，自己编一道同类型题，并画图说明。`,
      answer: "开放题：图、算式、解释一致即可。",
      explanation: "迁移题重点看能不能把今天的图示方法用到新题里。",
      diagramType: diagramFor(lesson).tool,
      drawHint: "沿用今天的主图示，换数字后重新标出条件和问题。",
      reasoningPrompt: "我为什么仍然选择这张图？",
    };
    return [...base, transfer];
  }

  function buildSelfCheck(lesson) {
    const diagram = diagramFor(lesson);
    return {
      criteria: [
        `我能独立选择${diagram.tool}。`,
        "我能先画图，再列式，不跳过关系说明。",
        "我能把答案从图上解释出来。",
        `我能避开：${lesson.mistakeTips[0]}。`,
      ],
      reflection: lesson.reviewPrompt,
      mistakeTips: lesson.mistakeTips,
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
      selfCheck: buildSelfCheck(lesson),
      parentOptional: buildParentOptional(lesson),
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
