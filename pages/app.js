/**
 * 4天增长运营试水课 - 应用逻辑
 * 每天1小时，4天掌握增长核心框架
 * 统一 3×20min 结构: 导读与框架 / 原文精读 / 实践与总结
 */

// ========================================
// 课程数据
// ========================================
const courseData = {
  "courseName": "4天增长运营大师课-demo",
  "courseSubtitle": "每天1小时，系统掌握增长核心框架",
  "totalDays": 4,
  "days": [
    {
      "day": 1,
      "title": "用户增长万能公式",
      "subtitle": "AARRR模型 + 八角行为分析法",
      "emoji": "📈",
      "source": "《一个用户增长的万能公式》- 穆宁",
      "units": [
        {
          "id": "d1u1",
          "time": "导读与框架",
          "theme": "AARRR + 八角行为分析核心要点",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 速览", "full": "📖 详读" },
          "brief": "<h3>🎯 今日学习目标</h3><p>掌握用户增长的两大核心框架：<strong>AARRR漏斗模型</strong>和<strong>八角行为分析法</strong>，理解如何将两者结合驱动用户增长。</p><hr><h3>📊 AARRR 漏斗模型</h3><p>AARRR是数据驱动用户增长的核心框架，将增长目标拆分为5个环节：</p><ul><li><strong>Acquisition（获取用户）</strong>：让潜在用户首次接触产品，吸引流量</li><li><strong>Activation（激发活跃）</strong>：引导用户完成指定动作，成为活跃用户</li><li><strong>Retention（提高留存）</strong>：维持产品粘度，防止用户流失</li><li><strong>Revenue（增加收入）</strong>：优化盈利模式，驱动付费转化</li><li><strong>Referral（传播推荐）</strong>：利用社交网络实现病毒式传播</li></ul><p>但仅靠AARRR还不够，我们还需要考虑三个关键因素：<strong>增长成本</strong>、<strong>增长效率</strong>、<strong>增长质量</strong>。</p><hr><h3>🎮 八角行为分析法（Octalysis）</h3><p>八角行为分析法从用户心理出发，提供8大核心驱动力：</p><ol><li><strong>使命</strong>（史诗意义和使命感）</li><li><strong>成就</strong>（成长和成就感）</li><li><strong>授权</strong>（创意和及时反馈）</li><li><strong>拥有</strong>（所有权和拥有感）</li><li><strong>社交</strong>（社交影响和关联性）</li><li><strong>稀缺</strong>（稀缺性和渴望）</li><li><strong>未知</strong>（未知性与好奇）</li><li><strong>亏损</strong>（亏损与逃避心）</li></ol><p>可分为：<strong>左脑驱动力</strong>（外在动机）vs <strong>右脑驱动力</strong>（内在动机），以及<strong>白帽游戏化</strong>（积极）vs <strong>黑帽游戏化</strong>（消极）。</p><hr><h3>🔗 AARRR × 八角行为分析法</h3><p>将两个框架结合，每层漏斗对应不同的行为驱动力：</p><table><tr><th>AARRR层级</th><th>核心驱动力</th><th>策略重点</th></tr><tr><td>获取层</td><td>成就 + 使命</td><td>锁定目标用户，创造有认同感的成就</td></tr><tr><td>激活层</td><td>拥有 + 逃避</td><td>明确目标 + 降低参与门槛</td></tr><tr><td>留存层</td><td>授权 + 未知</td><td>用户创造价值 + 未知探索场景</td></tr><tr><td>变现层</td><td>稀缺 + 社交</td><td>打造稀缺性 + 社交货币传播</td></tr></table><hr><h3>💡 一句话总结</h3><p><em>有效的用户增长运营 = AARRR漏斗（做什么）× 八角行为分析法（怎么做）× 数据驱动（持续优化）</em></p>",
          "fullContentKey": "day1_part1",
          "keyPoints": [
            "AARRR: 获取→激活→留存→收入→推荐，五层漏斗模型",
            "八角行为分析法：8大心理驱动力驱动用户行为",
            "左脑驱动力（外在动机）vs 右脑驱动力（内在动机）",
            "白帽游戏化（积极）vs 黑帽游戏化（消极）",
            "AARRR每层对应不同的行为驱动力组合"
          ],
          "outline": [
            "AARRR漏斗模型5个环节",
            "增长三要素：成本、效率、质量",
            "八角行为分析法8大驱动力",
            "两个框架的结合应用"
          ],
          "reflection": "你能说出自己负责产品的AARRR每层各用了哪些驱动力吗？"
        },
        {
          "id": "d1u2",
          "time": "案例精读",
          "theme": "AARRR×八角行为分析实战案例",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 核心摘要", "full": "📖 完整原文" },
          "brief": "<h3>📖 案例精读概览</h3><p>本单元聚焦AARRR与八角行为分析法的结合应用，通过四个真实案例深入理解每层漏斗的游戏化策略：</p><h4>🏆 获取层案例：百度百科「蝌蚪团」</h4><ul><li>利用<strong>成就+使命</strong>驱动力</li><li>赋予用户「知识守护者」使命感</li><li>通过成就系统（等级、勋章）激励贡献</li></ul><h4>🎁 激活层案例：天猫「百万红包雨」</h4><ul><li>利用<strong>拥有+逃避</strong>驱动力</li><li>限时任务制造紧迫感</li><li>红包归属感降低参与门槛</li></ul><h4>🎮 留存层案例：天猫「理想猫乐园」</h4><ul><li>利用<strong>授权+未知</strong>驱动力</li><li>用户自主养成虚拟宠物</li><li>随机奖励保持探索好奇</li></ul><h4>🎲 变现层案例：泡泡玛特盲盒</h4><ul><li>利用<strong>稀缺+社交</strong>驱动力</li><li>限量隐藏款制造稀缺</li><li>开箱分享形成社交传播</li></ul><hr><h3>💡 核心洞察</h3><p><em>每层漏斗匹配不同的八角驱动力组合，关键是理解用户在该阶段的核心心理需求。</em></p>",
          "fullContentKey": "day1_part2",
          "keyPoints": [
            "获取层：百度百科蝌蚪团——成就+使命驱动",
            "激活层：天猫百万红包雨——拥有+逃避驱动",
            "留存层：天猫理想猫乐园——授权+未知驱动",
            "变现层：泡泡玛特盲盒——稀缺+社交驱动",
            "每层漏斗的驱动力组合需匹配用户心理阶段"
          ],
          "outline": [
            "AARRR×八角行为分析法结合框架",
            "获取层游戏化策略与案例",
            "激活层游戏化策略与案例",
            "留存层游戏化策略与案例",
            "变现层游戏化策略与案例"
          ],
          "reflection": "哪个案例对你的产品最有启发？你会如何借鉴？"
        },
        {
          "id": "d1u3",
          "time": "实践与总结",
          "theme": "笔记 + AARRR漏斗实操",
          "duration": "20分钟",
          "brief": "<h3>📝 今日笔记模板</h3><p>用以下结构整理今天的学习要点：</p>",
          "keyPoints": [
            "画出你负责产品的AARRR漏斗",
            "标注每层的关键指标和当前数据",
            "识别当前最大的增长瓶颈在哪一层",
            "为瓶颈层设计一个八角行为分析驱动的方案",
            "输出一页纸的增长策略简报"
          ],
          "outline": [
            "填写结构化笔记",
            "画AARRR漏斗图",
            "标注关键指标",
            "设计改进方案"
          ],
          "practice": {
            "title": "画出你的 AARRR 漏斗",
            "description": "以你当前负责（或最熟悉）的产品为对象，完成以下实操任务。如果没有在职产品，可以选择你常用的一个App进行分析。",
            "tasks": [
              {
                "step": 1,
                "title": "绘制AARRR漏斗",
                "prompt": "画出产品的5层漏斗，标注每层的关键指标（如：获取-新增注册数、激活-次日活跃率等）"
              },
              {
                "step": 2,
                "title": "填写当前数据",
                "prompt": "在每层漏斗旁标注当前的实际数据或你的估计值，计算各层转化率"
              },
              {
                "step": 3,
                "title": "识别瓶颈层",
                "prompt": "找到转化率最低的那一层——这就是你的增长瓶颈。为什么用户在这一层流失最多？"
              },
              {
                "step": 4,
                "title": "设计改进方案",
                "prompt": "参照八角行为分析法，为瓶颈层设计一个具体的改进方案。需要用到哪些核心驱动力？"
              }
            ],
            "outputTemplate": "产品名称：___\n\n获取层：指标___ 数据___ 转化率___\n激活层：指标___ 数据___ 转化率___\n留存层：指标___ 数据___ 转化率___\n变现层：指标___ 数据___ 转化率___\n推荐层：指标___ 数据___ 转化率___\n\n最大瓶颈：___层\n原因分析：___\n改进方案：___\n使用的核心驱动力：___"
          },
          "reflection": "完成漏斗图后，你觉得最大的增长机会在哪里？",
          "noteTemplate": {
            "sections": [
              {
                "title": "AARRR模型核心要点",
                "placeholder": "用自己的话总结AARRR五层漏斗..."
              },
              {
                "title": "八角行为分析法核心要点",
                "placeholder": "记录对你最有启发的2-3个驱动力..."
              },
              {
                "title": "最佳案例启发",
                "placeholder": "哪个案例对你最有启发？为什么？"
              },
              {
                "title": "行动计划",
                "placeholder": "接下来你打算在工作中尝试什么？"
              }
            ]
          }
        }
      ]
    },
    {
      "day": 2,
      "title": "多邻国增长策略",
      "subtitle": "Duolingo 350%增长加速案例",
      "emoji": "🦉",
      "source": "Jorge Mazal - How Duolingo reignited user growth (中英对照)",
      "units": [
        {
          "id": "d2u1",
          "time": "导读与框架",
          "theme": "Duolingo三阶段增长策略",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 速览", "full": "📖 详读" },
          "brief": "<h3>🔄 Day1 回顾</h3><p>昨天我们学习了 <strong>AARRR漏斗模型</strong> 和 <strong>八角行为分析法</strong>。今天我们看一个真实案例——多邻国如何将DAU增长4.5倍。</p><hr><h3>🦉 多邻国增长策略核心总结</h3><p>2017年底，多邻国DAU增长放缓至个位数。前CPO Jorge Mazal带领团队通过三个阶段实现了<strong>350%的增长加速</strong>。</p><h4>第一阶段：增加游戏化</h4><ul><li>从手游Gardenscapes获取灵感</li><li>推出<strong>排行榜（Leaderboards）</strong>——借鉴游戏的竞争机制</li><li>排行榜带来DAU 17%增长，是公司最大的留存杠杆之一</li><li>关键经验：先从其他产品借鉴成功机制，再优化适配</li></ul><h4>第二阶段：优化推送通知</h4><ul><li>重新聚焦推送通知（Push Notifications）</li><li>从护行为（保护用户连续打卡记录）的角度设计推送</li><li>建立A/B测试体系，持续优化推送文案和时机</li><li>推送成为DAU增长的<strong>最大单一驱动力</strong></li></ul><h4>第三阶段：连续打卡（Streaks）</h4><ul><li>连续打卡从「附属功能」变为<strong>核心留存机制</strong></li><li>增加打卡保护、好友打卡提醒等社交功能</li><li>「害怕失去」心理驱动用户持续活跃</li></ul><hr><h3>🔗 与AARRR框架的映射</h3><table><tr><th>策略</th><th>AARRR层</th><th>八角驱动力</th></tr><tr><td>排行榜</td><td>留存+激活</td><td>成就+社交</td></tr><tr><td>推送通知</td><td>留存</td><td>亏损+使命</td></tr><tr><td>连续打卡</td><td>留存</td><td>亏损+拥有</td></tr></table><hr><h3>💡 一句话总结</h3><p><em>多邻国的增长奇迹 = 游戏化留存（排行榜）× 智能推送 × 连续打卡的「损失厌恶」驱动</em></p>",
          "fullContentKey": "day2_part1",
          "keyPoints": [
            "多邻国2018年DAU增长放缓至个位数，通过产品驱动实现4.5倍增长",
            "第一阶段：排行榜——从手游借鉴竞争机制，DAU提升17%",
            "第二阶段：推送通知重新聚焦——成为最大单一增长驱动力",
            "第三阶段：连续打卡——利用损失厌恶心理驱动留存",
            "增长模型（CURR）：Current Users × Retention Rate"
          ],
          "outline": [
            "Day1回顾：AARRR + 八角行为分析",
            "多邻国增长背景",
            "三阶段增长策略详解",
            "与AARRR框架的映射"
          ],
          "review": {
            "title": "Day1 核心要点回顾",
            "points": [
              "AARRR漏斗：获取→激活→留存→收入→推荐",
              "八角行为分析法：8大心理驱动力",
              "两个框架结合：每层漏斗对应不同驱动力"
            ]
          },
          "reflection": "多邻国的三个策略中，哪个对你的产品最有参考价值？"
        },
        {
          "id": "d2u2",
          "time": "策略精读",
          "theme": "排行榜+推送+打卡策略详解（中英对照）",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 核心摘要", "full": "📖 完整原文" },
          "brief": "<h3>📖 策略精读概览</h3><p>本单元深入三大增长向量的具体实施细节（中英对照）：</p><h4>🏆 排行榜向量</h4><ul><li>7个联赛层级的进阶系统设计</li><li>每周竞争周期的重置机制</li><li>升级/降级的社交压力驱动</li><li>DAU提升17%的数据验证</li></ul><h4>🔔 推送通知向量</h4><ul><li>从轰炸式推送到精准行为触发</li><li>护行为（Streak Protection）角度的推送设计</li><li>A/B测试体系的持续优化</li><li>成为最大单一DAU增长驱动力</li></ul><h4>🔥 连续打卡向量</h4><ul><li>Streak Freeze（打卡保护）机制</li><li>好友打卡提醒的社交功能</li><li>损失厌恶心理的深度运用</li></ul><h4>📊 CURR增长模型</h4><ul><li>Current Users × Retention Rate = 核心增长方程</li><li>从新用户获取转向现有用户留存的思维转变</li></ul><hr><h3>💡 核心洞察</h3><p><em>留存是增长的核心杠杆——多邻国通过聚焦现有用户留存而非新用户获取实现了最大增长。</em></p>",
          "fullContentKey": "day2_part2",
          "keyPoints": [
            "排行榜设计：7个联赛层级，竞争+社交驱动留存",
            "推送通知：从轰炸式推送到精准行为触发",
            "连续打卡：streak freeze、好友提醒等社交玩法",
            "CURR增长模型：Current Users Retention Rate",
            "组织变革：从功能团队到增长团队的转型"
          ],
          "outline": [
            "排行榜向量详解",
            "推送通知策略重构",
            "连续打卡机制优化",
            "CURR增长模型与组织变革"
          ],
          "reflection": "多邻国的推送通知策略和你公司目前的推送策略有什么不同？"
        },
        {
          "id": "d2u3",
          "time": "实践与总结",
          "theme": "笔记 + 留存实验设计",
          "duration": "20分钟",
          "brief": "<h3>📝 今日笔记模板</h3><p>整理多邻国增长策略的核心洞察：</p>",
          "keyPoints": [
            "总结多邻国三阶段增长策略的核心逻辑",
            "分析哪些策略可以迁移到你的产品",
            "设计一个留存实验方案",
            "定义实验的成功指标和预期效果",
            "制定2周内可执行的实验计划"
          ],
          "outline": [
            "填写结构化笔记",
            "映射可借鉴策略",
            "设计留存实验",
            "制定执行计划"
          ],
          "practice": {
            "title": "设计一个留存实验方案",
            "description": "参照多邻国的游戏化/推送/连续打卡策略，为你的产品设计1个留存实验方案。",
            "tasks": [
              {
                "step": 1,
                "title": "选择策略方向",
                "prompt": "从游戏化竞争（排行榜）、智能推送、连续行为激励（打卡/签到）中选择一个最适合你产品的方向"
              },
              {
                "step": 2,
                "title": "定义实验假设",
                "prompt": "用「如果我们___，那么___指标会提升___%」的格式写出你的实验假设"
              },
              {
                "step": 3,
                "title": "设计具体方案",
                "prompt": "详细描述功能设计：触发条件、用户看到什么、预期行为变化"
              },
              {
                "step": 4,
                "title": "制定执行计划",
                "prompt": "列出实验的成功指标、实验周期、样本量和上线步骤"
              }
            ],
            "outputTemplate": "实验名称：___\n策略方向：□游戏化竞争 □智能推送 □连续行为激励\n\n实验假设：如果我们___，那么___会提升___%\n\n功能设计：\n  触发条件：___\n  用户看到：___\n  预期行为：___\n\n成功指标：___\n实验周期：___天\n预计样本量：___人\n\n执行步骤：\n1. ___\n2. ___\n3. ___"
          },
          "reflection": "这个实验最大的风险是什么？你如何降低风险？",
          "noteTemplate": {
            "sections": [
              {
                "title": "多邻国增长策略核心洞察",
                "placeholder": "三阶段策略中，你认为最关键的是哪个？为什么？"
              },
              {
                "title": "可迁移到我产品的策略",
                "placeholder": "哪些策略可以直接或改编后用到你的产品中？"
              },
              {
                "title": "推送通知优化思路",
                "placeholder": "你产品当前的推送策略有什么可以改进的？"
              },
              {
                "title": "行动计划",
                "placeholder": "本周你准备先做什么？"
              }
            ]
          }
        }
      ]
    },
    {
      "day": 3,
      "title": "PMF层级框架·上篇",
      "subtitle": "Product-Market Fit 不是黑箱",
      "emoji": "🎯",
      "source": "First Round Review - Levels of Product-Market Fit (中英对照)",
      "units": [
        {
          "id": "d3u1",
          "time": "导读与框架",
          "theme": "PMF层级模型与核心方法论",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 速览", "full": "📖 详读" },
          "brief": "<h3>🔄 Day1-2 回顾</h3><p>Day1我们学了<strong>AARRR+八角行为分析</strong>框架，Day2看了<strong>多邻国350%增长</strong>的实战案例。今天我们向上游走——在做增长之前，先确认产品是否达到了<strong>PMF（产品市场契合度）</strong>。</p><hr><h3>🎯 PMF层级框架核心总结</h3><p>来自First Round Capital的实战框架：PMF不是0/1的二元状态，而是一个<strong>可量化、可分层</strong>的渐进过程。</p><h4>四个PMF层级</h4><ol><li><strong>层级1：初生（Nascent）</strong><br>有早期信号，少数客户有强需求，但尚未验证可复制性</li><li><strong>层级2：发展中（Developing）</strong><br>客户数量增加，开始看到重复的需求模式，但效率仍低</li><li><strong>层级3：强劲（Strong）</strong><br>需求明确且可预测，销售效率提高，客户主动推荐</li><li><strong>层级4：极致（Extreme）</strong><br>产品定义品类，客户抢着买，供不应求</li></ol><h4>三个评估维度</h4><table><tr><th>维度</th><th>含义</th><th>关键问题</th></tr><tr><td>需求（Demand）</td><td>市场对产品的渴望程度</td><td>客户是否主动寻找解决方案？</td></tr><tr><td>满意度（Satisfaction）</td><td>客户使用后的满意程度</td><td>客户会推荐给同行吗？</td></tr><tr><td>效率（Efficiency）</td><td>获客和服务的效率</td><td>CAC是否在合理范围？</td></tr></table><h4>First Round 4P框架</h4><p>在通往PMF的道路上，调整这四个杠杆：</p><ul><li><strong>Persona</strong>（目标客户画像）</li><li><strong>Problem</strong>（解决的问题）</li><li><strong>Promise</strong>（价值承诺）</li><li><strong>Product</strong>（产品方案）</li></ul><hr><h3>💡 一句话总结</h3><p><em>PMF是一个分层渐进的过程，通过需求×满意度×效率三个维度评估，用4P杠杆持续调优。</em></p>",
          "fullContentKey": "day3_part1",
          "keyPoints": [
            "PMF不是0/1的二元状态，而是4个层级的渐进过程",
            "四个层级：初生→发展中→强劲→极致",
            "三个评估维度：需求、满意度、效率",
            "4P框架：Persona×Problem×Promise×Product",
            "以销售为主导的B2B公司可以系统化地提高找到PMF的几率"
          ],
          "outline": [
            "Day1-2回顾",
            "PMF的传统认知误区",
            "四个PMF层级详解",
            "三维度评估体系",
            "4P调优框架"
          ],
          "review": {
            "title": "Day1-2 核心要点回顾",
            "points": [
              "Day1: AARRR漏斗 + 八角行为分析法",
              "Day2: 多邻国三阶段增长策略（游戏化→推送→打卡）",
              "增长的前提：产品需要先达到PMF"
            ]
          },
          "reflection": "你觉得你的产品目前在PMF的哪个层级？"
        },
        {
          "id": "d3u2",
          "time": "案例精读",
          "theme": "PMF层级1+2详解（中英对照）",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 核心摘要", "full": "📖 完整原文" },
          "brief": "<h3>📖 案例精读概览</h3><p>本单元深入PMF的前两个层级（中英对照），通过真实创业案例理解每个层级的特征与基准：</p><h4>🌱 层级1：初生（Nascent）</h4><ul><li>创始人的主要工作：为3-5个客户找到值得解决的问题</li><li>需求信号：客户主动表达紧急需求</li><li>满意度标准：客户愿意容忍粗糙产品</li><li>效率指标：创始人亲自销售也能成交</li><li><strong>案例</strong>：Ironclad通过实地拜访客户解锁具体产品方向</li></ul><h4>📈 层级2：发展中（Developing）</h4><ul><li>核心特征：需求模式开始可重复</li><li>客户数量从个位数增长到数十个</li><li>开始建立销售流程但效率仍低</li><li>NPS分数开始可测量（目标>40）</li><li><strong>案例</strong>：Verkada深入到极致，快速行动打动客户</li></ul><h4>⚠️ 层级2的警告信号</h4><ul><li>过度依赖创始人个人关系获客</li><li>销售周期过长，漏斗后期丢单</li><li>开始担心燃烧倍数（Burn Multiple）</li></ul><hr><h3>💡 核心洞察</h3><p><em>PMF初期的关键不是规模，而是找到可重复的需求模式——从「创始人推动」转向「产品拉动」。</em></p>",
          "fullContentKey": "day3_part2",
          "keyPoints": [
            "层级1（初生）：5-10个早期客户，强需求信号但未验证规模",
            "层级2（发展中）：需求模式可重复，但效率仍需优化",
            "Ironclad案例：通过实地拜访客户解锁更具体的产品",
            "Verkada案例：深入到极致，快速行动以打动客户",
            "警告信号：过度依赖创始人、销售周期过长、燃烧倍数过高"
          ],
          "outline": [
            "层级1：初生 - 特征与基准",
            "层级1案例：Ironclad、Plaid",
            "层级2：发展中 - 特征与基准",
            "层级2案例：Verkada",
            "层级2警告信号"
          ],
          "reflection": "文中哪个创业案例的PMF探索过程与你的经历最相似？"
        },
        {
          "id": "d3u3",
          "time": "实践与总结",
          "theme": "笔记 + PMF层级评估",
          "duration": "20分钟",
          "brief": "<h3>📝 今日笔记模板</h3><p>整理PMF层级框架的核心洞察：</p>",
          "keyPoints": [
            "评估你的产品当前处于PMF的哪个层级",
            "从需求、满意度、效率三个维度打分",
            "列出进入下一层级需要验证的3个假设",
            "用4P框架分析需要调整的杠杆",
            "制定一个2周内的验证计划"
          ],
          "outline": [
            "填写结构化笔记",
            "PMF层级自评",
            "验证假设设计",
            "制定验证计划"
          ],
          "practice": {
            "title": "评估你的产品PMF层级",
            "description": "评估你的产品当前处于PMF哪个层级，并制定进入下一层级的验证计划。",
            "tasks": [
              {
                "step": 1,
                "title": "PMF层级自评",
                "prompt": "根据四个层级的特征描述，判断你的产品目前最接近哪个层级。列出支撑你判断的3个关键证据。"
              },
              {
                "step": 2,
                "title": "三维度评分",
                "prompt": "从需求（1-10）、满意度（1-10）、效率（1-10）三个维度给你的产品打分，并说明理由"
              },
              {
                "step": 3,
                "title": "识别下一层级的差距",
                "prompt": "对照下一个层级的基准指标，列出你需要验证的3个核心假设"
              },
              {
                "step": 4,
                "title": "4P调优方案",
                "prompt": "在Persona、Problem、Promise、Product四个杠杆中，你认为当前最需要调整的是哪个？具体怎么调？"
              }
            ],
            "outputTemplate": "产品名称：___\n当前PMF层级：□初生 □发展中 □强劲 □极致\n判断依据：\n1. ___\n2. ___\n3. ___\n\n三维度评分：\n  需求：___/10（理由：___）\n  满意度：___/10（理由：___）\n  效率：___/10（理由：___）\n\n进入下一层级需验证的假设：\n1. ___\n2. ___\n3. ___\n\n4P优先调整：___\n具体方案：___\n\n2周验证计划：\n第1周：___\n第2周：___"
          },
          "reflection": "上篇学完后，你对PMF的理解有什么变化？",
          "noteTemplate": {
            "sections": [
              {
                "title": "PMF层级框架核心洞察",
                "placeholder": "PMF层级模型中最让你意外的洞察是什么？"
              },
              {
                "title": "我的产品PMF现状",
                "placeholder": "你的产品处于哪个层级？有哪些信号支撑你的判断？"
              },
              {
                "title": "层级1-2的关键启发",
                "placeholder": "初生和发展中阶段，哪些案例对你最有启发？"
              },
              {
                "title": "下一步行动",
                "placeholder": "明天继续学习层级3-4前，你想重点关注什么？"
              }
            ]
          }
        }
      ]
    },
    {
      "day": 4,
      "title": "PMF层级框架·下篇",
      "subtitle": "从强劲到极致的PMF之路",
      "emoji": "🚀",
      "source": "First Round Review - Levels of Product-Market Fit (中英对照)",
      "units": [
        {
          "id": "d4u1",
          "time": "导读与框架",
          "theme": "层级3（强劲）特征与基准",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 速览", "full": "📖 详读" },
          "brief": "<h3>🔄 Day3 回顾</h3><p>昨天我们学习了PMF层级框架的上篇：<strong>四层级模型</strong>、<strong>三维度评估</strong>和<strong>4P调优框架</strong>，深入了解了层级1（初生）和层级2（发展中）的特征与案例。</p><p>今天我们继续探索PMF的高阶层级——<strong>层级3（强劲）</strong>和<strong>层级4（极致）</strong>。</p><hr><h3>💪 层级3：强劲（Strong）PMF</h3><p>根据First Round Capital的经验，<strong>大多数初创公司从未达到这个层级</strong>。如果你达到了强劲的PMF，你的公司有可能非常有价值。</p><h4>核心特征</h4><ul><li><strong>需求</strong>：客户主动寻找你的产品，入站线索（Inbound）开始显著增长</li><li><strong>满意度</strong>：NPS > 50，客户不仅满意还会主动推荐</li><li><strong>效率</strong>：销售周期缩短，CAC回收期在合理范围，毛利率健康</li></ul><h4>关键基准</h4><table><tr><th>指标</th><th>基准</th></tr><tr><td>净收入留存率（NRR）</td><td>> 120%</td></tr><tr><td>年增长率</td><td>3x+</td></tr><tr><td>毛利率</td><td>> 70%</td></tr><tr><td>魔力数字（Magic Number）</td><td>> 0.5</td></tr></table><h4>⚠️ 层级3的警告信号</h4><ul><li>推荐和口碑增长开始停滞</li><li>增长正在放缓（从3x降到2x）</li><li>需要更多资源维持同等增速</li></ul><hr><h3>💡 一句话总结</h3><p><em>强劲PMF意味着产品开始「拉动」增长——客户主动找你，而不是你追着客户跑。</em></p>",
          "fullContentKey": "day4_part1",
          "keyPoints": [
            "大多数初创公司从未达到层级3",
            "核心标志：入站线索显著增长，客户主动推荐",
            "NRR > 120%、年增长3x+、毛利率 > 70%",
            "警告信号：口碑停滞、增长放缓、资源需求增加",
            "从「推动增长」转向「增长自驱动」的转折点"
          ],
          "outline": [
            "Day3回顾：PMF四层级+层级1-2",
            "层级3（强劲）核心特征",
            "三维度基准指标",
            "层级3警告信号",
            "从层级2到层级3的跨越"
          ],
          "review": {
            "title": "Day3 核心要点回顾",
            "points": [
              "PMF不是0/1，而是4个层级的渐进过程",
              "层级1（初生）：3-5个客户，强需求但未验证规模",
              "层级2（发展中）：需求可重复但效率仍低",
              "4P框架：Persona×Problem×Promise×Product"
            ]
          },
          "reflection": "你见过哪些产品成功达到了「强劲PMF」？它们有什么共同特征？"
        },
        {
          "id": "d4u2",
          "time": "极致PMF精读",
          "theme": "层级4（极致）PMF详解（中英对照）",
          "duration": "20分钟",
          "toggleLabels": { "brief": "⚡ 核心摘要", "full": "📖 完整原文" },
          "brief": "<h3>📖 极致PMF精读概览</h3><p>本单元深入PMF的最高层级——层级4（极致），探索那些定义品类的伟大产品是如何实现极致PMF的。</p><h4>🏅 层级4：极致（Extreme）PMF</h4><p>这是每个初创公司应该追求的目标：</p><ul><li><strong>需求</strong>：供不应求，客户排队等待</li><li><strong>满意度</strong>：NPS > 70，产品成为行业标准</li><li><strong>效率</strong>：飞轮效应启动，增长边际成本递减</li></ul><h4>极致PMF的标志性特征</h4><ul><li>产品开始<strong>定义品类</strong>（Category Defining）</li><li>品牌名=品类名（如Uber、Zoom）</li><li>可重复性在赢得客户方面闪耀</li><li>客户不仅购买，还成为你的推广者</li></ul><h4>关键基准</h4><table><tr><th>指标</th><th>基准</th></tr><tr><td>净收入留存率（NRR）</td><td>> 150%</td></tr><tr><td>年增长率</td><td>4x+</td></tr><tr><td>毛利率</td><td>> 75%</td></tr><tr><td>客户获取</td><td>主要靠口碑和入站</td></tr></table><h4>品牌的转折点</h4><p>这也是公司品牌通常开始变化的阶段。随着更广泛的认可，你可能正处于成为品类代名词的边缘。</p><hr><h3>💡 核心洞察</h3><p><em>极致PMF不是终点，而是一种状态——需要持续维护和进化，否则市场变化会将你拉回低层级。</em></p>",
          "fullContentKey": "day4_part2",
          "keyPoints": [
            "层级4特征：供不应求、NPS>70、品牌=品类",
            "可重复性：赢得客户的能力高度一致",
            "飞轮效应：增长的边际成本递减",
            "品牌转折点：从产品品牌到品类定义者",
            "极致PMF需要持续维护，市场变化可能拉回低层级"
          ],
          "outline": [
            "层级4（极致）核心特征",
            "三维度达到极致的表现",
            "标志性特征与案例",
            "品牌的转折点",
            "PMF的动态性与持续维护"
          ],
          "reflection": "你认为目前哪些公司处于极致PMF阶段？它们的护城河是什么？"
        },
        {
          "id": "d4u3",
          "time": "课程总结",
          "theme": "4天知识整合 + 综合实践",
          "duration": "20分钟",
          "brief": "<h3>📝 课程总结笔记模板</h3><p>整理4天学习的核心知识体系：</p>",
          "keyPoints": [
            "Day1 AARRR×八角 → Day2 多邻国实战 → Day3-4 PMF层级完整框架",
            "增长的前提是PMF，PMF是渐进的4个层级",
            "增长策略需匹配PMF层级：初期验证 vs 规模化增长",
            "为你的产品制定完整增长路线图",
            "综合运用4天所学的所有框架"
          ],
          "outline": [
            "4天知识体系回顾",
            "PMF评估 → 增长策略选择",
            "综合实践：增长路线图",
            "课程总结与下一步"
          ],
          "practice": {
            "title": "为你的产品制定完整增长路线图",
            "description": "综合运用4天所学，为你的产品（或选定产品）制定一份完整的增长路线图。这是对整个课程的综合实践。",
            "tasks": [
              {
                "step": 1,
                "title": "PMF层级评估",
                "prompt": "用Day3-4学到的框架，评估你的产品当前PMF层级。列出3个支撑证据和对应的三维度评分。"
              },
              {
                "step": 2,
                "title": "增长策略选择",
                "prompt": "根据PMF层级，从Day1-2学到的策略中选择最适合当前阶段的增长策略。如果在层级1-2，重点应在验证而非规模化。"
              },
              {
                "step": 3,
                "title": "AARRR漏斗+八角驱动力设计",
                "prompt": "为选定的增长策略，设计AARRR漏斗中关键层的游戏化方案，标注使用的八角行为驱动力。"
              },
              {
                "step": 4,
                "title": "留存实验方案",
                "prompt": "参照多邻国案例，设计1个具体的留存实验。包括：实验假设、功能设计、成功指标、执行计划。"
              }
            ],
            "outputTemplate": "=== 增长路线图 ===\n\n产品名称：___\n\n【第一步：PMF评估】\n当前层级：□初生 □发展中 □强劲 □极致\n三维度评分：需求___/10  满意度___/10  效率___/10\n判断依据：___\n\n【第二步：增长策略选择】\n核心策略方向：___\n选择理由（基于PMF层级）：___\n\n【第三步：AARRR×八角设计】\n重点漏斗层：___\n游戏化方案：___\n使用的驱动力：___\n\n【第四步：留存实验】\n实验假设：如果___，那么___提升___%\n功能设计：___\n成功指标：___\n执行周期：___天\n\n【下一步行动】\n本周开始做的第一件事：___"
          },
          "reflection": "4天学习后，你对增长运营最重要的新认知是什么？你会如何把这些知识应用到实际工作中？",
          "noteTemplate": {
            "sections": [
              {
                "title": "4天课程最重要的3个认知",
                "placeholder": "回顾整个课程，对你冲击最大的3个洞察是什么？"
              },
              {
                "title": "PMF层级框架完整理解",
                "placeholder": "层级3-4的学习让你对PMF有了什么新的理解？"
              },
              {
                "title": "增长策略与PMF的关系",
                "placeholder": "不同PMF层级应该采用什么样的增长策略？"
              },
              {
                "title": "我的行动计划",
                "placeholder": "课程结束后，你的第一个行动是什么？制定一个具体的时间表。"
              }
            ]
          }
        }
      ]
    }
  ]
};

