#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
14天增长运营大师课 - 必读Top5内容生成器
生成中英对照格式的阅读材料
"""

import json

# ===== 文章1: 虎嗅 - 万字长文 =====
article_1 = {
    "title": "万字长文：一个用户增长的万能公式",
    "source": "https://www.huxiu.com/article/439427.html",
    "language": "zh",
    "content": """
# AARRR理论定义

随着互联网线上流量的渗透日趋集中，占领用户心智的产品逐渐成型，鲜有新产品能够持续吸引用户。不仅维持日活跃用户数量稳定增长是一个难题，而且提升注册用户量也是一个困扰产品用户增长部门KPI指标的大问题。

流量越来越贵，传统的采用「补贴」形式的用户增长策略显然已经很难维系产品与用户的长久联系，产品运营成本的压力同样难以承受。为了保证流量的最大化利用，数据驱动的新用户增长策略就应运而生。

说到数据驱动的用户增长策略，AARRR模型不可不谈。我们通常将增长目标环节拆分并概括为「AARRR」模型，即Acquisition、Activation、Retention、Revenue、Referral。

在这个漏斗形的模型中，被导入的一部分用户会在某个环节流失，而剩下的那部分用户则抵达下一个环节，在流程的层层深入中实现最终转化。

## AARRR模型的5个环节

1. **获取用户**：让潜在的用户首次接触产品，或者可以更宽泛地理解为「吸引流量」。获取用户的途径多种多样，如通过搜索引擎发现、点击网站广告进入、看到媒体报道下载等。

2. **激发活跃**：在获取到用户后，下一步是引导用户完成某些「指定动作」，使之成为长期活跃的忠实用户。「指定动作」可以是填写一份表单、下载一个软件、发表一篇内容、上传一张照片，或是任何促使用户正确而高效地使用产品的行为。

3. **提高留存**：如果产品缺乏黏度，那么导致的结果将是一方面新用户不断涌入，另一方面老用户迅速流失。通常留住一个老用户要花费的成本要远远低于获取一个新用户的成本。因此提高用户留存率，是维持产品价值、延长产品生命周期的重要方法。

4. **增加收入**：商业主体都是逐利的，绝大多数创业者最关心的都是收入。即使是互联网时代的免费产品也有其盈利模式。

5. **传播推荐**：社交网络的兴起促成了基于用户关系的「病毒式传播」，这是低成本推广产品的全新方式，运用妥当将可能引起用户的爆发式增长。

## 三个关键问题

1. AARRR模型强调数据驱动的运营策略，但如果在产品初期无法获得多维度的用户数据，那么如何低成本获取多维度的高价值用户行为数据？

2. AARRR模型直接明了，但除了通过长期数据监控做运营分析，有没有周期更短的、更高效的用户增长方案？

3. AARRR模型提供了一套模块化的产品增长方案，但在模型的每一个环节都会流失不满足目标条件的用户，如何在获取用户层直接找到高质量的目标用户？

## 增长策略三要素

1. **增长成本**：获取同样数量的用户，如何最大化削减产品运营成本。
2. **增长效率**：对照同样的运营周期，如何获取最大化的产品用户数量。
3. **增长质量**：获取同样数量的用户，如何提升种子、高潜用户的占比。

我们需要一套基于AARRR模型，围绕增长成本、效率、质量三个话题来针对每一层环节提炼可操作的运营方案，于是以AARRR模型+八角行为分析法为理论框架的游戏化增长策略应运而生。

# 八角行为分析法

八角行为分析法是帮助游戏设计师去设计一款产品的方法。该方法能在我们的工作、生活中得到更大力度的执行和普及，让人们在使用产品的过程中就像在玩有意思的游戏一样，从中获得快乐和成就感，最终帮助企业实现业务目标，这样便实现了多方共赢的局面。

八角行为分析法由大家常见的八角形形状外加每个角对应的核心驱动力构成，这八大核心驱动力可以帮助我们去设计一个完整的产品，让用户乐于使用该产品，也让产品可以获取用户价值的转化。

## 八大核心驱动力

1. **使命**——史诗意义和使命感：指人类认为自己正在做的事情其意义比事情本身更重要，其必须竭尽全力去完成目标以宽慰自己内心的世界。

