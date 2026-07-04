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

  function commonsFile(file) {
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;
  }

  function commonsSource(file) {
    return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(" ", "_"))}`;
  }

  function imageFromCommons(file, alt, credit = "Wikimedia Commons") {
    return {
      url: commonsFile(file),
      alt,
      credit,
      source: commonsSource(file),
    };
  }

  const universityImages = {
    caltech: imageFromCommons("Caltech_Entrance.jpg", "加州理工学院入口", "Wikimedia Commons"),
    mit: imageFromCommons("MIT_Main_Campus_aerial.jpg", "麻省理工学院校园航拍", "Wikimedia Commons"),
    tsinghua: imageFromCommons("Tsinghua_Garden1.jpg", "清华大学校园景观", "Wikimedia Commons"),
    cambridge: imageFromCommons("The_Cavendish_Laboratory_-_geograph.org.uk_-_631839.jpg", "剑桥大学卡文迪许实验室", "Wikimedia Commons"),
    stanford: imageFromCommons("View_Stanford.jpg", "斯坦福大学校园", "Wikimedia Commons"),
    eth: imageFromCommons("ETH_Zürich_am_Abend.jpg", "苏黎世联邦理工学院夜景", "Wikimedia Commons"),
    oxford: imageFromCommons("Mob_Quad_from_Chapel_Tower.jpg", "牛津大学学院庭院", "Wikimedia Commons"),
    harvard: imageFromCommons("HarvardYard.jpg", "哈佛大学校园", "Wikimedia Commons"),
    cmu: imageFromCommons("Gates-Hillman_Complex_at_Carnegie_Mellon_University_2.jpg", "卡内基梅隆大学盖茨中心", "Wikimedia Commons"),
    tongji: imageFromCommons("Tongji_sipin.jpg", "同济大学校园建筑", "Wikimedia Commons"),
  };

  const scienceImages = {
    marsRover: imageFromCommons("Curiosity Self-Portrait at 'Big Sky' Drilling Site.jpg", "好奇号火星车自拍", "NASA/JPL-Caltech/MSSS"),
    robot: imageFromCommons("FANUC_6-axis_welding_robots.jpg", "工业机器人机械臂", "Wikimedia Commons"),
    rocket: imageFromCommons("Apollo_11_Launch_-_GPN-2000-000630.jpg", "阿波罗11号火箭发射", "NASA"),
    lab: imageFromCommons("The_Cavendish_Laboratory_-_geograph.org.uk_-_631839.jpg", "科学实验室建筑", "Wikimedia Commons"),
    ai: imageFromCommons("Colored_neural_network.svg", "彩色神经网络示意图", "Wikimedia Commons"),
    solar: imageFromCommons("Solar_array-3.jpg", "太阳能电池板阵列", "Wikimedia Commons"),
    bridge: imageFromCommons("Golden_Gate_Bridge_as_seen_from_Battery_East.jpg", "工程桥梁结构", "Wikimedia Commons"),
    animals: imageFromCommons("Animal_diversity.png", "动物多样性示意", "Wikimedia Commons"),
    architecture: imageFromCommons("Tongji_sipin.jpg", "建筑与设计校园场景", "Wikimedia Commons"),
    vision: imageFromCommons("FANUC_6-axis_welding_robots.jpg", "机器人机械臂视觉与控制", "Wikimedia Commons"),
    iss: imageFromCommons("The_station_pictured_from_the_SpaceX_Crew_Dragon_5.jpg", "国际空间站", "NASA"),
    microscope: imageFromCommons("The_Cavendish_Laboratory_-_geograph.org.uk_-_631839.jpg", "微观科学研究实验室", "Wikimedia Commons"),
    battery: imageFromCommons("FANUC_6-axis_welding_robots.jpg", "机器人电量管理联想", "Wikimedia Commons"),
    clock: imageFromCommons("Clock_simple.svg", "钟面示意图", "Wikimedia Commons"),
    data: imageFromCommons("Colored_neural_network.svg", "数据网络示意", "Wikimedia Commons"),
    sports: imageFromCommons("Athletics_pictogram.svg", "运动项目图标", "Wikimedia Commons"),
    blueprint: imageFromCommons("Tsinghua_Garden1.jpg", "工程校园与设计环境", "Wikimedia Commons"),
    moonBase: imageFromCommons("Apollo_11_Launch_-_GPN-2000-000630.jpg", "太空基地能源任务联想图", "NASA"),
    mazeRobot: imageFromCommons("FANUC_6-axis_welding_robots.jpg", "机器人执行任务", "Wikimedia Commons"),
    mars: imageFromCommons("OSIRIS_Mars_true_color.jpg", "火星真实色彩图像", "ESA/Rosetta"),
    presentation: imageFromCommons("HarvardYard.jpg", "大学校园里的研究展示联想", "Wikimedia Commons"),
    map: imageFromCommons("Openstreetmap_logo.svg", "地图导航标志", "Wikimedia Commons"),
    warehouse: imageFromCommons("FANUC_6-axis_welding_robots.jpg", "自动化机器人分拣联想", "Wikimedia Commons"),
    fuel: imageFromCommons("Apollo_11_Launch_-_GPN-2000-000630.jpg", "火箭发射", "NASA"),
    university: imageFromCommons("View_Stanford.jpg", "未来大学校园", "Wikimedia Commons"),
  };

  const universityCatalog = {
    caltech: { shortName: "Caltech", name: "加州理工学院", location: "美国 · 帕萨迪纳", tagline: "很多深空探测任务背后，都需要工程师把数字检查到非常可靠。", image: universityImages.caltech },
    mit: { shortName: "MIT", name: "麻省理工学院", location: "美国 · 剑桥", tagline: "这里有许多工程、机器人和人工智能研究，喜欢把想法做成真实机器。", image: universityImages.mit },
    tsinghua: { shortName: "清华", name: "清华大学", location: "中国 · 北京", tagline: "工程、计算机和航天相关研究很多，强调把基础能力用到真实问题。", image: universityImages.tsinghua },
    cambridge: { shortName: "Cambridge", name: "剑桥大学", location: "英国 · 剑桥", tagline: "卡文迪许实验室见证过很多重要科学发现，科学家最重视证据和复查。", image: universityImages.cambridge },
    stanford: { shortName: "Stanford", name: "斯坦福大学", location: "美国 · 加州", tagline: "人工智能、计算机和创新研究活跃，很多想法从观察规律开始。", image: universityImages.stanford },
    eth: { shortName: "ETH", name: "苏黎世联邦理工学院", location: "瑞士 · 苏黎世", tagline: "工程、能源和机器人研究很强，常把大问题拆成小模块。", image: universityImages.eth },
    oxford: { shortName: "Oxford", name: "牛津大学", location: "英国 · 牛津", tagline: "自然科学和人文传统都很深，研究世界常常从分类和比较开始。", image: universityImages.oxford },
    harvard: { shortName: "Harvard", name: "哈佛大学", location: "美国 · 剑桥", tagline: "许多研究会收集数据、画图表，再从数据里寻找问题答案。", image: universityImages.harvard },
    cmu: { shortName: "CMU", name: "卡内基梅隆大学", location: "美国 · 匹兹堡", tagline: "机器人和计算机研究很有名，机器人要学会看、判断和行动。", image: universityImages.cmu },
    tongji: { shortName: "同济", name: "同济大学", location: "中国 · 上海", tagline: "建筑、设计和工程特色鲜明，图纸能把看不见的结构变清楚。", image: universityImages.tongji },
  };

  const explorationGuides = [
    { uni: "caltech", scienceImage: "marsRover", role: "火星车物资管理员", hook: "火星车离地球很远，科学家怎样确认补给和数据没有算错？", scienceTitle: "太空探索 · 火星车", scienceText: "火星车每天要核对距离、能量和任务数据，算完还要反向检查。", mathLink: "加减验算就像太空任务的数据复查。", mission: "帮火星车核对 258 份补给和新送来的 137 份补给，并用减法验算。", growthTalk: "你没有只报答案，而是倒着检查了一遍，这是科学家的可靠习惯。", badge: "计算检查员", task: ["探索", "火星车原有258份补给，又收到137份。现在一共有多少份？请列竖式并用减法验算。", "395份；395-137=258", "数位对齐后相加，再反向减回去检查。"] },
    { uni: "mit", scienceImage: "robot", role: "机器人零件分组师", hook: "机器人仓库要把零件一组一组摆好，怎样最快知道总数？", scienceTitle: "机器人 · 机械臂", scienceText: "机器人装配常把零件按行列、批次和盒子管理。", mathLink: "乘法和除法能用同一张点阵图互相解释。", mission: "把机器人零件摆成 7 行 8 列，再反过来分组。", growthTalk: "你能用一张图讲出乘法和除法，说明你真的理解了数量关系。", badge: "点阵工程师", task: ["探索", "机器人有7排零件，每排8个。一共有多少个？如果每8个装一盒，可以装几盒？", "56个；7盒", "7×8=56，56÷8=7。"] },
    { uni: "tsinghua", scienceImage: "rocket", role: "太空任务流程员", hook: "火箭任务有很多步骤，如果顺序错了会发生什么？", scienceTitle: "航天工程 · 发射流程", scienceText: "航天任务必须按流程执行，计算也要按正确顺序执行。", mathLink: "混合运算顺序就是算式里的任务流程。", mission: "给太空任务算式排队，先找括号和乘除。", growthTalk: "你先判断顺序再计算，这比直接动笔更像工程师。", badge: "流程控制员", task: ["探索", "太空补给有18份，另外4个箱子每箱6份。总共有多少份？", "42份", "先算4×6=24，再算18+24=42。"] },
    { uni: "cambridge", scienceImage: "lab", role: "科学实验复查员", hook: "科学家为什么不能只说‘粗心’，而要找出具体证据？", scienceTitle: "科学实验 · 证据复查", scienceText: "实验结果要能被检查，错误也要说清是哪一步造成的。", mathLink: "错因侦探课训练的就是找证据能力。", mission: "给错题贴上符号、数位、口诀或顺序标签。", growthTalk: "你说出了错在哪里，而不是只说粗心，这是非常重要的复盘能力。", badge: "错因侦探", task: ["探索", "实验记录写成 7 + 3 × 4 = 40。请找出错因并改正。", "错误，正确是19", "先乘除后加减，先算3×4=12，再加7。"] },
    { uni: "stanford", scienceImage: "ai", role: "AI数据打包员", hook: "AI 要看很多数据，怎样把数据先整理得更好算？", scienceTitle: "人工智能 · 数据整理", scienceText: "AI 学习前常要整理数据，把信息分组、打包、清洗。", mathLink: "凑整就是把数字先打包成更容易处理的数据。", mission: "帮 AI 先找到能凑成 100 的数字朋友。", growthTalk: "你先观察再计算，说明你开始会选择更聪明的路线。", badge: "数据打包师", task: ["探索", "AI训练有三包数据：48条、27条、52条。先合并哪两包更省力？一共有多少条？", "127条", "48和52先凑成100，再加27。"] },
    { uni: "caltech", scienceImage: "marsRover", role: "火星车路线修正员", hook: "火星车多走了几米，怎样把路线修正回来？", scienceTitle: "火星车 · 路线修正", scienceText: "探测器行驶要不断修正距离，不能只凭感觉。", mathLink: "减法补偿就像在数轴上修正多走或少走的距离。", mission: "用数轴帮火星车计算 126 - 98。", growthTalk: "你能说清多减要加回，说明你不是死记方法，而是在理解方向。", badge: "路线导航员", task: ["探索", "火星车计划走98米，先按100米估算。从126米电量里扣除后还剩多少？", "28", "126-100=26，多减2，要加回2。"] },
    { uni: "eth", scienceImage: "solar", role: "太阳能板设计师", hook: "一大片太阳能板太难算，工程师会怎样拆开计算？", scienceTitle: "新能源工程 · 太阳能板", scienceText: "工程师常把大面积拆成规则小块，再分别计算。", mathLink: "乘法拆分就是把大长方形切成好算的两块。", mission: "把 6×14 的太阳能板拆成 6×10 和 6×4。", growthTalk: "你把难数拆成好算的两块，这是工程设计里的模块化思维。", badge: "面积拆分师", task: ["探索", "太阳能板有6行，每行14块。把14拆成10和4，一共有多少块？", "84块", "6×10=60，6×4=24，合起来84。"] },
    { uni: "mit", scienceImage: "bridge", role: "工程路线选择师", hook: "同一个工程问题可能有几种办法，怎样选更省力的一种？", scienceTitle: "工程设计 · 方案选择", scienceText: "工程师常比较多种方案，选择稳定、清楚、少出错的方法。", mathLink: "策略选择课训练的就是先观察，再选方法。", mission: "给三道题贴上凑整、补偿或拆分标签。", growthTalk: "你能说明为什么选这个方法，比算得快更重要。", badge: "策略工程师", task: ["探索", "工程数据 76+25+24、203-99、7×19 分别适合什么策略？", "凑整；补偿；拆分", "先看数字特点，再选择路线。"] },
    { uni: "stanford", scienceImage: "ai", role: "AI读题训练师", hook: "如果 AI 看漏了条件，它会答错；我们怎样帮它读清楚？", scienceTitle: "人工智能 · 读题理解", scienceText: "AI 需要识别文字里的对象、数量和关系，人做题也一样。", mathLink: "条件圈画就是把题目变成清楚的数据。", mission: "圈出人物、数字、单位和关系词，再列式。", growthTalk: "你先整理信息再列式，正在训练很重要的信息处理能力。", badge: "条件整理师", task: ["探索", "AI读到：小红有24张贴纸，送出8张，又买来12张。请圈条件并求现在有多少张。", "28张", "24-8+12=28。"] },
    { uni: "oxford", scienceImage: "animals", role: "自然分类研究员", hook: "有些动物既会游泳又会飞，分类统计时会不会被数两次？", scienceTitle: "自然科学 · 分类", scienceText: "研究动物、植物和兴趣小组时，经常会遇到重叠分类。", mathLink: "重叠问题帮助我们避免重复计算。", mission: "用两个圈表示两类，把同时属于两类的放中间。", growthTalk: "你注意到了中间被数了两次，这就是严谨统计。", badge: "分类研究员", task: ["探索", "动物研究小组记录：会游泳12种，会飞10种，两样都会4种。至少会一样的有多少种？", "18种", "12+10-4=18。"] },
    { uni: "tongji", scienceImage: "architecture", role: "建筑拼图设计师", hook: "同样的4块材料，为什么拼法不同，外边长度会变？", scienceTitle: "建筑设计 · 拼剪", scienceText: "建筑师会用模型比较面积、边界和形状变化。", mathLink: "图形拼剪能看清面积和周长不是一回事。", mission: "用4个小方格拼两种形状，比较外边。", growthTalk: "你能区分面积和周长，说明你在看结构，不只是看外形。", badge: "方格建筑师", task: ["探索", "用4块正方形材料拼成一条长条，面积和外边各是多少？", "面积4格，外边10条小边", "面积数小格，周长只数外边。"] },
    { uni: "cmu", scienceImage: "vision", role: "机器人视觉工程师", hook: "机器人从前面和上面看到的世界一样吗？", scienceTitle: "机器人视觉 · 视角", scienceText: "机器人要从摄像头画面中判断物体的位置和高度。", mathLink: "方位观察训练从不同方向看同一组物体。", mission: "先画眼睛站在哪里，再画看到的样子。", growthTalk: "你先确定视角再画图，这是机器人视觉里的关键步骤。", badge: "视角观察员", task: ["探索", "机器人看到两列积木，前后高度分别是(1,3)和(2,1)。从前面看两列多高？", "3层和2层", "同一列看最高高度。"] },
    { uni: "caltech", scienceImage: "iss", role: "太空餐厅公平官", hook: "宇航员在空间站分食物，怎样才算公平？", scienceTitle: "国际空间站 · 太空生活", scienceText: "太空中也要分配食物、时间和任务，公平分配要先确定整体。", mathLink: "分数必须先看整体，再看是否平均分。", mission: "判断披萨是不是平均分，能不能叫二分之一。", growthTalk: "你先问整体是谁，这是理解分数最重要的第一步。", badge: "公平分配员", task: ["探索", "太空披萨切成一大一小两块，小块能叫1/2吗？为什么？", "不能", "二分之一必须平均分成两份。"] },
    { uni: "cambridge", scienceImage: "microscope", role: "微观世界观察员", hook: "显微镜下很小的一份，为什么不一定更大？", scienceTitle: "显微科学 · 微小世界", scienceText: "科学家观察微小结构时，要先知道整体尺度。", mathLink: "几分之一比较时，整体一样，分得越多每份越小。", mission: "画同样长的纸条，比较 1/2、1/4、1/8。", growthTalk: "你没有被分母数字骗到，而是回到图上比较大小。", badge: "分数观察员", task: ["探索", "同样长的样本条，取1/2和1/4，哪一份更大？", "1/2更大", "同一整体分成2份，每份比分成4份更大。"] },
    { uni: "mit", scienceImage: "battery", role: "机器人电量记录员", hook: "机器人电池显示3/4，下面的4和上面的3分别告诉我们什么？", scienceTitle: "机器人 · 能量管理", scienceText: "机器人要知道电量还剩多少，才能规划下一步任务。", mathLink: "几分之几能描述取了整体中的几份。", mission: "用电量条表示 3/4。", growthTalk: "你能说清分子和分母分别看哪里，分数符号就不神秘了。", badge: "电量记录员", task: ["探索", "机器人电池平均分成4格，亮着3格。用分数表示是多少？", "3/4", "分母4表示总份数，分子3表示取了3份。"] },
    { uni: "oxford", scienceImage: "clock", role: "时间地图发现家", hook: "半小时、半米、半杯水，它们的整体一样吗？", scienceTitle: "生活科学 · 时间与测量", scienceText: "时间、长度、容量都能用分数表达，但整体各不相同。", mathLink: "生活分数也要先说整体。", mission: "在钟面、米尺和杯子里找分数。", growthTalk: "你能说出‘半个什么’，说明你真正抓住了整体。", badge: "生活分数家", task: ["探索", "半小时是多少分钟？1米的四分之一是多少厘米？", "30分钟；25厘米", "整体分别是60分钟和100厘米。"] },
    { uni: "harvard", scienceImage: "data", role: "小小数据科学家", hook: "科学家拿到一张表，为什么先看标题和单位？", scienceTitle: "数据科学 · 表格", scienceText: "数据只有放在标题、行列和单位里，才有意义。", mathLink: "读表格就是从数据中找到问题需要的信息。", mission: "先读标题、行列和单位，再回答问题。", growthTalk: "你能指出答案来自哪一格，这是很好的数据习惯。", badge: "表格定位员", task: ["探索", "阅读数据：周一8本、周二6本、周三9本。三天一共多少本？", "23本", "8+6+9=23，单位是本。"] },
    { uni: "harvard", scienceImage: "sports", role: "运动数据分析员", hook: "只看条形长短够不够？为什么还要读刻度？", scienceTitle: "体育科学 · 数据比较", scienceText: "运动训练也会记录数据，用图表比较变化。", mathLink: "条形图能把数量变成长度，再用差值回答问题。", mission: "读出两个条形的数，再求相差多少。", growthTalk: "你没有只凭眼睛猜，而是读刻度求差，这很严谨。", badge: "条形图分析师", task: ["探索", "跳绳18人，拍球12人。跳绳比拍球多几人？", "6人", "18-12=6。"] },
    { uni: "tsinghua", scienceImage: "blueprint", role: "工程蓝图设计师", hook: "工程蓝图为什么要用线段表示长度和差？", scienceTitle: "工程设计 · 蓝图", scienceText: "复杂结构可以先画成简洁线段，关系会更清楚。", mathLink: "线段图把总数、部分和差画出来。", mission: "用一长一短两条线段表示谁多谁少。", growthTalk: "你把关系画出来再列式，说明你在用图思考。", badge: "线段图工程师", task: ["探索", "小明有32张设计卡，小红比他多8张。小红有多少张？", "40张", "小红线段比32多8，用32+8。"] },
    { uni: "stanford", scienceImage: "ai", role: "AI规律训练师", hook: "AI 为什么能从很多例子里发现规律？", scienceTitle: "人工智能 · 规律学习", scienceText: "AI 学习常常从很多样本里寻找重复、变化和规则。", mathLink: "找规律训练的是先观察变化，再说出规则。", mission: "先圈出一组，再判断下一个。", growthTalk: "你能说出规则，而不是只猜答案，这是规律学习的关键。", badge: "规律侦察员", task: ["探索", "红、蓝、蓝、红、蓝、蓝……第7颗是什么颜色？", "红色", "每3颗一组，第7颗是新一组第1颗。"] },
    { uni: "caltech", scienceImage: "moonBase", role: "太空基地能源管理员", hook: "太空基地的能源计算既要准，又要会选省力方法。", scienceTitle: "未来基地 · 能源管理", scienceText: "基地运行要综合计算能源、物资和时间。", mathLink: "综合计算要先判断题型：准确、顺序还是巧算。", mission: "给每道计算题贴方法标签。", growthTalk: "你先分类再动笔，综合题就不会乱。", badge: "太空闯关员", task: ["探索", "太空基地有125份能量，又有76份和75份。怎样算更省力？", "276份", "125+75=200，再加76。"] },
    { uni: "cmu", scienceImage: "mazeRobot", role: "机器人迷宫指挥官", hook: "机器人走迷宫时，什么时候用圈图，什么时候用格子图？", scienceTitle: "机器人 · 迷宫挑战", scienceText: "机器人解决问题前，也要先选对表示方法。", mathLink: "逻辑空间综合题要先选图，再判断。", mission: "在圈图、格子图、视角图中选工具。", growthTalk: "你能先选工具再解题，这是面对复杂问题的好方法。", badge: "图形工具师", task: ["探索", "跳绳20人、拍球18人，两样都会6人。至少参加一样的有多少人？", "32人", "用圈图，20+18-6=32。"] },
    { uni: "caltech", scienceImage: "mars", role: "火星生活数据员", hook: "如果要写火星生活报告，怎样把分数、表格和图放在一起？", scienceTitle: "火星数据 · 生活报告", scienceText: "科学报告常把文字、分数、图表和结论放在一起。", mathLink: "分数图表综合题要保证整体一致。", mission: "先找整体，再把分数变成具体数量。", growthTalk: "你让分数、表格和算式的总量一致，这是很强的信息整合能力。", badge: "信息翻译官", task: ["探索", "24名火星基地成员中，1/2负责能源，1/4负责植物，剩下几人负责通讯？", "6人", "能源12人，植物6人，24-12-6=6。"] },
    { uni: "harvard", scienceImage: "presentation", role: "小小研究员发布人", hook: "真正学会以后，能不能设计一个游戏教别人？", scienceTitle: "科学展示 · 研究发布", scienceText: "研究员会把规则、数据、答案和解释讲给别人听。", mathLink: "能教别人，说明理解更稳定。", mission: "设计一个数学小游戏，并让家人试玩。", growthTalk: "你愿意修改别人听不懂的地方，这就是研究员的表达能力。", badge: "研究发布员", task: ["探索", "设计一个分数披萨游戏：写规则、题卡、答案和解释。", "开放题", "有规则、有题目、有答案、有解释即可。"] },
    { uni: "tsinghua", scienceImage: "map", role: "任务路线规划员", hook: "导航为什么要按顺序走？应用题也能画路线吗？", scienceTitle: "导航工程 · 路线规划", scienceText: "路线规划会把当前位置、变化和目标一步步连接起来。", mathLink: "画图整理条件就是把事情顺序画成箭头。", mission: "把原来、变化、结果画成一条路线。", growthTalk: "你按事情顺序画箭头，两步题就不容易漏。", badge: "条件路线员", task: ["探索", "有5袋物资，每袋8件，送出9件，还剩多少件？", "31件", "先5×8=40，再40-9=31。"] },
    { uni: "mit", scienceImage: "warehouse", role: "仓库机器人分拣师", hook: "仓库机器人怎样知道32个包裹每8个一组能分几组？", scienceTitle: "自动仓库 · 机器人分拣", scienceText: "仓库机器人常按行列和分组管理物品。", mathLink: "阵列图和分组图能同时解释乘法和除法。", mission: "用同一张点阵解释几个几和怎么分。", growthTalk: "你能换一种圈法解释同一个总数，思维很灵活。", badge: "分组圈画师", task: ["探索", "32个包裹，每8个一组，机器人可以分成几组？", "4组", "32÷8=4。"] },
    { uni: "tsinghua", scienceImage: "fuel", role: "火箭燃料比例师", hook: "火箭燃料和载荷之间也有比例关系，几倍和多几一样吗？", scienceTitle: "航天工程 · 比例", scienceText: "工程中常比较倍数、差值和总量，画线段能避免混淆。", mathLink: "倍数线段图把几倍画成几段同样长。", mission: "画出多几和几倍的不同。", growthTalk: "你能区分差和倍，说明你没有只看关键词。", badge: "倍数线段师", task: ["探索", "燃料舱24份燃料，是启动舱的4倍。启动舱有多少份？", "6份", "24÷4=6。"] },
    { uni: "stanford", scienceImage: "university", role: "未来大学挑战者", hook: "遇到开放问题时，能不能换一种图再想一次？", scienceTitle: "未来学习 · 开放挑战", scienceText: "真正的探索常没有唯一入口，可以用多种图和方法尝试。", mathLink: "一题多图能帮助我们检查思路是否可靠。", mission: "给一道题至少尝试两种图。", growthTalk: "你愿意换一种图重新解释，说明你有探索未知的耐心。", badge: "一题多图挑战者", task: ["探索", "一个数先加8，再乘3，结果是36。这个数是多少？请倒着画。", "4", "36÷3=12，12-8=4。"] },
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

  function explorationFor(lesson) {
    const guide = explorationGuides[lesson.number - 1];
    if (!guide) return null;

    const university = universityCatalog[guide.uni] || universityCatalog.mit;
    const scienceImage = scienceImages[guide.scienceImage] || scienceImages.ai;
    return {
      role: guide.role,
      hook: guide.hook,
      university,
      science: {
        title: guide.scienceTitle,
        childText: guide.scienceText,
        image: scienceImage,
      },
      mathLink: guide.mathLink,
      mission: guide.mission,
      growthTalk: guide.growthTalk,
      badge: guide.badge,
      task: guide.task,
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
      exploration: explorationFor(lesson),
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