// ========================================
// 状态管理
// ========================================
const state = {
    currentDay: 1,
    currentUnit: 0,
    viewMode: 'brief',
    completedUnits: JSON.parse(localStorage.getItem('completedUnits') || '[]'),
    lastAccessed: localStorage.getItem('lastAccessed') || null,
    notes: JSON.parse(localStorage.getItem('courseNotes') || '{}')
};

function saveState() {
    localStorage.setItem('completedUnits', JSON.stringify(state.completedUnits));
    localStorage.setItem('lastAccessed', new Date().toISOString());
}

function saveNotes() {
    localStorage.setItem('courseNotes', JSON.stringify(state.notes));
}

function getDayData(dayNumber) {
    return courseData.days.find(function(d) { return d.day === dayNumber; });
}

function getUnitData(dayNumber, unitIndex) {
    const day = getDayData(dayNumber);
    return day ? day.units[unitIndex] : null;
}

function isUnitCompleted(day, unitIndex) {
    return state.completedUnits.indexOf('d' + day + 'u' + (unitIndex + 1)) > -1;
}

function toggleUnitComplete(day, unitIndex) {
    const unitId = 'd' + day + 'u' + (unitIndex + 1);
    const index = state.completedUnits.indexOf(unitId);
    if (index > -1) {
        state.completedUnits.splice(index, 1);
    } else {
        state.completedUnits.push(unitId);
    }
    saveState();
}