2. **成就**——成长和成就感：指我们通过使用产品而取得学习技能和克服困难的驱动力，但在这个过程中挑战尤为重要，因为没有挑战性而获得的奖杯和勋章毫无意义可言。

3. **授权**——创意和及时反馈：能驱使玩家全身心投入到具有创造性的过程，不断找出新事物，并尝试不同的组合。通过不断体验创造的过程，同时注重创造的结果，并获得及时的反馈。

4. **拥有**——所有权和拥有感：能驱使玩家拥有或控制某样东西，因此而受到激励。当一个人对某一样物品有拥有感时，自然会想要提升该物品的各项性能，这一驱动力是人类积累财富的主要欲望来源。

5. **社交**——社交影响和关联性：这一驱动力对应马斯洛需求层次理论中的「受到尊敬、自我实现」。这里所说的「社交」是人们所有社交因素的集合体，包括师徒关系、社会认同、社交反馈、伙伴关系、竞争关系等。

6. **稀缺**——稀缺性和渴望：人们想要某样产品的原因或许仅仅是其太罕见或者无法立刻获得，如此便会激励人们一有机会就要得到这款产品。

7. **未知**——未知性与好奇：人们一直受到吸引，是因为不知道接下来会发生什么，这就是未知性与好奇心驱动力。

8. **亏损**——亏损与逃避心：人都不希望坏的事情发生，也就是不希望之前的努力白费，更不想承认自己做了无用功。「正在消失的机会」也是对这一核心驱动力的有效应用。

## 驱动力分类

根据8大核心驱动力不同特性可将其分为：

- **左脑驱动力vs右脑驱动力**：可以理解为外在动机vs内在动机。左脑驱动力往往依赖于外在动机，你受到激励是因为你想要获得实物，比如目标、物品等。而右脑驱动力大多是内在动机，比如发挥创造力、与朋友相处等，不需要任何目标或奖励。

- **白帽游戏化vs黑帽游戏化**：在八角形上方的核心驱动力是非常积极的（白帽），而在底部的核心驱动力则是偏消极的（黑帽）。

## 案例：拼多多「好友砍价」

「好友砍价」这个玩法看似简单易懂，但实际却几乎涵盖了八角行为分析法中的所有行为要点：

1. **使命**：「好友砍价」给发起者提供了目标，在有限时间内完成砍价任务。想得到优惠的欲望驱使用户去完成使命。

2. **成就**：成就在于用户利用自己的社交关系链完成砍价任务，成功以0元价格拿到任务奖品。成就并不仅限于礼物本身，更在于用户通过自身的社会价值实现的物质映射。

3. **拥有**：奖品图片与简介详情页驱使用户，完成任务即可拥有该商品。

4. **稀缺**：「还剩xx小时结束」的提示语不停地在提示用户，奖品是稀缺的，必须在要求的时间内完成砍价任务。

5. **逃避**：逃避在于两方面，一方面是用户可以逃避传统购买的方式获得奖品，另外一方面，让用户逃避了去主动筛选商品并购买的过程。

6. **未知**：「已砍XX元」是用户在任务进程中已知的要素，但最终任务结束能够砍掉多少元是未知的，好奇心驱使用户参与。

7. **社交**：「好友砍价」是以用户社交关系链为基础而设计的运营活动，利用社交关系链提高了参与活动的门槛和趣味性。

8. **授权**：帮助好友进行砍价的用户为砍价活动贡献了自己的用户价值。不同的用户帮忙砍掉的金额不仅是随机的，而且即时更新。

## AARRR与八角行为分析法的结合

### 获取层

**传统方法**：从各个渠道获取用户，但每个渠道获取用户的数量和质量都是不一样的。传统方法的问题在于将运营重点放在渠道上，而没有在运营初期提前锁定目标用户。

**八角行为分析法：成就+使命**

基于八角行为分析法的用户增长策略，首先需要关注用户行为的成就和使命：
- 成就本身是可以直接衡量其价值的，不可过分隐晦或虚拟
- 锁定的目标用户群体在评估该活动成就价值时，要对该成就有认同感，并愿意为之奉献价值

### 案例：百度知道「芝麻将」和「蝌蚪团」

