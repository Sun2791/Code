import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as r,a as t,d as n,b as e,e as s}from"./app-f79160ec.js";const l={},c=t("h1",{id:"mysql数据类型",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mysql数据类型","aria-hidden":"true"},"#"),n(" MySQL数据类型")],-1),d={href:"https://javabetter.cn/mysql/table.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://javabetter.cn/zhishixingqiu/paicoding.html",target:"_blank",rel:"noopener noreferrer"},g=s('<figure><img src="https://cdn.tobebetterjavaer.com/stutymore/data-type-20240201164851.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>目前用到了 bigint、tinyint、varchar、int、timestamp 等数据类型，这些数据类型到底该如何选择呢？就需要我们提前先了解清楚，MySQL 到底支持哪些数据类型，以及每种数据类型的特点是什么。</p><h2 id="整数类型" tabindex="-1"><a class="header-anchor" href="#整数类型" aria-hidden="true">#</a> 整数类型</h2><p>上面提到的 bigint、tinyint、int 都是整数类型，MySQL 支持的整数类型如下：</p><table><thead><tr><th style="text-align:left;">类型名称</th><th style="text-align:left;">存储空间</th><th style="text-align:left;">范围</th></tr></thead><tbody><tr><td style="text-align:left;">tinyint</td><td style="text-align:left;">1 字节</td><td style="text-align:left;">-128 到 127 或者 0 到 255</td></tr><tr><td style="text-align:left;">smallint</td><td style="text-align:left;">2 字节</td><td style="text-align:left;">-32768 到 32767 或者 0 到 65535</td></tr><tr><td style="text-align:left;">mediuint</td><td style="text-align:left;">3 字节</td><td style="text-align:left;">-8388608 到 8388607 或者 0 到 16777215</td></tr><tr><td style="text-align:left;">int</td><td style="text-align:left;">4 字节</td><td style="text-align:left;">-2147483648 到 2147483647 或者 0 到 4294967295</td></tr><tr><td style="text-align:left;">bigint</td><td style="text-align:left;">8 字节</td><td style="text-align:left;">-9223372036854775808 到 9223372036854775807 或者 0 到 18446744073709551615</td></tr></tbody></table><p>smallint 和 mediuint 这两种类型很少用到，一般我们用的是 tinyint、int、bigint 这三种类型。</p><p>比如说技术派中 article 表的文章类型字段 article_type，就是用 tinyint 类型定义的，因为文章类型只有 1（博文）、2（问答）种，所以用 tinyint 就足够了。</p><p>再比如说状态 status 字段，也是用 tinyint 类型定义的，因为状态我们只有 0（未发布）、1（发布）两种。</p><p>以及 deleted 字段，也是用 tinyint 类型定义的，因为删除状态一般只有 0（未删除）、1（已删除）两种。</p><p>那像 int 一般用于用户的年龄啊、库存数量啊、评论数量啊、点赞数量啊等等。</p><p>技术派中 article 表的 offical_stat（官方推荐状态）、topping_stat（置顶状态）、cream_stat（加精状态）用了 int 类型，其实不太合理，应该用 tinyint 类型就足够了。暂时也就懒得改了。</p><p>bigint 我们用到了表的主键上，这也是一种比较常见的做法，尤其是当预计数量超过 int 的最大值（21 亿）时，但是就技术派目前的数量来看，用 int 就足够了。</p><p>我之前在做大宗期货交易的订单时，一开始用的是 int 类型，后来还真的出现了超出 int 范围的情况，所以后来改成了 bigint 类型。</p><p>bigint 的最大值是 9223372036854775807，也就是 922 亿亿，这个数字非常非常大，往往到这个数量级的都要做分库分表了。</p>',14),h={href:"https://zhuanlan.zhihu.com/p/85837641",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"CHAR(36)",-1),b=t("code",null,"VARCHAR(36)",-1),m={href:"https://javabetter.cn/mysql/suoyin.html",target:"_blank",rel:"noopener noreferrer"},k=t("h3",{id:"有符号和无符号",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#有符号和无符号","aria-hidden":"true"},"#"),n(" 有符号和无符号")],-1),_=t("p",null,"整型数据类型还可以选择有符号和无符号，有符号就是可以存储正数和负数，无符号就是只能存储正数。默认为有符号，也就是不用指定。",-1),y=t("p",null,"比如说 int 类型，如果是有符号的，那么范围是 -2147483648 到 2147483647，如果是无符号的，那么范围是 0 到 4294967295。",-1),v=t("figure",null,[t("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/data-type-20240202084103.png",alt:"from MySQL 官网",tabindex:"0",loading:"lazy"}),t("figcaption",null,"from MySQL 官网")],-1),x=t("p",null,[t("strong",null,"无符号的情况下，要特别注意和 Java 数据类型的对应关系"),n("。")],-1),j={href:"https://javabetter.cn/basic-grammar/basic-data-type.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://javabetter.cn/basic-extra-meal/box.html",target:"_blank",rel:"noopener noreferrer"},L=s('<figure><img src="https://cdn.tobebetterjavaer.com/stutymore/data-type-20240202081618.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>像自增 ID，肯定是无符号的，所以我们会在定义的时候将其设置为 <code>unsigned</code>，比如说技术派项目中的 article 表。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/data-type-20240202082214.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="int-10-和-int" tabindex="-1"><a class="header-anchor" href="#int-10-和-int" aria-hidden="true">#</a> int(10) 和 int</h3><p>注意，上图中我们在定义 id 的时候，设置的数据类型是 <code>int(10)</code>，和 int 有什么区别呢？</p><p>这其实是一道不错的面试题，比如说面试官可能会问你，<code>int(10)</code> 和 <code>int(11)</code> 有什么区别？</p><p>如果之前没有了解过的话，可能一下子就懵了。其实这个和存储空间没有关系，只是用来规定显示宽度的。</p><p>我们来创建这样一张测试表，包含四个字段，一个是主键 ID，一个是 <code>int(10)</code>，一个是 <code>int(11)</code>，另外一个是 int。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>test<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>int10<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>int11<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>int<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里的反引号 ` 是为了避免关键字冲突。</p></blockquote><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/data-type-20240202083135.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后我们插入一条数据，看看结果。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>test<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>int10<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>int11<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>int<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1234567890</span><span class="token punctuation">,</span> <span class="token number">1234567890</span><span class="token punctuation">,</span> <span class="token number">1234567890</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',13),q={href:"https://javabetter.cn/mysql/select-simple.html",target:"_blank",rel:"noopener noreferrer"},w=t("figure",null,[t("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/data-type-20240202083253.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),N=t("p",null,[n("我们来看一下 MySQL 官方对 "),t("code",null,"int(M)"),n(" 的解释。")],-1),E=t("blockquote",null,[t("p",null,"M indicates the maximum display width for integer types.")],-1),I=t("p",null,"。。。。。",-1),M=t("h2",{id:"付费内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#付费内容","aria-hidden":"true"},"#"),n(" 付费内容")],-1),S={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},T=t("a",{href:"%5D(https://javabetter.cn/jvm/)"},"链接",-1),U=t("figure",null,[t("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/readme-20240116130809.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),D={href:"https://javabetter.cn/zhishixingqiu/mianshi.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://paicoding.com/column/7/1",target:"_blank",rel:"noopener noreferrer"},R={href:"https://javabetter.cn/zhishixingqiu/mianshi.html",target:"_blank",rel:"noopener noreferrer"},Q=s('<figure><img src="https://cdn.tobebetterjavaer.com/stutymore/class-load-vip-20240116135627.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>除此之外，还可以为你提供：</p><ul><li><strong>专属的一对一提问交流</strong>，如何准备面试，如何制定学习计划，如何选择 offer，以及职场规划，都能得到我 1v1 的指导和建议；</li><li><strong>强大的嘉宾阵容</strong>，有微信的、字节的、小米的、百度的、国企的、外企的、阿里的等等各方大佬。如果你的问题二哥解决不了，总有一个大佬能够帮你解决。</li><li><strong>为你精挑细选了一些可以写到简历上，可以提高编程功底的优质实战项目</strong>，比如说动态线程池 hippo4j、手写数据库 MYDB、Spring Boot 的前后端分离项目技术派等等，无论你是缺少项目经验的学生党，还是有一定经验的工作党，这些项目都能帮助你完成技术上的蜕变和提升。</li><li><strong>星球会定期整理和分享优质的学习资料</strong>，包括 PDF&amp;视频教程&amp;学习资料等等。</li><li><strong>为你提供容易被忽视但又十分重要的简历指导服务</strong>，二哥会事无巨细地帮你指出简历上的问题，打造一份投了就有声音的优质简历。</li><li><strong>为你创造一个沉浸式的学习环境</strong>，二哥的编程星球自上线以来，氛围非常好，有一种高中初中上晚自习，大学进图书馆的感觉，每天都会有很多球友积极打卡，分享自己一天的学习成果。</li></ul><p>学习的路上最缺的就是清晰的学习路线、优质的学习资料和良好的学习氛围，二哥的编程星球恰好就能给你提供这样的服务。来星球的球友几乎都斩获不错的成绩，有美团、华为等大厂，也有 16k 的双非本、甚至 23k 的大专社招，我随便发几个球友报喜的截图给大家展示下。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20231221211916.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20231221213449.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),C={href:"https://javabetter.cn/zhishixingqiu/mianshi.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},O=s('<figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20230904113349.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一共分为 6 大板块，对面试、职场、技术、学习都会帮助特别大。</p><ul><li>面试准备篇（25+篇），手把手教你如何准备面试。</li><li>职场修炼篇（11+篇），手摸手教你如何在职场中如鱼得水。</li><li>学习路线篇（13+篇），手勾手教你如何快速学习一门技术栈。</li><li>技术提升篇（33+篇），手拉手教你如何成为团队不可或缺的技术攻坚小能手。</li><li>面经分享篇（23+篇），手牵手教你如何在面试中知彼知己，百战不殆。</li><li>场景设计篇（22+篇），手握手教你如何在面试中脱颖而出。</li></ul><h3 id="_01、面试准备篇" tabindex="-1"><a class="header-anchor" href="#_01、面试准备篇" aria-hidden="true">#</a> 01、面试准备篇</h3><p>所谓临阵磨枪，不快也光。更何况提前做好充足的准备呢？这 25+篇内容会系统地引导你该如何做好面试准备。涉及到的主题有：简历、源码、LeetCode、项目经验、开源项目、高并发、证书、和 HR 对线、国企名单、公司投递名单、银行、谈薪等等面试常见问题。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/8f43c95b9c03f786f42e314d84842564.png" alt="如何准备面试" tabindex="0" loading="lazy"><figcaption>如何准备面试</figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/d2770ebcf6433388f802d5bdd2db83f3.png" alt="如何写好简历" tabindex="0" loading="lazy"><figcaption>如何写好简历</figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/c3e2e95606aa42f520bcffbb89807fbf.png" alt="秋招投递名单" tabindex="0" loading="lazy"><figcaption>秋招投递名单</figcaption></figure><h3 id="_02、职场修炼篇" tabindex="-1"><a class="header-anchor" href="#_02、职场修炼篇" aria-hidden="true">#</a> 02、职场修炼篇</h3><p>如何平滑度过试用期？如何平滑度过 35 岁程序员危机？如何在繁重的工作中持续成长？如何做副业？如何赚零花钱？如何达到 30 万+年薪等等，都是大家迫切关心的问题，这 11+篇内容会一一为你揭晓答案。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/398dad8b63a4d1fe0998187bf02ec8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_03、技术提升篇" tabindex="-1"><a class="header-anchor" href="#_03、技术提升篇" aria-hidden="true">#</a> 03、技术提升篇</h3><p>编程能力、技术功底，是我们程序员安身立命之本，是我们求职/工作的最核心的武器。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/0b2b08709ff2bfc7fefaa7d079760381.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_04、面经分享篇" tabindex="-1"><a class="header-anchor" href="#_04、面经分享篇" aria-hidden="true">#</a> 04、面经分享篇</h3><p>知彼知己，方能百战不殆，我们必须得站在前辈的肩膀上，才能走得更远更快。他们在面试中遇到过哪些经典的问题，我们能不能提前演练一下，对临场发挥有着至关重要的作用。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/200dac9430e454dafc42551d531c4bb1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_05、场景设计题篇" tabindex="-1"><a class="header-anchor" href="#_05、场景设计题篇" aria-hidden="true">#</a> 05、场景设计题篇</h3><p>有些面试官不喜欢问八股文，反而更喜欢结合项目问一些非常经典的场景题，这种场景题没有标准的答案，但却很能考察一名求职者的逻辑思维能力。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/3a11266fb00df1b1e2c7e9283a82f0bb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="星球限时优惠" tabindex="-1"><a class="header-anchor" href="#星球限时优惠" aria-hidden="true">#</a> 星球限时优惠</h2><p>一年前，星球的定价还是 99 元一年，第一批优惠券的额度是 30 元，等于说 69 元的低价就可以加入，再扣除掉星球手续费，几乎就是纯粹做公益。</p>',22),B={href:"https://javabetter.cn/zhishixingqiu/map.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://javabetter.cn/zhishixingqiu/map.html",target:"_blank",rel:"noopener noreferrer"},H=s('<p>目前星球已经 5000+ 人了，所以星球也涨价到了 149 元，后续会讲星球的价格调整为 159 元/年，所以想加入的小伙伴一定要趁早。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20240521200742.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>你可以微信扫码或者长按自动识别领取 30 元优惠券，<strong>119/年</strong> 加入，新项目 pmhub 上线后会涨价至 159 元，所以想要加入的话请趁早。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20240116131318.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对了，<strong>加入星球后记得花 10 分钟时间看一下星球的两个置顶贴，你会发现物超所值</strong>！</p><p>成功没有一蹴而就，没有一飞冲天，但只要你能够一步一个脚印，就能取得你心满意足的好结果，请给自己一个机会！</p><p>最后，把二哥的座右铭送给你：<strong>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟</strong>。</p><p>共勉 ⛽️。</p>',8);function P(Y,F){const a=o("ExternalLinkIcon");return p(),r("div",null,[c,t("p",null,[n("上一节，我们学了 "),t("a",d,[n("MySQL 表的基本操作"),e(a)]),n("，知道了表是由不同数据类型的列组成的，然后填充了一行一行的数据。")]),t("p",null,[n("当我们要创建表的时候，就要根据业务需求，选择合适的数据类型。比如说在"),t("a",u,[n("技术派实战项目"),e(a)]),n("当中，文章表就是由下面这些不同数据类型的字段定义的。")]),g,t("p",null,[n("另外，对于主键的数据类型选择，不同的业务场景有不同的需求，如果需要确保跨多个数据库或者系统唯一性，那么 UUID 或者"),t("a",h,[n("雪花算法"),e(a)]),n("生成的 ID 会更合适。")]),t("p",null,[n("UUID 不依赖于数据库的自增特性，非常适合分布式系统，但是 UUID 会占用更多的存储空间（"),f,n(" 或 "),b,n("），而且不是递增的，会导致"),t("a",m,[n("索引"),e(a)]),n("的性能下降。")]),k,_,y,v,x,t("p",null,[n("我们都知道，Java 中的 "),t("a",j,[n("int 范围"),e(a)]),n("是 -2147483648 到 2147483647。那如果 MySQL 选择的 int 类型是无符号的，范围就超出了 Java 的 int 类型范围了。")]),t("p",null,[n("这时候，为了避免出现不兼容的情况，Java 的数据类型要选择 long 类型。当然了，在数据库实体（POJO）中，要用"),t("a",z,[n("包装类型"),e(a)]),n(" Long。")]),L,t("p",null,[t("a",q,[n("查询一下"),e(a)]),n("，似乎没有什么区别。")]),w,N,E,I,M,t("p",null,[n("以下内容为"),t("a",S,[n("二哥编程星球"),e(a)]),n("的付费内容（点击"),T,n("可以查看详细介绍和加入方式）。")]),U,t("p",null,[n("加入二哥的编程星球后，你不仅可以阅读完整版的《二哥的 MySQL 进阶之路》内容，还可以阅读更多付费专栏，比如说《"),t("a",D,[n("技术派付费专栏"),e(a)]),n("》、《"),t("a",A,[n("二哥的 LeetCode 刷题笔记"),e(a)]),n("》、《编程喵实战项目笔记》、《"),t("a",R,[n("Java 面试指南"),e(a)]),n("》等等。")]),Q,t("p",null,[n("《"),t("a",C,[n("Java 面试指南"),e(a)]),n("》是"),t("a",J,[n("二哥编程星球的"),e(a)]),n("的一个付费专栏，和《Java 进阶之路》上的内容可以形成很好的互补，截止到目前，已经更新 48 万字，可以说是满满的干货和诚意。")]),O,t("p",null,[n("随着时间的推移，星球积累的干货/资源越来越多，我花在星球上的时间也越来越多，"),t("a",B,[n("星球的知识图谱"),e(a)]),n("里沉淀的问题，你可以戳这个"),t("a",V,[n("链接"),e(a)]),n("去感受一下。有学习计划啊、有学生党秋招&春招&offer选择&考研&实习&专升本&培训班的问题啊、有工作党方向选择&转行&求职&职业规划的问题啊，还有大大小小的技术细节，我都竭尽全力去帮助球友，并且得到了球友的认可和尊重。")]),H])}const W=i(l,[["render",P],["__file","data-type.html.vue"]]);export{W as default};