function getDayProgress(dayNumber) {
    const day = getDayData(dayNumber);
    if (!day) return 0;
    const completed = day.units.filter(function(_, i) { return isUnitCompleted(dayNumber, i); }).length;
    return Math.round((completed / day.units.length) * 100);
}

function getTotalProgress() {
    const totalUnits = courseData.days.reduce(function(sum, day) { return sum + day.units.length; }, 0);
    return Math.round((state.completedUnits.length / totalUnits) * 100);
}

function getLastAccessedPosition() {
    if (!state.lastAccessed) return { day: 1, unit: 0 };
    for (let i = 0; i < courseData.days.length; i++) {
        const day = courseData.days[i];
        for (let j = 0; j < day.units.length; j++) {
            if (!isUnitCompleted(day.day, j)) {
                return { day: day.day, unit: j };
            }
        }
    }
    return { day: 1, unit: 0 };
}

// ========================================
// 首页渲染
// ========================================
function renderHomePage() {
    const pathContainer = document.getElementById('path-container');
    if (!pathContainer) return;

    const completedDays = courseData.days.filter(function(d) { return getDayProgress(d.day) === 100; }).length;
    document.getElementById('completed-text').textContent = '已完成 ' + completedDays + '/' + courseData.totalDays + ' 天';
    document.getElementById('progress-percent').textContent = getTotalProgress() + '%';
    document.getElementById('progress-fill').style.width = getTotalProgress() + '%';

    const hearts = document.getElementById('progress-hearts');
    const totalHearts = courseData.totalDays;
    const filledHearts = completedDays;
    let heartsHtml = '';
    for (let i = 0; i < totalHearts; i++) {
        heartsHtml += '<span class="heart">' + (i < filledHearts ? '💖' : '🤍') + '</span>';
    }
    hearts.innerHTML = heartsHtml;

    let pathHtml = '';
    for (let i = 0; i < courseData.days.length; i++) {
        const day = courseData.days[i];
        const progress = getDayProgress(day.day);
        const isCompleted = progress === 100;
        const isActive = progress > 0 && progress < 100;
        const statusClass = isCompleted ? 'completed' : isActive ? 'active' : 'locked';
        const statusIcon = isCompleted ? '✅' : isActive ? '⭐' : '🔒';

        let dotsHtml = '';
        for (let j = 0; j < day.units.length; j++) {
            dotsHtml += '<span class="day-dot ' + (isUnitCompleted(day.day, j) ? 'completed' : '') + '"></span>';
        }

        pathHtml += '<div class="path-day" onclick="goToDay(' + day.day + ')">' +
            '<div class="day-circle ' + statusClass + '">' + day.emoji +
            (!isCompleted && !isActive ? '' : '<span class="day-status">' + statusIcon + '</span>') +
            '</div>' +
            '<div class="day-label">Day ' + day.day + '</div>' +
            '<div class="day-title-small" style="font-size: 11px; color: #888; margin-top: 5px; max-width: 100px; text-align: center;">' + day.title + '</div>' +
            '<div class="day-dots">' + dotsHtml + '</div>' +
            '</div>';
    }
    pathContainer.innerHTML = pathHtml;

    const continueBtn = document.getElementById('continue-btn');
    if (continueBtn) {
        const pos = getLastAccessedPosition();
        continueBtn.onclick = function() {
            window.location.href = 'day.html?day=' + pos.day + '&unit=' + pos.unit;
        };
    }
}