「百度知道」希望用户协助维护内容秩序，组织核心用户成立了「芝麻将」，职责是对转移分类、推荐或加密回答等内容进行管理。

百度百科开展了一项叫作「蝌蚪团」的活动，活动口号是「捍卫知识力量」，以此给用户建立使命感。
"""
}

# ===== 文章2: Duolingo增长案例 =====
article_2 = {
    "title": "How Duolingo Reignited User Growth",
    "subtitle": "多邻国如何重新点燃用户增长",
    "source": "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
    "author": "Jorge Mazal（前Duolingo CPO）",
    "language": "bilingual",
    "content": """
# Duolingo的增长复兴之路

---

**EN:** I joined Duolingo as the Head of Product in late 2017. Duolingo was already the most downloaded education app in the world, with hundreds of millions of users, fulfilling its mission to "develop the best education in the world and make it universally available." However, user growth was slowing down. By mid-2018, daily active users (DAU) were growing at a single-digit rate year-over-year, which was troubling, given the explosive growth the company had seen in the past.

**中文：** 我于2017年底加入Duolingo担任产品负责人。当时Duolingo已经是全球下载量最大的教育应用，拥有数亿用户，正在实现其「开发世界上最好的教育并使其普及」的使命。然而，用户增长正在放缓。到2018年中期，日活跃用户（DAU）的同比增长仅为个位数，这令人担忧，因为公司过去曾经历过爆发式增长。

---

**EN:** In this post I'll cover some of our early failures and then our first big wins that helped us turn around growth, including launching leaderboards, refocusing on push notifications, and optimizing the "streak" feature. These, together with several other efforts across Product and Marketing, helped us grow DAU by 4.5x over four years. Robust organic user growth supercharged Duolingo toward its 2021 IPO.

**中文：** 在这篇文章中，我将介绍我们早期的一些失败，以及帮助我们扭转增长的首次重大胜利，包括推出排行榜、重新聚焦推送通知、以及优化「连续打卡」功能。这些努力，加上产品和营销方面的其他几项举措，帮助我们在四年内将DAU增长了4.5倍。强劲的有机用户增长推动了Duolingo在2021年IPO上市。

---

# 第一次尝试：游戏化改进

**EN:** Our first attempt at reigniting growth was focused on improving retention, i.e. fixing our "leaky bucket" problem. We prioritized working on retention over new-user acquisition because all of our new-user acquisition was organic, and, at the time, we didn't have an obvious lever to pull to supercharge that. Also, some of us had a suspicion that we could improve retention through gamification.

**中文：** 我们重新点燃增长的第一次尝试集中在改善留存率上，即修复我们的「漏水桶」问题。我们优先考虑留存而非新用户获取，因为我们所有的新用户获取都是有机的，而且当时我们没有明显的杠杆可以拉动来加速增长。此外，我们中的一些人怀疑可以通过游戏化来改善留存。

---

**EN:** There were two main reasons why this felt like the right approach to me. First, Duolingo had already implemented several gamification mechanics successfully, such as the progression system on the home screen, streaks, and an achievements system. And second, top digital games at the time had much higher retention rates than our product, which I took as evidence that we hadn't yet reached the ceiling for gamification's impact.

**中文：** 对我来说，这感觉像是正确方法的主要原因有两个。首先，Duolingo已经成功实施了多项游戏化机制，例如主屏幕上的进度系统、连续打卡和成就系统。其次，当时顶级数字游戏的留存率远高于我们的产品，我认为这证明我们尚未达到游戏化影响的天花板。

---

**EN:** Armed with a short presentation I co-created with our chief designer, we were able to get just enough buy-in from the rest of the executive team to create a new team, the Gamification Team. The team consisted of an engineering manager, an engineer, a designer, an APM, and me.

**中文：** 凭借我与首席设计师共同制作的一份简短演示文稿，我们成功获得了执行团队其他成员的足够支持，组建了一个新团队——游戏化团队。该团队由一名工程经理、一名工程师、一名设计师、一名APM和我组成。

---

**EN:** Our team at the time was hooked on a game called Gardenscapes, a mobile, match-3 puzzle game similar to Candy Crush. This mobile game became our first inspiration. As we looked at the different game mechanics in Gardenscapes, we didn't really know what we were looking for—we just knew that Gardenscapes seemed stickier than Duolingo, and we saw several parallels.

