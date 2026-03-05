/**
 * 4天增长运营试水课 - Day2: 多邻国增长策略 (中英对照) - part1: 背景+三阶段, part2: 排行榜+推送+打卡
 */
window.dayContent_2 = {
    part1: `<div class="bilingual-header title-header"><h2 class="zh-text">多邻国的增长策略</h2>
<h2 class="en-text">How Duolingo reignited user growth</h2>
</div>
<div class="bilingual-pair">
<p class="en-text">The story behind Duolingo&#x27;s 350% growth acceleration, leaderboards, streaks, notifications, and innovative growth model</p>
<p class="zh-text">多邻国350%增长加速背后的故事：排行榜、连续打卡、推送通知和创新增长模型</p>
</div>
<div class="bilingual-pair">
<p class="en-text">By Jorge Mazal | Feb 28, 2023</p>
<p class="zh-text">作者：Jorge Mazal | 2023年2月28日</p>
</div>
<div class="bilingual-pair">
<p class="en-text">👋 Hey, Lenny here! Welcome to this month&#x27;s free edition of Lenny&#x27;s Newsletter. Each week I humbly tackle reader questions about product, growth, working with humans, and anything else that&#x27;s stressing you out about work.</p>
<p class="zh-text">嘿，我是Lenny！欢迎来到Lenny通讯本月免费版。每周我都会谦逊地处理读者关于产品、增长、与人合作以及任何让你工作中感到压力的问题。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">I was at a small event a few months back where Jorge Mazal (former CPO of Duolingo) shared the story behind Duolingo&#x27;s growth reaccelerating. I was captivated. I&#x27;ve never seen a growth story like this before—4.5x growth for a mature product, driven by a small handful of product changes, rooted in an innovative growth model, and explained in such actionable detail.</p>
<p class="zh-text">几个月前，我在一个小型活动上，多邻国前首席产品官Jorge Mazal分享了多邻国增长重新加速的故事。我被深深吸引了。我从未见过这样的增长故事——一个成熟产品实现4.5倍增长，由少数产品变革驱动，植根于创新增长模型，并以如此可操作的细节进行解释。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">I joined Duolingo as the Head of Product in late 2017. Duolingo was already the most downloaded education app in the world, with hundreds of millions of users, fulfilling its mission to &#x27;develop the best education in the world and make it universally available.&#x27; However, user growth was slowing down.</p>
<p class="zh-text">我于2017年底加入多邻国，担任产品负责人。多邻国已经是全球下载量最大的教育应用，拥有数亿用户，履行其使命：开发世界上最好的教育并使其普遍可用。然而，用户增长正在放缓。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">By mid-2018, daily active users (DAU) were growing at a single-digit rate year-over-year, which was troubling, given the explosive growth the company had seen in the past. This was a problem for a startup with investors anxious to see fast monetization growth.</p>
<p class="zh-text">到2018年中期，日活跃用户（DAU）同比增长仅为个位数，考虑到公司过去经历的爆炸式增长，这令人担忧。对于一家投资者渴望看到快速货币化增长的初创公司来说，这是一个问题。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">In this post I&#x27;ll cover some of our early failures and then our first big wins that helped us turn around growth, including launching leaderboards, refocusing on push notifications, and optimizing the &#x27;streak&#x27; feature.</p>
<p class="zh-text">在这篇文章中，我将介绍我们早期的一些失败，然后是帮助我们扭转增长的第一个重大胜利，包括推出排行榜、重新聚焦推送通知，以及优化连续打卡功能。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">These, together with several other efforts across Product and Marketing, helped us grow DAU by 4.5x over four years. Robust organic user growth supercharged Duolingo toward its 2021 IPO.</p>
<p class="zh-text">这些努力，加上产品和营销方面的其他几项举措，帮助我们在四年内将DAU增长了4.5倍。强劲的有机用户增长为多邻国2021年IPO提供了强大动力。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">This article is an in-depth look into that journey. It is my hope that sharing this work will help others find their own growth breakthroughs faster.</p>
<p class="zh-text">这篇文章深入探讨了这一历程。我希望分享这项工作能帮助其他人更快地找到自己的增长突破。</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">第一阶段：增加游戏化</h3>
<h3 class="en-text">Phase 1: Increasing gamification</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">Our first attempt at reigniting growth was focused on improving retention, i.e. fixing our &#x27;leaky bucket&#x27; problem. We prioritized working on retention over new-user acquisition because all of our new-user acquisition was organic, and, at the time, we didn&#x27;t have an obvious lever to pull to supercharge that.</p>
<p class="zh-text">我们重新点燃增长的第一次尝试集中在提高留存率上，即解决我们的漏桶问题。我们优先处理留存而非新用户获取，因为我们所有的新用户获取都是有机的，而且当时我们没有明显的杠杆来加速这一点。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Also, some of us had a suspicion that we could improve retention through gamification. There were two main reasons why this felt like the right approach to me. First, Duolingo had already implemented several gamification mechanics successfully, such as the progression system on the home screen, streaks, and an achievements system.</p>
<p class="zh-text">此外，我们中的一些人怀疑我们可以通过游戏化来提高留存率。这感觉像是正确的方法有两个主要原因。首先，多邻国已经成功实施了多项游戏化机制，如主屏幕上的进度系统、连续打卡和成就系统。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">And second, top digital games at the time had much higher retention rates than our product, which I took as evidence that we hadn&#x27;t yet reached the ceiling for gamification&#x27;s impact.</p>
<p class="zh-text">其次，当时的顶级数字游戏比我们产品的留存率高得多，我认为这证明我们还没有达到游戏化影响的上限。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Duolingo&#x27;s gamified Home and Achievements pages</p>
<p class="zh-text">多邻国游戏化的主屏幕和成就页面</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Armed with a short presentation I co-created with our chief designer, we were able to get just enough buy-in from the rest of the executive team to create a new team, the Gamification Team. The team consisted of an engineering manager, an engineer, a designer, an APM, and me.</p>
<p class="zh-text">凭借我与首席设计师共同创建的简短演示文稿，我们能够从执行团队的其他成员那里获得足够的支持，创建一个新团队——游戏化团队。该团队由一名工程经理、一名工程师、一名设计师、一名APM和我组成。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">But there was one small issue: we had no idea which incremental gamification mechanics would work for Duolingo.</p>
<p class="zh-text">但有一个小问题：我们不知道哪些增量游戏化机制对多邻国有效。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Our team at the time was hooked on a game called Gardenscapes, a mobile, match-3 puzzle game similar to Candy Crush. This mobile game became our first inspiration.</p>
<p class="zh-text">我们当时的团队沉迷于一款叫做Gardenscapes的游戏，这是一款类似于糖果传奇的移动三消益智游戏。这款手机游戏成为我们的第一个灵感来源。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">A Gardenscapes match-3 puzzle level</p>
<p class="zh-text">Gardenscapes三消益智关卡</p>
</div>
<div class="bilingual-pair">
<p class="en-text">As we looked at the different game mechanics in Gardenscapes, we didn&#x27;t really know what we were looking for—we just knew that Gardenscapes seemed stickier than Duolingo, and we saw several parallels.</p>
<p class="zh-text">当我们研究Gardenscapes中的不同游戏机制时，我们并不真正知道我们在寻找什么——我们只是知道Gardenscapes似乎比多邻国更粘人，我们看到了几个相似之处。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">A three-minute Duolingo lesson felt similar to a Gardenscapes match-3 level, and Duolingo and Gardenscapes both used progress bars to provide visual feedback on how close the user was to completing the session.</p>
<p class="zh-text">三分钟的Duolingo课程感觉类似于Gardenscapes的三消关卡，Duolingo和Gardenscapes都使用进度条来提供视觉反馈，显示用户离完成课程有多近。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Gardenscapes, however, paired its progress bar with a moves counter, which Duolingo didn&#x27;t do. The moves counter allowed users only a finite number of moves to complete a level, which added a sense of scarcity and urgency to the gameplay.</p>
<p class="zh-text">然而，Gardenscapes将其进度条与移动计数器配对，而Duolingo没有这样做。移动计数器只允许用户完成关卡的有限次数，这为游戏玩法增加了稀缺感和紧迫感。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We decided to incorporate the counter mechanic into our product. We gave our users a finite number of chances to answer questions correctly before they had to start the lesson over.</p>
<p class="zh-text">我们决定将计数器机制整合到我们的产品中。我们给用户有限次数的机会来正确回答问题，然后他们必须重新开始课程。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">It took our team a couple of months of work to add the counter. With the release of the update, I expectantly waited for an unmitigated success. Depressingly, the result of all that effort was completely neutral.</p>
<p class="zh-text">我们的团队花了几个月的时间来添加计数器。随着更新的发布，我期待着一个绝对的成功。令人沮丧的是，所有这些努力的结果是完全中性的。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">No change to our retention. No increase in DAU. We hardly got any user feedback at all. I was deflated. The greatest effect the initiative had was on our team. After the results came out, we quickly fell into dissension.</p>
<p class="zh-text">留存率没有变化。DAU没有增加。我们几乎没有得到任何用户反馈。我感到泄气。这项举措最大的影响是对我们的团队。结果出来后，我们很快陷入了分歧。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Some wanted to continue iterating on the idea, while others wanted to pivot. The team almost immediately (and dramatically) disbanded, and the idea was abandoned. It was pretty awful.</p>
<p class="zh-text">有些人想继续迭代这个想法，而其他人想转型。团队几乎立即（并且戏剧性地）解散了，这个想法被放弃了。这相当糟糕。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The one silver lining of this failure was that I learned a lot about the company culture and about how to improve my personal leadership style—though that&#x27;s for a different article.</p>
<p class="zh-text">这次失败的唯一一线希望是，我学到了很多关于公司文化的知识，以及如何提高我的个人领导风格——尽管那是另一篇文章的内容。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The first attempt to reignite growth through more gamification resulted in a dumpster fire.</p>
<p class="zh-text">第一次尝试通过更多游戏化来重新点燃增长结果是一场灾难。</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">第二阶段：推荐计划</h3>
<h3 class="en-text">Phase 2: Referrals</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">Feeling burned after our gamification effort, we completely pivoted away from improving retention and put together a new product team focused on acquiring new users, called the Acquisition Team.</p>
<p class="zh-text">在游戏化努力失败后感到沮丧，我们完全从提高留存率转向，组建了一个新的产品团队，专注于获取新用户，称为获取团队。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">At the time, Uber was doing well with user acquisition and had reputedly grown largely because of its referral program. Inspired by this, we created a referral program similar to Uber&#x27;s.</p>
<p class="zh-text">当时，Uber在用户获取方面做得很好，据说主要是因为其推荐计划而增长。受此启发，我们创建了一个类似于Uber的推荐计划。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The reward was a free month of our premium subscription, Super Duolingo (at the time, it was called Duolingo Plus). Seemed like a pretty good offer to us!</p>
<p class="zh-text">奖励是我们高级订阅Super Duolingo（当时称为Duolingo Plus）的免费一个月。对我们来说，这似乎是一个相当不错的优惠！</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We implemented the feature and hoped our second attempt would be more successful. Instead, new users increased by only 3%. It was positive, but not the type of breakthrough we needed.</p>
<p class="zh-text">我们实现了这个功能，并希望我们的第二次尝试会更成功。相反，新用户只增加了3%。这是积极的，但不是我们需要的突破性增长。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Still, the team doubled down and pushed through, shipping iterations to the referral program and making some other bets, but no avail.</p>
<p class="zh-text">尽管如此，团队还是加倍努力，推出了推荐计划的迭代并做出了一些其他的赌注，但没有效果。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">While the team continued to iterate, it became clear to me that we had to find a different approach to tackle our growth problem.</p>
<p class="zh-text">当团队继续迭代时，我越来越清楚，我们必须找到不同的方法来解决我们的增长问题。</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">重新整合的时刻</h3>
<h3 class="en-text">Time to regroup</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">The aftermath of these back-to-back failures in only a few months was a period of reflection for me about making better product bets.</p>
<p class="zh-text">在短短几个月内接连失败后，我进入了一段关于如何做出更好产品赌注的反思期。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">In hindsight, it became clear why the Gardenscapes moves counter was not a good fit for our product. When you are playing Gardenscapes, each move feels like a strategic decision, because you have to outmaneuver dynamic obstacles to find a path to victory.</p>
<p class="zh-text">事后看来，为什么Gardenscapes移动计数器不适合我们的产品变得清晰了。当你玩Gardenscapes时，每次移动都感觉像是一个战略决策，因为你必须智胜动态障碍才能找到胜利之路。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">But strategic decision-making isn&#x27;t required to complete a Duolingo lesson—you mostly either know the answer to a question or you don&#x27;t. Because there wasn&#x27;t any strategy to it, the Duolingo moves counter was simply a boring, tacked-on nuisance.</p>
<p class="zh-text">但完成Duolingo课程不需要战略决策——你大多要么知道问题的答案，要么不知道。因为没有任何策略，Duolingo移动计数器只是一个无聊的、附加的麻烦。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">It was the wrong gamification mechanic to adopt into Duolingo. I realized that I had been so focused on the similarities between Gardenscapes and Duolingo that I had failed to account for the importance of the underlying differences.</p>
<p class="zh-text">这是采用到Duolingo的错误游戏化机制。我意识到，我如此专注于Gardenscapes和Duolingo之间的相似之处，以至于我没有考虑到底层差异的重要性。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">It also did not take long to understand why our referral program did not produce Uber-like success. Referrals work for Uber because riders are paying for rides on a never-ending pay-as-you-go system. A free ride is a constant incentive.</p>
<p class="zh-text">理解为什么我们的推荐计划没有产生Uber式的成功也没有花很长时间。推荐对Uber有效，因为乘客在永无止境的按次付费系统上支付乘车费用。免费乘车是一个持续的激励。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">For Duolingo, we were trying to incentivize users by offering a free month of Super Duolingo. However, our best and most active users already had Super Duolingo, and we couldn&#x27;t give them a free month when they were already in a plan.</p>
<p class="zh-text">对于Duolingo，我们试图通过提供一个月的免费Super Duolingo来激励用户。然而，我们最好和最活跃的用户已经拥有Super Duolingo，当他们已经在计划中时，我们无法给他们免费的一个月。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">This meant that our strategy, which needed to rely on our best users, actually excluded them. In both of these situations, we had borrowed successful features from other products, but the wrong way.</p>
<p class="zh-text">这意味着，我们的策略需要依赖我们最好的用户，实际上却排除了他们。在这两种情况下，我们都从其他产品借用了成功的功能，但方式错误。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We had failed to account for how a change in context can impact the success of a feature. I came away from these attempts realizing that I needed a better understanding of how to borrow ideas from other products intelligently.</p>
<p class="zh-text">我们没有考虑到上下文的变化如何影响功能的成功。我从这些尝试中意识到，我需要更好地理解如何智能地从其他产品借用想法。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Now when looking to adopt a feature, I ask myself: Why is this feature working in that product? Why might this feature succeed or fail in our context, i.e. will it translate well? What adaptations are necessary to make this feature succeed in our context?</p>
<p class="zh-text">现在，当考虑采用功能时，我会问自己：为什么这个功能在那个产品中有效？为什么这个功能在我们的上下文中可能成功或失败，即它会很好地转化吗？需要进行哪些调整才能使这个功能在我们的上下文中成功？</p>
</div>
<div class="bilingual-pair">
<p class="en-text">In other words, we needed to use better judgment in adapting when adopting. Being more systematic in just this area would have made a big difference in what gamification mechanics we chose to pursue. I was committed to making sure our next attempts would be more methodical.</p>
<p class="zh-text">换句话说，我们需要在采用时更好地运用判断力进行适应。仅仅在这个领域更加系统化就会产生很大的不同。我致力于确保我们的下一次尝试会更加系统化。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We needed to be better at basing our decisions on data, insights, and foundational principles.</p>
<p class="zh-text">我们需要更好地基于数据、洞察和基本原则来做出决策。</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">第三阶段：使用数据和模型</h3>
<h3 class="en-text">Phase 3: Using data and models</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">Duolingo has always excelled at collecting data, especially in support of A/B testing. But there hadn&#x27;t been much effort put into using the data for insights generation.</p>
<p class="zh-text">多邻国一直擅长收集数据，特别是支持A/B测试的数据。但之前没有太多努力将数据用于洞察生成。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Having seen from the inside how Zynga and MyFitnessPal used data, I felt we could use Duolingo&#x27;s data to find a North Star metric and get the breakthrough we needed.</p>
<p class="zh-text">在从内部看到Zynga和MyFitnessPal如何使用数据后，我觉得我们可以使用多邻国的数据来找到一个北极星指标，并获得我们需要的突破。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">My time at Zynga and MyFitnessPal gave us inspiration on how to segment and model our users by engagement level. Zynga separated their users and measured retention based on the following weekly retention metrics:</p>
<p class="zh-text">我在Zynga和MyFitnessPal的时间给了我们关于如何按参与度细分和建模用户的灵感。Zynga根据以下每周留存指标分离用户并衡量留存率：</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• Current users retention rate (CURR): The chance a user comes back this week if they came to the product each of the past two weeks</p>
<p class="zh-text">• 当前用户留存率（CURR）：如果用户在过去两周每周都来到产品，他们本周回来的几率</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• New users retention rate (NURR): The chance a user comes back this week if they were new to the product last week</p>
<p class="zh-text">• 新用户留存率（NURR）：如果用户上周是产品的新用户，他们本周回来的几率</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• Reactivated user retention rates (RURR): The chance a user comes back this week if they reactivated last week</p>
<p class="zh-text">• 重新激活用户留存率（RURR）：如果用户上周重新激活，他们本周回来的几率</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Later, when I worked at MyFitnessPal, I found that they had adopted and expanded Zynga&#x27;s retention work. They not only used CURR, NURR, and RURR to measure growth but also to model future scenarios. They also added SURR:</p>
<p class="zh-text">后来，当我在MyFitnessPal工作时，我发现他们采用并扩展了Zynga的留存工作。他们不仅使用CURR、NURR和RURR来衡量增长，还用于建模未来情景。他们还添加了SURR：</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• Resurrected user retention rate (SURR): The chance a user comes back this week if they resurrected (from a longer absence) last week</p>
<p class="zh-text">• 复活用户留存率（SURR）：如果用户上周复活（从更长时间的缺席中），他们本周回来的几率</p>
</div>
<div class="bilingual-pair">
<p class="en-text">I hypothesized that we could use these metrics at Duolingo as a starting point to create a more sophisticated model, and use that model to identify a North Star metric.</p>
<p class="zh-text">我假设我们可以在多邻国使用这些指标作为起点来创建更复杂的模型，并使用该模型来识别北极星指标。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Working with the data scientist and the engineer manager in the Acquisition Team, we came up with the model below. We used the same retention rates as Zynga and MyFitnessPal, but we tweaked from a weekly view to a daily view and we added several more metrics.</p>
<p class="zh-text">与获取团队中的数据科学家和工程经理合作，我们想出了下面的模型。我们使用了与Zynga和MyFitnessPal相同的留存率，但我们从每周视图调整为每日视图，并添加了几个更多的指标。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The blocks, or buckets, represent different user segments with different levels of engagement. And every single user who has ever used the product is in one, and only one, bucket on any given day.</p>
<p class="zh-text">这些块或桶代表不同参与度水平的不同用户细分。每个曾经使用过产品的用户在任何给定的一天都在一个且仅一个桶中。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">That means the buckets in the model are MECE (mutually exclusive, collectively exhaustive) in representing the entire base of users who have ever used Duolingo. The arrows measure the movement of users between the buckets (these include CURR, NURR, RURR, and SURR, but evolved into daily retention rates rather than weekly).</p>
<p class="zh-text">这意味着模型中的桶在代表曾经使用过多邻国的整个用户群方面是MECE（相互排斥，集体穷尽）的。箭头衡量用户之间的桶之间的移动（这些包括CURR、NURR、RURR和SURR，但演变为每日留存率而不是每周）。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Combining the buckets and the arrows, the model creates an almost closed-circuit system, with new users being the only break. Conveniently, the top four buckets of the model add up to DAU. Those buckets are defined as:</p>
<p class="zh-text">结合桶和箭头，模型创建了一个几乎闭环的系统，新用户是唯一的突破口。方便的是，模型的前四个桶加起来就是DAU。这些桶定义为：</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• New users: first day of engagement ever in the app</p>
<p class="zh-text">• 新用户：在应用中的第一个参与日</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• Current users: engaged today and at least one other time in the prior 6 days</p>
<p class="zh-text">• 当前用户：今天参与，并在过去6天中至少参与过一次</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• Reactivated users: first day of engagement after being away for 7-29 days</p>
<p class="zh-text">• 重新激活用户：在离开7-29天后第一次参与</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• Resurrected users: first day of engagement after being away for 30 days or longer</p>
<p class="zh-text">• 复活用户：在离开30天或更长时间后第一次参与</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The remaining three buckets represent users who were not active today and have different degrees of inactivity.</p>
<p class="zh-text">剩下的三个桶代表今天不活跃的用户，有不同的不活跃程度。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• At-risk WAU: inactive today, but active in at least one of the prior 6 days</p>
<p class="zh-text">• 风险周活跃用户：今天不活跃，但在过去6天中至少有一天活跃</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• At-risk MAU: inactive in the past seven days, but active in at least one of the prior 23 days</p>
<p class="zh-text">• 风险月活跃用户：过去七天不活跃，但在过去23天中至少有一天活跃</p>
</div>
<div class="bilingual-pair">
<p class="en-text">• Dormant users: inactive in the past 31 days or longer</p>
<p class="zh-text">• 休眠用户：过去31天或更长时间不活跃</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The fact that DAU, WAU, and MAU can easily be calculated from these buckets made it easy to model them over time. This is a key feature of the model. Additionally, by manipulating the rates represented by the arrows, we can model the compounding and cumulative impact of moving these rates over time; in other words, the rates are the levers product teams can pull to grow DAU.</p>
<p class="zh-text">DAU、WAU和MAU可以轻松地从这些桶中计算出来，这是该模型的一个关键特性。此外，通过操纵箭头代表的比率，我们可以建模这些比率随时间的复合和累积影响；换句话说，这些比率是产品团队可以拉动以增长DAU的杠杆。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">With the model created, we started taking daily snapshots of data to create a history of how all of these user buckets and retention rates had evolved on a day-by-day basis over the past several years.</p>
<p class="zh-text">创建模型后，我们开始拍摄每日数据快照，以创建过去几年所有这些用户桶和留存率如何逐日演变的历史记录。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">With this data, we could create a forward-looking model and then perform a sensitivity analysis to predict which levers would have the biggest impact on DAU growth. We ran a simulation for each rate, where we moved a single rate 2% every quarter for three years, holding all the other rates constant.</p>
<p class="zh-text">有了这些数据，我们可以创建一个前瞻性的模型，然后进行敏感性分析，预测哪些杠杆对DAU增长的影响最大。我们为每个比率运行了一个模拟，每季度将单个比率移动2%，持续三年，保持所有其他比率不变。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Below are the results of our first simulation. It shows how those small 2% movements on each lever impacted forecasted MAU and DAU.</p>
<p class="zh-text">以下是我们第一次模拟的结果。它显示了每个杠杆上这些小的2%移动如何影响预测的MAU和DAU。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We immediately saw that CURR had a gigantic impact on DAU—5 times the impact of the second-best metric. In hindsight, the CURR finding made sense, because the Current User bucket has an interesting characteristic: current users who stay active return to the same bucket.</p>
<p class="zh-text">我们立即看到CURR对DAU有巨大的影响——是第二好指标影响的5倍。事后看来，CURR的发现是有道理的，因为当前用户桶有一个有趣的特征：保持活跃的当前用户会回到同一个桶。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">This produces a compounding effect, which means that CURR is much harder to move, but when it does, it will have a greater impact. Based on this analysis, we knew that CURR was the metric we had to move in order to get that strategic breakthrough we wanted.</p>
<p class="zh-text">这产生了复合效应，这意味着CURR更难移动，但当它移动时，会产生更大的影响。基于这一分析，我们知道CURR是我们必须移动的指标，以获得我们想要的战略突破。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We decided to create a new team, the Retention Team, with CURR as its North Star metric. One of the biggest benefits of focusing on CURR was deciding not to work on things that seemed paramount before, especially new-user retention.</p>
<p class="zh-text">我们决定创建一个新团队——留存团队，以CURR作为其北极星指标。专注于CURR的最大好处之一是决定不做以前看起来至关重要的事情，尤其是新用户留存。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">This was a huge mindset shift for a company that had tremendous success spending years running the bulk of its growth experiments on new users first.</p>
<p class="zh-text">对于一家多年来大部分增长实验都首先针对新用户并取得巨大成功的公司来说，这是一个巨大的思维转变。</p>
</div>`,
    part2: `<div class="bilingual-header h1-header"><h3 class="zh-text">排行榜向量</h3>
<h3 class="en-text">Leaderboards vector</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">With this clear directive, we looked at our historical model data and at our A/B tests going back a few years to see if we had inadvertently done anything that had moved CURR in the past. Surprisingly, we hadn&#x27;t. In fact, CURR had not moved in years.</p>
<p class="zh-text">有了这个明确的指令，我们查看了我们的历史模型数据和过去几年的A/B测试，看看我们是否无意中做过任何在过去移动CURR的事情。令人惊讶的是，我们没有。事实上，CURR多年来一直没有移动。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We had to figure out our first steps to move CURR based on first principles. I still thought gamification was a good place to start when trying to improve retention.</p>
<p class="zh-text">我们必须基于第一原则来弄清楚移动CURR的第一步。我仍然认为游戏化是尝试提高留存率的一个好起点。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Our failure with the Gardenscapes-style moves counter hadn&#x27;t actually disproved any of the original reasons why we believed gamification still had upside for Duolingo—we had only learned that the moves counter was a clumsy attempt at it.</p>
<p class="zh-text">我们与Gardenscapes风格的移动计数器的失败实际上并没有否定我们为什么相信游戏化对多邻国仍有上升空间的任何原始原因——我们只是了解到移动计数器是一个笨拙的尝试。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">This time, we would be more methodical and intelligent about features we added or borrowed. We made sure to apply the lessons from our prior efforts with gamification.</p>
<p class="zh-text">这一次，我们将更加系统和智能地添加或借用功能。我们确保应用从之前游戏化努力中吸取的教训。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">After some consideration, we decided to bet on leaderboards. Here&#x27;s why and how. Duolingo already had a leaderboard for users to compete with their friends and family, but it wasn&#x27;t particularly effective.</p>
<p class="zh-text">经过一些考虑，我们决定押注排行榜。以下是原因和方法。多邻国已经有一个排行榜供用户与朋友和家人竞争，但它并不是特别有效。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Based on my experience at Zynga, I felt that there was a better way. When I started working on Zynga&#x27;s FarmVille 2 game, it included a leaderboard similar to Duolingo&#x27;s existing leaderboard, where users competed with their friends.</p>
<p class="zh-text">根据我在Zynga的经验，我觉得有更好的方法。当我开始从事Zynga的FarmVille 2游戏时，它包括一个类似于多邻国现有排行榜的排行榜，用户与朋友竞争。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">I had hypothesized based on my personal experience as a player that the closeness of the competitor&#x27;s engagement would be more important than the closeness of personal relationships. I thought this would be especially true in a mature product where many users&#x27; friends weren&#x27;t active anymore.</p>
<p class="zh-text">我基于作为玩家的个人经验假设，竞争对手参与度的接近程度比个人关系的接近程度更重要。我认为这在许多用户的朋友不再活跃的成熟产品中尤其如此。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">From our testing at Zynga, that idea turned out to be true. Based on this, I felt a leaderboard system, similar to what I had helped design at Zynga, would succeed in the context of our product.</p>
<p class="zh-text">根据我们在Zynga的测试，这个想法被证明是正确的。基于此，我觉得一个类似于我在Zynga帮助设计的排行榜系统会在我们产品的上下文中成功。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">FarmVille 2&#x27;s leaderboard also included a &#x27;league&#x27; system. Beyond getting to the top of a weekly leaderboard, users had the opportunity to move through a series of league levels (e.g. from the Bronze league to the Silver league to the Gold league).</p>
<p class="zh-text">FarmVille 2的排行榜还包括一个联赛系统。除了登上每周排行榜榜首之外，用户还有机会通过一系列联赛级别（例如从青铜联赛到白银联赛到黄金联赛）。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Leagues provided users with a greater sense of progress and reward, an integral element in game design. They also increased engagement over time, since engaged users move up to more competitive leagues week after week.</p>
<p class="zh-text">联赛为用户提供了更大的进步感和奖励感，这是游戏设计中不可或缺的元素。它们还随着时间的推移增加了参与度，因为参与的用户一周又一周地上升到更具竞争力的联赛。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We felt this feature would translate well to Duolingo&#x27;s existing product because it tapped directly into the common human motivators of competitiveness and progression.</p>
<p class="zh-text">我们觉得这个功能会很好地转化到多邻国的现有产品，因为它直接利用了人类竞争和进步的共同动机。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Users are matched with other users who had a similar level of engagement in the prior week. The top players at the end of this week move up to a higher league the following week.</p>
<p class="zh-text">用户与上周参与度相似的其他用户匹配。本周结束时排名靠前的玩家下周上升到更高的联赛。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Not all aspects of the FarmVille 2 leaderboards would translate well to Duolingo, though. We had to use our judgment to adapt this gaming mechanic to Duolingo&#x27;s context.</p>
<p class="zh-text">然而，FarmVille 2排行榜的并非所有方面都能很好地转化到多邻国。我们必须运用我们的判断力将这种游戏机制适应多邻国的上下文。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">In FarmVille 2, competing in the leaderboard required completing additional kinds of tasks on top of the core gameplay. That was something that we purposefully left out. In the Duolingo context, more tasks would only add unnecessary complexity to language learning.</p>
<p class="zh-text">在FarmVille 2中，在排行榜上竞争需要在核心游戏玩法之上完成额外的任务。这是我们有意排除的东西。在多邻国的上下文中，更多任务只会为语言学习增加不必要的复杂性。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We deliberately made our leaderboard as casual and frictionless as possible; users were automatically opted in and could progress to the top of the first league by merely engaging consistently in their regular language study.</p>
<p class="zh-text">我们故意让我们的排行榜尽可能休闲和无摩擦；用户自动选择加入，只需在他们常规的语言学习中保持一致参与就可以晋升到第一个联赛的顶端。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">By keeping the game mechanic exciting, but making it simpler than in FarmVille 2, we felt like we had struck the right balance of adopting and adapting.</p>
<p class="zh-text">通过保持游戏机制令人兴奋，但比FarmVille 2更简单，我们觉得我们在采用和适应之间取得了正确的平衡。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The leaderboards feature had a huge and almost immediate impact on our metrics. Overall learning time increased by 17%, and the number of highly engaged learners (users who spend at least 1 hour a day for 5 days a week) tripled.</p>
<p class="zh-text">排行榜功能对我们的指标产生了巨大且几乎立即的影响。总体学习时间增加了17%，高度参与的学习者（每天花至少1小时、每周5天的用户）数量增加了两倍。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">At this time, we hadn&#x27;t yet figured out how to calculate statistical significance for CURR, but we saw that our traditional retention metrics (D1, D7, etc.) improved materially and with statistical significance.</p>
<p class="zh-text">当时，我们还没有弄清楚如何计算CURR的统计显著性，但我们看到我们的传统留存指标（D1、D7等）有了实质性的改善，并且具有统计显著性。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Going forward, the leaderboards feature became a vector for improving metrics, and teams continue to optimize the feature to this day. Also importantly, the leaderboard was the Retention Team&#x27;s first breakthrough!</p>
<p class="zh-text">展望未来，排行榜功能成为改善指标的向量，团队至今仍在优化该功能。同样重要的是，排行榜是留存团队的第一个突破！</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">推送通知向量</h3>
<h3 class="en-text">Push notifications vector</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">The Retention Team was completely energized to find more mechanics to keep current users engaged and motivated to practice every day. One area they started to look into was push notifications.</p>
<p class="zh-text">留存团队完全充满活力，寻找更多机制来保持当前用户参与并每天练习的动力。他们开始研究的一个领域是推送通知。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Based on substantial A/B testing in prior years, Duolingo had established that notifications can be a big vector for growth, but that impact had plateaued for us over the years.</p>
<p class="zh-text">基于前几年大量的A/B测试，多邻国已经确定通知可以成为增长的重要向量，但这种影响多年来已经趋于平稳。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">With a re-energized team full of new ideas, we felt it was the right time to revisit this vector.</p>
<p class="zh-text">随着一个充满新想法的重新充满活力的团队，我们觉得这是重新审视这个向量的合适时机。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">As we started diving into this, there was one principle that became paramount. It came from a cautionary tale from Groupon&#x27;s CEO.</p>
<p class="zh-text">当我们开始深入研究这个问题时，有一个原则变得至关重要。它来自Groupon首席执行官的一个警示故事。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">He explained to Luis von Ahn, our CEO, that for a long time, Groupon stuck to one email notification per day. But their team started wondering whether sending more emails would improve metrics.</p>
<p class="zh-text">他向我们的首席执行官Luis von Ahn解释说，很长一段时间，Groupon坚持每天一封电子邮件通知。但他们的团队开始想知道发送更多电子邮件是否会改善指标。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The CEO eventually gave in and allowed his team to test sending one more email to each user each day. This test resulted in a big increase to their target metrics.</p>
<p class="zh-text">首席执行官最终让步，允许他的团队测试每天向每个用户多发送一封电子邮件。这个测试导致他们的目标指标大幅增加。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Encouraged, Groupon kept experimenting, sending more emails, even as many as five a day. Then, in what felt like a change from one day to the next, their email channel lost most of its effectiveness.</p>
<p class="zh-text">受到鼓励，Groupon继续试验，发送更多电子邮件，甚至每天多达五封。然后，在感觉像是从一天到下一天的变化中，他们的电子邮件渠道失去了大部分效力。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Over time, the accumulation of Groupon&#x27;s aggressive email tests had basically destroyed their channel. One often underappreciated risk with aggressively A/B testing emails and push notifications is that it results in users opting out of the channel; and even if you kill the test, those users remain opted out forever.</p>
<p class="zh-text">随着时间的推移，Groupon激进的电子邮件测试的积累基本上摧毁了他们的渠道。积极A/B测试电子邮件和推送通知的一个经常被低估的风险是，它会导致用户选择退出该渠道；即使你终止了测试，这些用户仍然永远选择退出。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Do this many times, and you&#x27;ve destroyed your channel. This was the outcome to avoid. For our push notifications, we established one foundational rule: protect the channel.</p>
<p class="zh-text">这样做很多次，你就摧毁了你的渠道。这是要避免的结果。对于我们的推送通知，我们建立了一个基本规则：保护渠道。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">With this constraint in mind, we decided to give the team a lot of freedom to optimize on dimensions like timing, templates, images, copy, localization, etc., but they could not increase the quantity of notifications without strong justification and CEO approval.</p>
<p class="zh-text">考虑到这一约束，我们决定给团队在时间、模板、图像、文案、本地化等维度上很大的优化自由，但他们不能在没有强有力的理由和CEO批准的情况下增加通知的数量。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Over time, through countless iterations, A/B testing, and a bandit algorithm, the team was able to generate dozens of small- and medium-size wins that have amounted to substantial gains in DAU year after year.</p>
<p class="zh-text">随着时间的推移，通过无数次迭代、A/B测试和bandit算法，团队能够产生数十个中小型胜利，这些胜利逐年累积为DAU的实质性收益。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">A meme about Duolingo&#x27;s &#x27;pushiness&#x27; that went viral in 2019</p>
<p class="zh-text">关于多邻国推送通知的一个梗在2019年走红</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">连续打卡向量</h3>
<h3 class="en-text">The streak vector</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">In the search for even more growth vectors, the APM on the Retention Team started exploring whether there was a strong correlation between retention and usage of particular Duolingo features.</p>
<p class="zh-text">在寻找更多增长向量的过程中，留存团队的APM开始探索留存与特定多邻国功能的使用之间是否存在强相关性。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">He discovered that if a user reached a 10-day streak, their chances of dropping off were reduced substantially. Clearly, a lot of this was simply correlation and selection bias, but we felt the insight was interesting enough to start investing in improving this feature again.</p>
<p class="zh-text">他发现，如果用户达到10天连续打卡，他们流失的几率会大大降低。显然，其中很多只是相关性和选择偏差，但我们觉得这个洞察足够有趣，值得再次投资改进这个功能。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The concept of a streak is really quite simple: show users the number of consecutive days they&#x27;ve done any activity on the app. But it turns out that there is a surprisingly large number of optimization opportunities around streaks.</p>
<p class="zh-text">连续打卡的概念实际上非常简单：向用户展示他们在应用上进行任何活动的连续天数。但事实证明，围绕连续打卡有惊人数量多的优化机会。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">We got our first big win with the streak-saver notification—a notification that alerts users with streaks if they are about to lose their streak. This late-night notification proved that indeed there was considerable upside to doubling down on streak optimizations.</p>
<p class="zh-text">我们通过连续打卡保护通知获得了第一个重大胜利——这是一个向即将失去连续打卡的用户发出的通知。这个深夜通知证明了确实有很大的上升空间可以加倍投入连续打卡优化。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">After this, several improvements followed: calendar views, animations, changes to streak freezes, and streak rewards, among others. Each helped improve upon the original streak idea and generated substantial improvements to retention.</p>
<p class="zh-text">此后，进行了几项改进：日历视图、动画、连续打卡冻结的变化、连续打卡奖励等。每一项都有助于改进原始连续打卡想法，并产生了留存率的实质性改善。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">To date, the streak feature is one of Duolingo&#x27;s most powerful engagement mechanics. When people talk about their Duolingo experience, they often bring up their streak.</p>
<p class="zh-text">迄今为止，连续打卡功能是多邻国最强大的参与机制之一。当人们谈论他们的多邻国体验时，他们经常会提到他们的连续打卡。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">I recently met one user who told me, &#x27;I have a 1,435-day streak!&#x27; and added, &#x27;with no streak freezes!&#x27; His bragging rights were well-earned, as he had been studying his chosen language daily for almost four years.</p>
<p class="zh-text">我最近遇到一位用户，他告诉我，我有1435天的连续打卡！并补充说，没有使用连续打卡冻结！他的吹牛权是当之无愧的，因为他几乎四年来每天都在学习他选择的语言。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Streaks work for a number of reasons. One of those is that a streak increases user motivation over time; the longer the streak is, the greater the impetus to keep the streak going.</p>
<p class="zh-text">连续打卡有效的原因有很多。其中之一是连续打卡会随着时间的推移增加用户动力；连续打卡越长，保持连续打卡的动力就越大。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">When it comes to user retention, this is the exact behavior we want in our users. Each day that a learner comes to Duolingo, they care a bit more about coming back the next day than they did the day before, hence increasing retention and DAU.</p>
<p class="zh-text">在用户留存方面，这正是我们希望用户表现出的行为。每个学习者来到多邻国的日子，他们都比前一天更关心第二天回来，从而增加留存率和DAU。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">As a meta-lesson, our success with the streak mechanic further showed us that we could squeeze major wins from existing features. We could see the value in both big breakthroughs and in fast optimizations. And an A+ team often has a mix of both.</p>
<p class="zh-text">作为一个元教训，我们在连续打卡机制上的成功进一步向我们表明，我们可以从现有功能中挤出重大胜利。我们可以看到重大突破和快速优化的价值。A+团队通常两者兼而有之。</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">超越CURR的增长</h3>
<h3 class="en-text">Growth beyond CURR</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">We didn&#x27;t stop at CURR; there was a very healthy paranoia that at some point CURR would hit a ceiling, so sooner or later we would have to figure out growth vectors for new user acquisition.</p>
<p class="zh-text">我们没有在CURR止步；有一种非常健康的偏执，认为CURR会在某个时候达到上限，所以迟早我们必须弄清楚新用户获取的增长向量。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">The Retention Team stayed focused on increasing CURR, but as a company, we consistently increased our investment in growth by creating more and more Product and Marketing teams to find new vectors (for both retention and acquisition).</p>
<p class="zh-text">留存团队继续专注于提高CURR，但作为一家公司，我们通过创建越来越多的产品和营销团队来寻找新向量（留存和获取），持续增加对增长的投资。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Luckily, several of these bets worked, including expanding internationally, building social features (this is what the Acquisition eventually team pivoted to, with great success), accelerating course content creation, working with influencers, increasing our presence in schools, investing (a little bit) in paid UA, and going crazy viral on TikTok. Each of these merits its own case study.</p>
<p class="zh-text">幸运的是，这些赌注中有几个奏效了，包括国际扩张、构建社交功能（这是获取团队最终转向的，取得了巨大成功）、加速课程内容创建、与影响者合作、增加我们在学校的存在、（少量）投资付费UA，以及在TikTok上疯狂走红。每一项都值得有自己的案例研究。</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">总体结果</h3>
<h3 class="en-text">Overall results</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">Through our efforts over four years, we were able to increase CURR by 21%, which represents a reduction in the daily churn of our best users by over 40% and, together with our other successful bets, led to an increase in our DAU of 4.5x.</p>
<p class="zh-text">通过我们四年的努力，我们能够将CURR提高21%，这代表我们最好用户的每日流失率降低超过40%，加上我们其他成功的赌注，导致我们的DAU增加了4.5倍。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Last year was one of the fastest growth rates in Duolingo&#x27;s history. The quality of the user base also improved; the share of our DAU with a streak of 7 days or longer increased almost 3 times to more than half of our DAU.</p>
<p class="zh-text">去年是多邻国历史上增长最快的年份之一。用户群的质量也提高了；我们DAU中连续打卡7天或更长时间的用户份额增加了近3倍，达到我们DAU的一半以上。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">This means that not only does Duolingo have a much higher number of active users now, but also that those users are much more likely to keep coming back, refer their friends, and subscribe to Super Duolingo. This growth was key to Duolingo&#x27;s successful IPO.</p>
<p class="zh-text">这意味着多邻国现在不仅有更多的活跃用户，而且这些用户更有可能继续回来、推荐他们的朋友，并订阅Super Duolingo。这种增长是多邻国成功IPO的关键。</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">临别思考</h3>
<h3 class="en-text">Parting thoughts</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">I hope that this article gives you the inspiration you need to find new vectors of growth for your product. If you adopt anything from my experience at Duolingo, I hope you adapt it to your own context using your best judgment.</p>
<p class="zh-text">我希望这篇文章能给你找到产品新增长向量所需的灵感。如果你从我在多邻国的经验中采用任何东西，我希望你运用你最好的判断力将其适应到你自己的上下文中。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Don&#x27;t blindly trust what Duolingo or any other company did. Certainly that didn&#x27;t work for me. Happy experimenting!</p>
<p class="zh-text">不要盲目相信多邻国或任何其他公司所做的事情。当然，这对我没有用。祝实验愉快！</p>
</div>
<div class="bilingual-header h1-header"><h3 class="zh-text">致谢</h3>
<h3 class="en-text">Acknowledgements</h3>
</div>
<div class="bilingual-pair">
<p class="en-text">Gamification Team: You know who you are. Thank you for teaching me so much!</p>
<p class="zh-text">游戏化团队：你们知道你们是谁。谢谢你们教会了我这么多！</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Acquisition Team: Vanessa Jameson (Engineer Director), Cem Kansu and Liz Nagler (PMs on the team, now VP of Product and Product Area Lead for Growth, respectively), and the rest of the team, who worked super-hard and eventually made a smart and successful pivot to work on social features.</p>
<p class="zh-text">获取团队：Vanessa Jameson（工程总监）、Cem Kansu和Liz Nagler（团队的产品经理，现在分别是产品副总裁和增长产品领域负责人），以及团队的其他成员，他们非常努力地工作，最终明智而成功地转向社交功能。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Shoutout to Nico Sacheri (Principal PM) and Hideki Shima (Eng Director), who have been crushing it leading the Connections team for the past couple of years.</p>
<p class="zh-text">向Nico Sacheri（首席产品经理）和Hideki Shima（工程总监）致敬，他们在过去几年里一直领导着Connections团队并取得了巨大成功。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Growth Model: Erin Gustafson (Staff Data Scientist) and Vanessa Jameson, who collaborated with me in the creation of the growth model.</p>
<p class="zh-text">增长模型：Erin Gustafson（高级数据科学家）和Vanessa Jameson，他们与我合作创建了增长模型。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Retention Team: Sean Colombo (OG Engineer Manager for the team, and now Eng Area Lead for Growth), Daniel Falabella (OG PM for the team, now GM for Duolingo ABC), John Trivelli (Designer on leaderboards), Anton Yu (PM who &#x27;re-discovered&#x27; streaks and so much more), Jackson Shuttleworth and Osman Mansur (Sr. PM and PM on the team today, still crushing it), Antonia Scheidel (Engineering Manager, also crushing it), and all the wonderful engineers and designers who have worked and continue to work on this team.</p>
<p class="zh-text">留存团队：Sean Colombo（团队的原始工程经理，现在是增长工程领域负责人）、Daniel Falabella（团队的原始产品经理，现在是Duolingo ABC的总经理）、John Trivelli（排行榜设计师）、Anton Yu（重新发现连续打卡等等的产品经理）、Jackson Shuttleworth和Osman Mansur（团队的高级产品经理和产品经理，今天仍在努力），Antonia Scheidel（工程经理，也在努力），以及所有曾经并继续在这个团队工作的优秀工程师和设计师。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Gina Gotthilf, who was a total growth rock star in Duolingo&#x27;s early years.</p>
<p class="zh-text">Gina Gotthilf，她在多邻国早期是一位完全的增长摇滚明星。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Luis von Ahn (CEO) and Tyler Murphy (Chief Designer), with whom I reviewed every single product change for almost five years.</p>
<p class="zh-text">Luis von Ahn（首席执行官）和Tyler Murphy（首席设计师），在近五年的时间里，我与他们一起审查了每一个产品变更。</p>
</div>
<div class="bilingual-pair">
<p class="en-text">Thank you, Jorge! You can follow Jorge for more on LinkedIn and Twitter. Have a fulfilling and productive week!</p>
<p class="zh-text">谢谢Jorge！你可以在LinkedIn和Twitter上关注Jorge获取更多信息。祝你有一个充实而高效的一周！</p>
</div>`
};