function goToDay(day) {
    window.location.href = 'day.html?day=' + day + '&unit=0';
}

// ========================================
// 日页面渲染
// ========================================
function renderDayPage() {
    const params = new URLSearchParams(window.location.search);
    state.currentDay = parseInt(params.get('day')) || 1;
    state.currentUnit = parseInt(params.get('unit')) || 0;

    const dayData = getDayData(state.currentDay);
    if (!dayData) return;

    document.getElementById('day-badge').textContent = 'DAY ' + dayData.day;
    document.getElementById('day-title').textContent = dayData.title;
    document.getElementById('day-subtitle').textContent = dayData.subtitle;

    // Generate other days dropdown (only needs to run once per page load)
    const dropdown = document.getElementById('other-days-dropdown');
    const otherDays = courseData.days.filter(function(d) { return d.day !== state.currentDay; });
    let dropdownHtml = '';
    for (let i = 0; i < otherDays.length; i++) {
        const d = otherDays[i];
        dropdownHtml += '<a href="day.html?day=' + d.day + '&unit=0" class="dropdown-item">' +
            '<span class="dropdown-emoji">' + d.emoji + '</span>' +
            '<div class="dropdown-text">' +
            '<div class="dropdown-title">Day ' + d.day + ': ' + d.title + '</div>' +
            '<div class="dropdown-subtitle">' + d.subtitle + '</div>' +
            '</div>' +
            '</a>';
    }
    dropdown.innerHTML = dropdownHtml;

    // Update "other days" button text dynamically
    const otherDaysBtn = document.getElementById('other-days-btn');
    const otherDayNums = otherDays.map(function(d) { return d.day; });
    otherDaysBtn.querySelector('span:first-child').textContent = '其他天数 (Day ' + otherDayNums.join(', ') + ')';
    otherDaysBtn.onclick = function() {
        dropdown.classList.toggle('show');
    };

    updateSidebar();
    renderUnitContent();

    // Preload current day's content script for instant "详读" switch
    loadDayContent(state.currentDay);
}