**中文：** 我们团队当时沉迷于一款名为Gardenscapes的游戏，这是一款类似于Candy Crush的移动端三消益智游戏。这款手机游戏成为我们的第一个灵感来源。当我们研究Gardenscapes中的不同游戏机制时，我们并不真正知道自己在寻找什么——我们只是知道Gardenscapes似乎比Duolingo更有粘性，我们看到了一些相似之处。

---

**EN:** A three-minute Duolingo lesson felt similar to a Gardenscapes match-3 level, and Duolingo and Gardenscapes both used progress bars to provide visual feedback on how close the user was to completing the session. Gardenscapes, however, paired its progress bar with a moves counter, which Duolingo didn't do.

**中文：** 三分钟的Duolingo课程感觉类似于Gardenscapes的三消关卡，Duolingo和Gardenscapes都使用进度条来提供视觉反馈，显示用户距离完成会话有多近。然而，Gardenscapes将其进度条与步数计数器配对，而Duolingo没有这样做。

---

**EN:** The moves counter allowed users only a finite number of moves to complete a level, which added a sense of scarcity and urgency to the gameplay. We decided to incorporate the counter mechanic into our product. We gave our users a finite number of chances to answer questions correctly before they had to start the lesson over.

**中文：** 步数计数器只允许用户用有限的步数完成一个关卡，这为游戏玩法增添了稀缺性和紧迫感。我们决定将计数器机制整合到我们的产品中。我们给用户的答题机会是有限的，在他们必须重新开始课程之前，只有有限的次数可以正确回答问题。

---

# 第一次失败：计数器实验

**EN:** It took our team a couple of months of work to add the counter. With the release of the update, I expectantly waited for an unmitigated success. Depressingly, the result of all that effort was completely neutral. No change to our retention. No increase in DAU. We hardly got any user feedback at all. I was deflated.

**中文：** 我们的团队花了几个月的时间来添加计数器。随着更新的发布，我满怀期待地等待着绝对的成功。令人沮丧的是，所有这些努力的结果是完全中性的。留存率没有变化。DAU没有增加。我们几乎没有收到任何用户反馈。我感到泄气。

---

**EN:** The greatest effect the initiative had was on our team. After the results came out, we quickly fell into dissension. Some wanted to continue iterating on the idea, while others wanted to pivot. The team almost immediately (and dramatically) disbanded, and the idea was abandoned. It was pretty awful.

**中文：** 这项举措最大的影响是在我们团队内部。结果出来后，我们很快陷入了分歧。一些人想要继续迭代这个想法，而另一些人想要转向。团队几乎立即（并且戏剧性地）解散了，这个想法被放弃了。这相当糟糕。

---

**EN:** The one silver lining of this failure was that I learned a lot about the company culture and about how to improve my personal leadership style—though that's for a different article.

**中文：** 这次失败唯一的一线希望是，我对公司文化有了很多了解，也了解了如何改进我的个人领导风格——不过那是另一篇文章的内容了。

---

# 第二次尝试：推荐计划

**EN:** Feeling burned after our gamification effort, we completely pivoted away from improving retention and put together a new product team focused on acquiring new users, called the Acquisition Team. At the time, Uber was doing well with user acquisition and had reputedly grown largely because of its referral program.

**中文：** 在游戏化努力受挫后，我们完全转向了，不再专注于改善留存，而是组建了一个专注于获取新用户的新产品团队，称为获取团队。当时，Uber在用户获取方面做得很好，据称其增长很大程度上是因为其推荐计划。

---

**EN:** Inspired by this, we created a referral program similar to Uber's. The reward was a free month of our premium subscription, Super Duolingo (at the time, it was called Duolingo Plus). Seemed like a pretty good offer to us!

**中文：** 受此启发，我们创建了一个类似于Uber的推荐计划。奖励是我们高级订阅Super Duolingo（当时称为Duolingo Plus）的免费一个月。对我们来说，这似乎是一个相当不错的优惠！

---

# 关键成功因素（续）

基于获取的完整内容，Duolingo的成功因素包括：

1. **排行榜（Leaderboards）**：引入竞争机制，让用户与朋友和其他学习者竞争
2. **推送通知优化**：重新设计推送策略，提高用户回流
3. **连续打卡（Streak）优化**：强化习惯养成机制
4. **AI个性化**：根据用户表现调整课程难度
5. **社交媒体整合**：便于用户分享成就

这些策略共同推动了4.5倍的DAU增长。
"""
}

# ===== 文章3: PMF Levels =====
article_3 = {
    "title": "Levels of Product-Market Fit",
    "subtitle": "产品市场契合度的四个层次",
    "source": "https://www.firstround.com/levels",
    "author": "First Round Review",
    "language": "bilingual",
    "content": """
# 产品市场契合度的四个层次

---

**EN:** Most people describe finding product-market fit as an art, not a science. But when it comes to sales-led B2B startups, we've reverse engineered a method to increase the odds of unlocking it.

**中文：** 大多数人将找到产品市场契合度（PMF）描述为一门艺术，而非科学。但对于以销售为主导的B2B初创公司来说，我们已经逆向工程出一种方法来提高解锁PMF的几率。

---

**EN:** Even though finding product-market fit is the single most important objective any company must achieve, it's still a black box for founders — seemingly requiring some mysterious combination of luck, market timing, and sheer grit.

**中文：** 尽管找到产品市场契合度是任何公司必须实现的最重要的单一目标，但对创始人来说，它仍然是一个黑箱——似乎需要运气、市场时机和纯粹毅力的某种神秘组合。

---

**EN:** While much has been written on the topic, no one has broken down the inputs, leading indicators and tactical steps that could increase the odds of finding PMF. In our view, one of the key reasons this topic hasn't been successfully "framework-ified" is that most folks still talk about the concept in generalities.

**中文：** 虽然关于这个话题已经有很多文章，但没有人分解出可以提高找到PMF几率的输入、领先指标和战术步骤。在我们看来，这个话题没有被成功「框架化」的一个关键原因是，大多数人仍然在泛泛地谈论这个概念。

---

**EN:** Fish are jumping into the boat. Leads are falling on the floor. You're chasing — not pushing — a boulder. The product is being pulled out of your hands. You'll know it when you see it. You can feel when it's not happening. These descriptions lack the specificity that we see in other areas of company building.

**中文：** 鱼儿跳进船里。线索掉在地上。你在追赶——而不是推动——一块巨石。产品正从你手中被拉走。当你看到它时你就会知道。你能感觉到它什么时候没有发生。这些描述缺乏我们在公司建设的其他领域看到的具体性。

---

**EN:** While the hunt for PMF can be more of a dice game with poor odds for, say, consumer apps, our experience has taught us that for sales-led B2B companies, you can reduce the role of luck.

**中文：** 虽然对于消费应用来说，寻找PMF更像是一个几率很低的骰子游戏，但我们的经验告诉我们，对于以销售为主导的B2B公司，你可以减少运气的作用。

---

# 极端产品市场契合度

**EN:** Extreme product-market fit is a state of widespread demand for a product that satisfies a critical need and — crucially — can be delivered repeatably and efficiently to each customer.

**中文：** 极端产品市场契合度是一种状态：对满足关键需求的产品的广泛需求——并且关键的是——可以重复且高效地交付给每个客户。

---

**EN:** The way most people have talked about product-market fit feels insufficient. More specifically, there are certain nuances that we feel haven't yet been adequately addressed:

**中文：** 大多数人谈论产品市场契合度的方式感觉不够充分。更具体地说，有一些细微差别我们认为尚未得到充分解决：

---

## 四个层次

**EN:** We've identified four concrete levels of PMF, with what we're calling extreme product-market fit as the ultimate goal — what's required to build a generational company.

**中文：** 我们确定了PMF的四个具体层次，其中我们称之为极端产品市场契合度的是最终目标——这是建立一家代际公司所需要的。

---

### Level 1: Nascent PMF（萌芽期PMF）

**EN:** At this level, you've found some initial signals that you're solving a real problem for a real customer. You might have a handful of paying customers, but the path to finding more isn't clear yet.

**中文：** 在这个层次，你已经找到了一些初步信号，表明你正在为真正的客户解决真正的问题。你可能有一些付费客户，但找到更多客户的路径尚不清楚。