function updateSidebar() {
    const dayData = getDayData(state.currentDay);
    if (!dayData) return;

    document.getElementById('day-completion').textContent =
        dayData.units.filter(function(_, i) { return isUnitCompleted(dayData.day, i); }).length + '/3 已完成';
    document.getElementById('day-progress-fill').style.width = getDayProgress(dayData.day) + '%';

    const unitsList = document.getElementById('units-list');
    const timeEmojis = { '导读与框架': '📋', '案例精读': '📖', '策略精读': '📖', '极致PMF精读': '📖', '实践与总结': '✏️', '课程总结': '🎓' };

    let unitsHtml = '';
    for (let i = 0; i < dayData.units.length; i++) {
        const isCompleted = isUnitCompleted(dayData.day, i);
        const isActive = i === state.currentUnit;
        const unit = dayData.units[i];

        unitsHtml += '<div class="unit-item ' + (isActive ? 'active' : '') + ' ' + (isCompleted ? 'completed' : '') + '" ' +
            'onclick="goToUnit(' + i + ')">' +
            '<div class="unit-icon">' + (timeEmojis[unit.time] || '📄') + '</div>' +
            '<div class="unit-details">' +
            '<h4>Unit ' + (i + 1) + ': ' + unit.theme + '</h4>' +
            '<p>' + unit.duration + ' · ' + (isCompleted ? '已完成' : isActive ? '进行中' : '未开始') + '</p>' +
            '</div>' +
            (isCompleted ? '<span class="unit-check">✓</span>' : '') +
            '</div>';
    }
    unitsList.innerHTML = unitsHtml;
}