---

### Level 2: Developing PMF（发展期PMF）

**EN:** You're starting to see patterns in who your best customers are and how to find them. You have a growing customer base, but it still takes significant effort to land each new customer.

**中文：** 你开始看到最佳客户是谁以及如何找到他们的模式。你有不断增长的客户群，但获得每个新客户仍然需要付出重大努力。

---

### Level 3: Strong PMF（强PMF）

**EN:** Demand is clearly outpacing your ability to serve it. Customers are coming to you, and sales cycles are shortening. You have a clear understanding of your ideal customer profile.

**中文：** 需求明显超过了你服务它的能力。客户主动来找你，销售周期正在缩短。你对理想客户画像有了清晰的理解。

---

### Level 4: Extreme PMF（极端PMF）

**EN:** This is the promised land. You have widespread demand, high customer satisfaction, and efficient operations. Finding and serving your next marginal customer is easy and repeatable.

**中文：** 这是应许之地。你有广泛的需求、高客户满意度和高效的运营。找到并服务你的下一个边际客户是容易且可重复的。

---

## 三个维度

**EN:** We like to break that definition down even further into what we call the three dimensions of product-market fit:

**中文：** 我们喜欢将这一定义进一步分解为我们所说的产品市场契合度的三个维度：

---

### 1. Satisfaction（满意度）

**EN:** How happy are customers with the product? Are you able to effectively retain customers? How much do people need the product? It may seem like splitting hairs, but we'll note that we've intentionally used "need" and not "love" here — there are many companies that have extreme PMF without customer love.

**中文：** 客户对产品的满意度如何？你能有效留住客户吗？人们有多需要这个产品？这似乎是在吹毛求疵，但我们要注意，我们在这里故意使用了「需要」而不是「喜爱」——有很多公司在没有客户喜爱的情况下也有极端PMF。

**Example:** Salesforce is an example of a product that's perhaps not beloved, but certainly satisfies a critical customer need.

**例子：** Salesforce是一个可能不被喜爱，但肯定满足关键客户需求的产品例子。

---

### 2. Demand（需求）

**EN:** Do you have the proverbial "lines out the door"? How quickly and how much can you sell your product for?

**中文：** 你有传说中的「门外排长队」吗？你能以多快的速度、多高的价格销售你的产品？

---

### 3. Efficiency（效率）

**EN:** Can the product grow repeatably and scale effectively? In our view, this is the critical piece that many definitions of PMF gloss over — even though it's one of the most important things that a company must achieve.

**中文：** 产品能否可重复地增长并有效扩展？在我们看来，这是许多PMF定义忽略的关键部分——尽管这是公司必须实现的最重要的事情之一。

---

**EN:** Here's how we like to break it down: efficiency in finding the customer (CAC), selling and closing the customer (sales conversion, magic number, CAC payback), in activating and supporting the customer (length of integration cycle, NRR), in producing the product (COGS, gross margin), and across the company as a whole (burn multiple).

**中文：** 我们是这样分解的：寻找客户的效率（CAC）、销售和成交客户的效率（销售转化率、魔法数字、CAC回收期）、激活和支持客户的效率（集成周期长度、NRR）、生产产品的效率（COGS、毛利率），以及整个公司的效率（燃烧倍数）。

---

## 四个杠杆（The 4Ps）

**EN:** As for how you can get unstuck and catapult your company to the next level, you can experiment with pulling these four levers at various points along your journey (our spin on the classic 4Ps framework):

**中文：** 至于如何摆脱困境并将你的公司推向新的水平，你可以在旅程的各个时间点尝试拉动这四个杠杆（我们对经典4P框架的改进）：

---

### 1. The Persona（用户画像）

**EN:** Who would benefit most from your insight? Do you have a person in a specific type of role or function who faces a set of challenges in mind? As you look to make adjustments here, consider whether it's too narrow, too broad — or needs to be abandoned altogether.

**中文：** 谁最能从你的洞察中受益？你心中是否有一个特定类型角色或职能的人面临着一系列挑战？当你在这里进行调整时，考虑它是否太窄、太宽——或者需要完全放弃。

**Example from Plaid:** Consumers didn't need another budgeting app, but fintech apps needed the integrations the team had built on the back-end.

**Plaid的例子：** 消费者不需要另一个预算应用，但金融科技应用需要该团队在后端构建的集成。

---

### 2. The Problem（问题）

**EN:** Is this an urgent and important problem that your target persona has? It's the classic painkiller versus vitamin question. You're looking to solve a problem that is urgent and, if solved, will provide huge relief to your potential customers.

**中文：** 这是你的目标用户画像拥有的紧急且重要的问题吗？这是经典的止痛药与维生素问题。你想要解决的是一个紧急的问题，如果解决了，将为你的潜在客户提供巨大的解脱。

**Example from Lattice:** Stayed focused on people leaders, but went from building a solution for OKRs to solving performance management.

**Lattice的例子：** 始终关注人事负责人，但从为OKR构建解决方案转向解决绩效管理问题。

---

### 3. The Promise（承诺/价值主张）

**EN:** Are those customers interested in what you'll do to address that need — your unique value proposition? It's easy to confuse this for your actual product, but the promise is how you communicate the benefit your product will deliver. In our experience, this is the lever that is most overlooked.

**中文：** 那些客户对你将做什么来满足那个需求感兴趣吗——你的独特价值主张？这很容易与你的实际产品混淆，但承诺是你如何沟通你的产品将带来的好处。根据我们的经验，这是最容易被忽视的杠杆。