// ========================================
// 内容渲染
// ========================================
async function renderUnitContent() {
    const unit = getUnitData(state.currentDay, state.currentUnit);
    if (!unit) return;

    document.getElementById('unit-title').textContent = unit.time + ' · ' + unit.theme;
    document.getElementById('duration').innerHTML = '⏱ ' + unit.duration;
    document.getElementById('theme').textContent = unit.theme;

    // Show/hide toggle based on unit type
    const toggleContainer = document.querySelector('.view-toggle');
    if (toggleContainer) {
        const isPracticeUnit = unit.time === '实践与总结' || unit.time === '课程总结';
        if (isPracticeUnit) {
            toggleContainer.style.display = 'none';
        } else {
            toggleContainer.style.display = 'flex';
            // Set dynamic toggle labels
            const briefBtn = document.getElementById('brief-btn');
            const fullBtn = document.getElementById('full-btn');
            if (unit.toggleLabels) {
                briefBtn.innerHTML = '<span>' + unit.toggleLabels.brief + '</span>';
                fullBtn.innerHTML = '<span>' + unit.toggleLabels.full + '</span>';
            }
        }
    }

    const cardBody = document.getElementById('card-body');

    const isPracticeUnit = unit.time === '实践与总结' || unit.time === '课程总结';
    if (isPracticeUnit) {
        renderPracticeUnit(cardBody, unit);
    } else if (state.viewMode === 'brief') {
        renderBriefContent(cardBody, unit);
    } else {
        await renderFullContent(cardBody, unit);
    }

    updateNavigation();
}