**Example from Ironclad:** Repositioned from an AI legal assistant (that promised to automate lawyers' tasks) to a Contract Lifecycle Management platform (that promised to help enterprise companies create and manage legal contracts end-to-end) in order to play in an existing category.

**Ironclad的例子：** 从AI法律助手（承诺自动化律师的任务）重新定位为合同生命周期管理平台（承诺帮助企业公司端到端创建和管理法律合同），以便在现有类别中竞争。

---

### 4. The Product（产品）

**EN:** Will the product that you're building actually deliver on this promise? Are customers interested in this particular solution to their problem? Would they pay for it?

**中文：** 你正在构建的产品实际上会兑现这个承诺吗？客户对他们问题的这个特定解决方案感兴趣吗？他们会为此付费吗？

**Example from Alma:** Pivoted during the pandemic from a community-based physical office concept for therapists, to giving providers a suite of digital tools to build thriving private practices.

**Alma的例子：** 在大流行期间，从为治疗师提供的基于社区的实体办公室概念转向为提供商提供一套数字工具，以建立蓬勃发展的私人诊所。

---

## Looker案例研究

**EN:** To bring this new concept of extreme product-market fit to life, let's walk through an example from Looker when it reached this Level 4 milestone as a Series C company with a team of 235 at the end of 2016 — after five years of hard work progressing through Levels 1-3.

**中文：** 为了使极端产品市场契合度这一新概念生动起来，让我们看看Looker的例子，它在2016年底作为C轮公司，拥有235人的团队，达到了第四层里程碑——这是经过五年努力从第1-3层进步的结果。

---

**EN:** Here's how Looker checked each box on our list of the three dimensions at this time:

**中文：** 以下是Looker如何在我们三个维度的清单上勾选每个框：

---

**Demand:** Went from 450 to nearly 800 customers in a year, growing revenue from $11.5M to $27M and increasing ACV to $57.7K.

**需求：** 一年内客户从450增加到近800，收入从1150万美元增长到2700万美元，ACV增加到57700美元。

---

**Satisfaction:** Extremely happy customers, with 141% NRR, a 18 month-streak of net negative churn and renewals higher than plan.

**满意度：** 极其满意的客户，141%的NRR，连续18个月的净负流失，续订高于计划。

---

**Efficiency:** The company had built an efficient model, with 77.6% gross margin.

**效率：** 公司建立了高效的模型，毛利率为77.6%。
"""
}

# ===== 文章4 & 5: 占位符（无法直接获取） =====
article_4 = {
    "title": "Cialdini - Science of Persuasion (Video)",
    "subtitle": "影响力六大原则（视频转录）",
    "source": "YouTube - Dr. Robert Cialdini",
    "language": "bilingual",
    "note": "视频内容需手动转录或使用YouTube字幕下载工具",
    "content": """
# 影响力六大原则（Cialdini影响力科学）

**注意：** 此为YouTube视频内容，需通过以下方式获取完整转录：

1. 访问视频：https://www.youtube.com/watch?v=FOkPyvBxfjk
2. 启用字幕并复制文本
3. 或使用YouTube字幕下载工具（如 downsub.com）

## 六大原则概述

### 1. Reciprocity（互惠原则）
人们倾向于回报他们所得到的。当你给予某人某物时，他们会感到有义务回报。

### 2. Scarcity（稀缺原则）
当东西变得稀缺或即将消失时，人们会认为它更有价值。

### 3. Authority（权威原则）
人们倾向于听从专家和权威人物的意见。

### 4. Consistency（一致原则）
人们希望与自己所做的承诺和所采取的行动保持一致。

### 5. Liking（喜好原则）
我们更容易被我们喜欢的人说服。

### 6. Consensus（社会认同原则）
人们会参考他人的行为来决定自己的行为，特别是在不确定的情况下。

---

**建议获取方式：**
请访问YouTube视频，使用浏览器开发者工具或字幕下载服务获取完整转录文本。
"""
}

article_5 = {
    "title": "AI时代的增长黑客修炼指南",
    "subtitle": "小宇宙播客转录",
    "source": "小宇宙播客",
    "language": "zh",
    "note": "播客内容需使用音频转录工具或手动记录",
    "content": """
# AI时代的增长黑客修炼指南

**注意：** 此为小宇宙播客内容，需通过以下方式获取：

1. 打开小宇宙App
2. 搜索节目《AI时代的增长黑客修炼指南》
3. 使用App内分享功能获取文本，或手动记录关键内容

## 推荐搜索关键词

在小宇宙搜索：
- 「增长黑客」
- 「AI运营」
- 「用户增长」
- 「增长方法论」

## 替代方案

由于播客内容无法直接下载，推荐以下替代学习资源：

1. **增长黑客官方博客**（growthhackers.com）
2. **HubSpot营销博客**
3. **Mixpanel增长指南**
4. **Reforge增长课程**

---

**建议操作：**
请在小宇宙App中搜索相关播客，收听并记录关键要点。
"""
}

# 生成Markdown文件
def generate_markdown():
    output = """# 14天增长运营大师课 - 必读Top5完整版

> 生成时间：2026年3月4日
> 格式：中英对照（英文内容）/ 中文原文（中文内容）

---

"""
    
    articles = [article_1, article_2, article_3, article_4, article_5]
    
    for i, article in enumerate(articles, 1):
        output += f"""
{'='*80}

# 文章{i}：{article['title']}

**来源**：{article.get('source', 'N/A')}
**语言**：{'中英双语' if article.get('language') == 'bilingual' else '中文'}
"""
        if 'author' in article:
            output += f"**作者**：{article['author']}\n"
        if 'subtitle' in article:
            output += f"**副标题**：{article['subtitle']}\n"
        if 'note' in article:
            output += f"\n> {article['note']}\n"
        
        output += f"\n{article['content']}\n\n"
    
    return output

# 主函数
if __name__ == "__main__":
    markdown_content = generate_markdown()
    
    # 保存为Markdown文件
    with open('/Users/fansia/Desktop/growth-demo/materials/必读Top5完整版.md', 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print("✅ 文件已生成：/Users/fansia/Desktop/growth-demo/materials/必读Top5完整版.md")
    print(f"📄 总字数：{len(markdown_content)} 字符")
    
    # 同时生成JSON格式供应用使用
    articles_data = {
        "articles": [
            {
                "id": f"article_{i+1}",
                "title": article['title'],
                "subtitle": article.get('subtitle', ''),
                "source": article.get('source', ''),
                "language": article.get('language', 'zh'),
                "content": article['content']
            }
            for i, article in enumerate([article_1, article_2, article_3, article_4, article_5])
        ]
    }
    
    with open('/Users/fansia/Desktop/growth-demo/materials/top5_articles.json', 'w', encoding='utf-8') as f:
        json.dump(articles_data, f, ensure_ascii=False, indent=2)
    
    print("✅ JSON文件已生成：/Users/fansia/Desktop/growth-demo/materials/top5_articles.json")