function renderBriefContent(cardBody, unit) {
    let html = '';

    // Review section (if available)
    if (unit.review) {
        html += '<div class="review-block fade-in">';
        html += '<h3>🔄 ' + unit.review.title + '</h3>';
        html += '<ul>';
        for (const point of unit.review.points) {
            html += '<li>' + point + '</li>';
        }
        html += '</ul></div>';
        html += '<div style="height: 20px;"></div>';
    }

    // Brief content (already HTML formatted)
    html += '<div class="brief-content fade-in">' + unit.brief + '</div>';

    // Key points
    html += '<div style="height: 25px;"></div>';
    html += '<div class="key-points fade-in">';
    html += '<h3>💡 核心要点（' + unit.duration + '精读）</h3>';
    html += '<ul>';
    for (const kp of unit.keyPoints) {
        html += '<li>' + kp + '</li>';
    }
    html += '</ul></div>';

    // Outline
    html += '<div style="height: 20px;"></div>';
    html += '<div class="outline-block fade-in">';
    html += '<h4>📋 本单元大纲</h4>';
    html += '<ol>';
    for (const item of unit.outline) {
        html += '<li>' + item + '</li>';
    }
    html += '</ol></div>';

    // Reflection
    if (unit.reflection) {
        html += '<div style="height: 20px;"></div>';
        html += '<div class="reflection-block fade-in">';
        html += '<h4>💭 思考练习</h4>';
        html += '<p>' + unit.reflection + '</p>';
        html += '</div>';
    }

    cardBody.innerHTML = html;
}

// Cache for loaded day content scripts
const loadedDayScripts = {};

function loadDayContent(dayNum) {
    if (loadedDayScripts[dayNum]) return loadedDayScripts[dayNum];
    loadedDayScripts[dayNum] = new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.src = 'day' + dayNum + '-content.js';
        script.onload = function() { resolve(); };
        script.onerror = function() { reject(new Error('Failed to load day' + dayNum + '-content.js')); };
        document.head.appendChild(script);
    });
    return loadedDayScripts[dayNum];
}

function getDayContentArticle(fullContentKey) {
    // fullContentKey is like "day1_part1" or "day3_part2"
    var match = fullContentKey.match(/^day(\d+)_(part[12])$/);
    if (!match) return null;
    var dayNum = match[1];
    var part = match[2];
    var dayContent = window['dayContent_' + dayNum];
    return dayContent ? dayContent[part] : null;
}

async function renderFullContent(cardBody, unit) {
    // Show loading spinner
    cardBody.innerHTML =
        '<div style="text-align: center; padding: 60px 20px;">' +
        '<div style="display: inline-block; width: 40px; height: 40px; border: 3px solid #ffb6c1; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>' +
        '<p style="margin-top: 20px; color: #888; font-size: 14px;">加载完整内容...</p>' +
        '</div>' +
        '<style>@keyframes spin { to { transform: rotate(360deg); } }</style>';

    // Dynamically load day content if needed
    if (unit.fullContentKey) {
        var dayNum = unit.fullContentKey.match(/^day(\d+)/);
        if (dayNum) {
            try {
                await loadDayContent(dayNum[1]);
            } catch (e) {
                // Fall through to fallback
            }
        }

        var articleHtml = getDayContentArticle(unit.fullContentKey);

        if (articleHtml) {
            let html = '';

            // Article header
            html += '<div class="article-intro fade-in">';
            html += '<h3>📖 ' + unit.time + '</h3>';
            html += '<p class="article-meta">来源：' + getDayData(state.currentDay).source + '</p>';
            html += '</div>';

            html += '<hr class="article-divider">';

            // Article content
            html += '<div class="article-body fade-in">' + articleHtml + '</div>';

            // Key points review
            html += '<hr class="article-divider">';
            html += '<div class="key-points fade-in">';
            html += '<h3>💡 核心要点回顾</h3>';
            html += '<ul>';
            for (const kp of unit.keyPoints) {
                html += '<li>' + kp + '</li>';
            }
            html += '</ul></div>';

            // Reflection
            if (unit.reflection) {
                html += '<div style="height: 20px;"></div>';
                html += '<div class="reflection-block fade-in">';
                html += '<h4>💭 思考练习</h4>';
                html += '<p>' + unit.reflection + '</p>';
                html += '</div>';
            }

            cardBody.innerHTML = html;
            return;
        }
    }

    // Fallback: render the brief content as HTML + key points
    let html = '<div class="brief-content fade-in">' + unit.brief + '</div>';

    html += '<div style="height: 25px;"></div>';
    html += '<div class="key-points fade-in">';
    html += '<h3>💡 核心要点</h3>';
    html += '<ul>';
    for (const kp of unit.keyPoints) {
        html += '<li>' + kp + '</li>';
    }
    html += '</ul></div>';

    if (unit.reflection) {
        html += '<div style="height: 20px;"></div>';
        html += '<div class="reflection-block fade-in">';
        html += '<h4>💭 思考练习</h4>';
        html += '<p>' + unit.reflection + '</p>';
        html += '</div>';
    }

    cardBody.innerHTML = html;
}

// ========================================
// 实践练习渲染
// ========================================
function renderPracticeUnit(cardBody, unit) {
    let html = '';

    // For Day4 Unit3 (课程总结), add a comprehensive review section
    if (state.currentDay === 4 && state.currentUnit === 2) {
        html += '<div class="review-block fade-in" style="margin-bottom: 25px;">';
        html += '<h3>🎓 4天知识体系回顾</h3>';
        html += '<table style="width:100%; border-collapse:collapse; margin: 15px 0;">';
        html += '<tr style="background:#FFE4A1;"><th style="padding:8px; text-align:left; border:1px solid #ddd;">天数</th><th style="padding:8px; text-align:left; border:1px solid #ddd;">主题</th><th style="padding:8px; text-align:left; border:1px solid #ddd;">核心框架</th></tr>';
        html += '<tr><td style="padding:8px; border:1px solid #ddd;">Day 1</td><td style="padding:8px; border:1px solid #ddd;">用户增长万能公式</td><td style="padding:8px; border:1px solid #ddd;">AARRR漏斗 × 八角行为分析法</td></tr>';
        html += '<tr><td style="padding:8px; border:1px solid #ddd;">Day 2</td><td style="padding:8px; border:1px solid #ddd;">多邻国增长策略</td><td style="padding:8px; border:1px solid #ddd;">游戏化 + 推送 + 打卡 + CURR模型</td></tr>';
        html += '<tr><td style="padding:8px; border:1px solid #ddd;">Day 3</td><td style="padding:8px; border:1px solid #ddd;">PMF层级·上篇</td><td style="padding:8px; border:1px solid #ddd;">四层级模型 + 三维度 + 4P框架 + 层级1-2</td></tr>';
        html += '<tr><td style="padding:8px; border:1px solid #ddd;">Day 4</td><td style="padding:8px; border:1px solid #ddd;">PMF层级·下篇</td><td style="padding:8px; border:1px solid #ddd;">层级3-4 + 综合应用</td></tr>';
        html += '</table>';
        html += '<h4>🔗 知识体系串联</h4>';
        html += '<p><strong>PMF评估</strong>（确认产品阶段）→ <strong>增长策略选择</strong>（匹配阶段的策略）→ <strong>AARRR×八角</strong>（设计具体方案）→ <strong>留存实验</strong>（验证与迭代）</p>';
        html += '</div>';
    }

    // Notes template section
    if (unit.noteTemplate) {
        html += '<div class="notes-section fade-in">';
        html += '<h3>📝 结构化笔记</h3>';
        html += '<p class="notes-hint">在下面的框中记录你的学习要点（内容会自动保存到本地）</p>';

        const noteKey = 'd' + state.currentDay;
        const savedNotes = state.notes[noteKey] || {};

        for (let i = 0; i < unit.noteTemplate.sections.length; i++) {
            const section = unit.noteTemplate.sections[i];
            const savedValue = savedNotes['note_' + i] || '';
            html += '<div class="note-field">';
            html += '<label>' + section.title + '</label>';
            html += '<textarea data-note-key="' + noteKey + '" data-note-index="' + i + '" ' +
                    'placeholder="' + section.placeholder + '">' + savedValue + '</textarea>';
            html += '</div>';
        }
        html += '</div>';
    }

    // Practice section
    if (unit.practice) {
        html += '<div style="height: 30px;"></div>';
        html += '<div class="practice-section fade-in">';
        html += '<div class="practice-header" onclick="togglePractice(this)">';
        html += '<h3>✏️ ' + unit.practice.title + '</h3>';
        html += '<span class="practice-toggle">展开 ▼</span>';
        html += '</div>';

        html += '<div class="practice-body" style="display: none;">';
        html += '<p class="practice-desc">' + unit.practice.description + '</p>';

        // Tasks
        for (const task of unit.practice.tasks) {
            html += '<div class="practice-task">';
            html += '<div class="task-step">步骤 ' + task.step + '</div>';
            html += '<h4>' + task.title + '</h4>';
            html += '<p>' + task.prompt + '</p>';
            html += '</div>';
        }

        // Output template
        if (unit.practice.outputTemplate) {
            html += '<div class="output-template">';
            html += '<h4>📋 输出模板</h4>';
            html += '<pre>' + unit.practice.outputTemplate + '</pre>';
            html += '</div>';
        }

        html += '</div>'; // practice-body
        html += '</div>'; // practice-section
    }

    // Reflection
    if (unit.reflection) {
        html += '<div style="height: 20px;"></div>';
        html += '<div class="reflection-block fade-in">';
        html += '<h4>💭 结课思考</h4>';
        html += '<p>' + unit.reflection + '</p>';
        html += '</div>';
    }

    cardBody.innerHTML = html;

    // Attach note save handlers
    const textareas = cardBody.querySelectorAll('textarea[data-note-key]');
    textareas.forEach(function(ta) {
        ta.addEventListener('input', function() {
            const key = ta.getAttribute('data-note-key');
            const index = ta.getAttribute('data-note-index');
            if (!state.notes[key]) state.notes[key] = {};
            state.notes[key]['note_' + index] = ta.value;
            saveNotes();
        });
    });
}

function togglePractice(header) {
    const body = header.nextElementSibling;
    const toggle = header.querySelector('.practice-toggle');
    if (body.style.display === 'none') {
        body.style.display = 'block';
        toggle.textContent = '收起 ▲';
    } else {
        body.style.display = 'none';
        toggle.textContent = '展开 ▼';
    }
}

// ========================================
// 导航
// ========================================
function updateNavigation() {
    const day = getDayData(state.currentDay);
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (state.currentUnit > 0) {
        const prevUnit = day.units[state.currentUnit - 1];
        document.getElementById('prev-unit').textContent = 'Unit ' + state.currentUnit + ': ' + prevUnit.theme;
        prevBtn.disabled = false;
        prevBtn.onclick = function() { goToUnit(state.currentUnit - 1); };
    } else {
        document.getElementById('prev-unit').textContent = '无';
        prevBtn.disabled = true;
    }

    if (state.currentUnit < day.units.length - 1) {
        const nextUnit = day.units[state.currentUnit + 1];
        document.getElementById('next-unit').textContent = 'Unit ' + (state.currentUnit + 2) + ': ' + nextUnit.theme;
        nextBtn.disabled = false;
        nextBtn.onclick = function() {
            if (!isUnitCompleted(state.currentDay, state.currentUnit)) {
                toggleUnitComplete(state.currentDay, state.currentUnit);
            }
            goToUnit(state.currentUnit + 1);
        };
    } else {
        document.getElementById('next-unit').textContent = state.currentDay < courseData.days.length ? '下一天' : '完成全部课程！';
        nextBtn.disabled = false;
        nextBtn.onclick = function() {
            toggleUnitComplete(state.currentDay, state.currentUnit);
            if (state.currentDay < courseData.days.length) {
                window.location.href = 'day.html?day=' + (state.currentDay + 1) + '&unit=0';
            } else {
                window.location.href = 'index.html';
            }
        };
    }
}

function goToUnit(index) {
    state.currentUnit = index;
    state.viewMode = 'brief';
    history.replaceState(null, '', 'day.html?day=' + state.currentDay + '&unit=' + index);
    updateSidebar();
    renderUnitContent();
    setupViewToggle();
    document.querySelector('.content').scrollTop = 0;
}

// ========================================
// 视图切换
// ========================================
function setupViewToggle() {
    const briefBtn = document.getElementById('brief-btn');
    const fullBtn = document.getElementById('full-btn');

    if (!briefBtn || !fullBtn) return;

    briefBtn.onclick = async function() {
        state.viewMode = 'brief';
        briefBtn.classList.add('active');
        fullBtn.classList.remove('active');
        await renderUnitContent();
    };

    fullBtn.onclick = async function() {
        state.viewMode = 'full';
        fullBtn.classList.add('active');
        briefBtn.classList.remove('active');
        await renderUnitContent();
    };
}

// ========================================
// 初始化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

    if (path.includes('day.html')) {
        // 规范用户历程：无参数直接访问 day.html 时重定向到首页
        const params = new URLSearchParams(window.location.search);
        if (!params.get('day')) {
            window.location.replace('index.html');
            return;
        }
        renderDayPage();
        setupViewToggle();
    } else {
        renderHomePage();
        // 预加载：根据用户进度提前加载最可能进入的那天的内容脚本
        var pos = getLastAccessedPosition();
        loadDayContent(pos.day);
    }
});
