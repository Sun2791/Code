import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as s,a as e,d as a,b as r,e as n}from"./app-f79160ec.js";const h={},c=n('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> <a href="#%E5%89%8D%E8%A8%80"></a>前言</h2><p>回想起我的大学之路，难免觉得有些遗憾，因为学校的整体教学水平有限，而自己又缺乏主动去学习的意愿，就导致蹉跎了不少光阴。</p><p>幸好，工作中感受到生存的压力后幡然醒悟，因为我有这样一种紧迫感——再不抓紧点时间去学习，可能就像某某某同事一样被公司无情地辞退了。</p><p>于是，我便真正走上了一条自学计算机的“不归路”。说“不归路”的原因在于，计算机科学是一个非常庞大的知识体系，我花了好多年的时间，仍然感觉到这条路上还有很多的未知等待我去探索。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-70e25595-b36b-408c-a8e4-3a67261826da.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但正因为有太多的未知需要我去探索，所以我每天都能感受到自己在进步，我完全不需要花费数年的光阴去攻读一个学位证书，仅仅依靠我自己，就能获得世界上一流水平的教育。</p><p>互联网上到处都是可以学习的资源，然而精华与糟粕并存。我们需要的，不是“100G”的免费视频教程，或者“500本”的免费电子书，而是：</p><ul><li>我们应当学习哪些科目，为什么？</li><li>对于这些科目，最好的书籍或者视频课程是什么？</li></ul><p>如果你要学习物理，我推荐你顺着物理的发展史学习，先学习牛顿的经典物理，再学习热力学、电磁学，然后学习相对论、量子力学这些彻底推翻经典物理的，最后学习电动力学这种硬核的。</p><p>整个学习过程，是<strong>自底向上</strong>的。但是学计算机，这样行不通。</p><p>先学习电路，然后学习冯诺依曼结构，造一台计算机？接着再学习如何用汇编写个 mini os？接着学习如何写一个简易版的编译器？最后再学习高级编程语言，比如说 Java、Python？</p><p>显然这样是行不通的！计算机的学习最好是<strong>自顶向下</strong>。</p><p>一开始，应该先学一门高级的编程语言，比如说 Java。之后，当你了解到 Java 的性能问题时，你才会发现，啊，原来 Java 是一门解释型的编程语言，而 C 语言是一门编译型的编程语言，所以 Unix/Linux 这种操作系统要用 C 语言来实现，因为要最大限度的利用硬件。</p><p>当你学习到 Java 并发编程中的“原子性”、“同步”、“异步”、“进程”、“内存分配”这些概念的时候，你自然而然会产生很多疑问，然后就会去学习操作系统，学习计算机组成原理，然后你的一系列问题就会逐渐被解决。</p><p>当你发现，用 Java 实现某个业务需求时，人家的算法实现比你快得多，你自然会好奇，为什么会这样？然后你发现人家用的数据结构和你的不同，然后你就会去学习数据结构，接着了解一些高效的算法，比如动态规划等。</p><p><strong>跟着需求去学习，才能真正学好计算机</strong>。没有编程基础就去啃《深入理解计算机系统》这类黑皮书，你很快就会被劝退的。</p><h2 id="编程语言" tabindex="-1"><a class="header-anchor" href="#编程语言" aria-hidden="true">#</a> <a href="#%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80"></a>编程语言</h2><p>编程语言有很多种，Java、Python、C/C++、Go、JavaScript 等等，新手往往会非常纠结，因为害怕失去，即便是还没有一丁点收获之前。</p><p>选择 Java 吧，常听人说“人生苦短，我用 Python”；选择 Python 吧，常听人说“Go 是 Google 的亲儿子，发展势头正劲”；选择 Go 吧，常听人说“前端（JavaScript 必学）更容易学习一些”；选择 JavaScript 吧，常听人说“C/C++ 具备现代程序设计的基础要求，是很多编程语言的基础。”</p><p>然后就麻了！怎么选呢？</p><p>我是从大一就开始学习的 Java，当时没有选择，因为不知道还有其他编程语言（嘘），学校让学 Java 就学了 Java。只能说非常的幸运，选对了。</p><p>你可以去编程语言排行榜（TIOBE，非常权威）看一下——关于近 10 年编程语言的变化。Java 长期霸占着这份榜单，并且还会持续更久，一门编程语言能有这么顽强的生命力，它一定有别的语言所没有的优点，它与生俱来的竞争力是别的语言无法取代的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-322598db-68da-4003-ad38-430fed540d77.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="java-基础" tabindex="-1"><a class="header-anchor" href="#java-基础" aria-hidden="true">#</a> <a href="#java-%E5%9F%BA%E7%A1%80"></a>Java 基础</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-ad65b6e6-7880-4c6d-9af2-24597046a77d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',25),d={href:"https://javabetter.cn/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"有了 二哥的Java进阶之路，你甚至不用去看《Java核心技术卷一》。",-1),b=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-52514452-0643-4c42-8e61-616ff04ed56c.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),u={href:"https://book.douban.com/subject/34898994/",target:"_blank",rel:"noopener noreferrer"},_=n('<ul><li>第三章中的数据类型、变量与常量、运算符、字符串、输入与输出、控制流程、数组；</li><li>第四章中的对象与类、构造方法、final、static、方法参数、方法重载、包、注释；</li><li>第五章的继承、多态、抽象类、方法重写、枚举、反射；</li><li>第六章的接口、Lambda 表达式、内部类、代理；</li><li>第七章的异常、try-with-resource、日志；</li><li>第八章的泛型；</li><li>第九章的集合、链表、队列、Map、栈、算法；</li><li>第十二章的并发编程、线程、同步、synchronized、volatile、原子性、死锁、阻塞队列、CurrentHashMap、CopyOnWriteArrayList、线程池、Callable与Future、fork-join框架、进程；</li></ul><p>因为这本书里囊括的 Java 基础知识，《二哥的Java进阶之路》网站上都囊括了！再推荐两套学习 Java 的视频，戳链接可直达。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-4f7920ff-0dd4-4070-af9d-9f19796efb6c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',3),f={href:"https://www.bilibili.com/video/BV1Rx411876f",target:"_blank",rel:"noopener noreferrer"},g=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-c28c2bc4-7c46-4504-bcf2-da1c8a813153.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m={href:"https://www.bilibili.com/video/BV1Kb411W75N",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"并发编程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#并发编程","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B"}),a("并发编程")],-1),k=e("p",null,"并发编程的部分比较难一些，需要花时间和精力更专注地学一下。",-1),E=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-1f0a8b9d-43f4-42c1-9114-12103db32e80.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),x={href:"https://javabetter.cn/pdf/java-concurrent.html",target:"_blank",rel:"noopener noreferrer"},j=n('<p>我把并发编程中经常被问到的面试题列举一下，你可以拿来自测：</p><ul><li>并行和并发有什么区别?</li><li>线程和进程的区别?</li><li>守护线程是什么?</li><li>创建线程有哪几种方式?</li><li>说一下 runnable 和 callable 有什么区别?</li><li>线程有哪些状态?</li><li>sleep() 和 wait() 有什么区别?</li><li>notify()和 notifyAll()有什么区别?</li><li>线程的 run()和 start()有什么区别?</li><li>创建线程池有哪几种方式?</li><li>线程池都有哪些状态?</li><li>线程池中 submit()和 execute()方法有什么区别?</li><li>在 java 程序中怎么保证多线程的运行安全?</li><li>多线程中 synchronized 锁升级的原理是什么?</li><li>什么是死锁?</li><li>怎么防止死锁?</li><li>ThreadLocal 是什么?有哪些使用场景?</li><li>说一下 synchronized 底层实现原理?</li><li>synchronized 和 volatile 的区别是什么?</li><li>synchronized 和 Lock 有什么区别?</li><li>synchronized 和 ReentrantLock 区别是什么?</li><li>说一下 atomic 的原理?</li><li>Java 内存模型（JMM）、重排序与 happens-before 原则了解吗？</li><li>AQS了解么？原理？AQS 常用组件：Semaphore (信号量)、CountDownLatch （倒计时器） CyclicBarrier(循环栅栏)</li><li>ReentrantLock 、 ReentrantReadWriteLock</li><li>CAS 了解么？原理？</li><li>并发容器：ConcurrentHashMap 、 CopyOnWriteArrayList 、 ConcurrentLinkedQueueBlockingQueue 、ConcurrentSkipListMap</li><li>Future 和 CompletableFuture</li></ul><h3 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> <a href="#jvm"></a>JVM</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-824cf838-00ac-4ebe-b887-3e1e212e5b54.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),B={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},y=n('<ul><li>第二部分（2-5章），主要涉及到内存管理、垃圾收集、性能监控等；</li><li>第三部分（6-9章），主要涉及到类文件结构、类加载机制、字节码执行引擎等；</li></ul><p>第二部分和第三部分是学习的重点。我把 JVM 中经常被问到的面试题列举一下，你可以拿来自测：</p><ul><li>说一下 JVM 的主要组成部分?及其作用?</li><li>说一下 JVM 运行时数据区?</li><li>什么是双亲委派模型?</li><li>说一下类装载的执行过程?</li><li>怎么判断对象是否可以被回收?</li><li>说一下 JVM 有哪些垃圾回收算法?</li><li>说一下 JVM 有哪些垃圾回收器?</li><li>详细介绍一下 CMS 垃圾回收器?</li><li>新生代垃圾回收器和老生代垃圾回收器都有哪些?有什么区别?</li><li>简述分代垃圾回收器是怎么工作的?</li><li>说一下 JVM 调优的工具?</li><li>常用的 JVM 调优的参数都有哪些?</li></ul><p>其实学习 Java 虚拟机不只是为了面试，还能帮我们更深入地理解 Java 这门语言，也能为线上排查问题打下基础。</p><h3 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> <a href="#spring"></a>Spring</h3><p>网上总一些人，会很偏激，认为学 Spring 全家桶没什么用，他的理由是技术迭代太快，框架迟早是会被淘汰的，等你学会了，没准框架就过时了。还有一些人会杠，怎么 Java 程序员变成了 Spring 程序员呢？</p><p>怎么说呢？对于 Java Web 开发来说，Spring 已经成为和 Java 核心库一样的基础设施，如果你想成为一名合格的 Java 程序员，Spring 是必经之路。</p><p>另外，一个很重要的点，就是，自学的过程中，你是没有时间或者没有能力徒手撸一个像 Spring 这样强大的框架的。有了 Spring，就有 AOP 和 IoC，意味着你可以做一些企业级的开发了。再说，Spring 是建立在 Java 之上的一个框架，核心就是 AOP 和 IoC，如果 Java 基础不牢的话，也学不会 Spring。</p><p>你可以先学习 SSM（Spring+Spring MVC+MyBatis），再学习 Spring Boot。Spring Boot 的出现，并不意味着 Spring 和 SpringMVC 已经过时了，从设计目的上来说，Spring Boot 只是实现了 Spring 的自动装配，降低了项目搭建的难度。</p><p>推荐两个视频：</p>',10),S={href:"https://www.bilibili.com/video/BV1NX4y1G7wx",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.bilibili.com/video/BV1PE411i7CV",target:"_blank",rel:"noopener noreferrer"},A=e("h4",{id:"副本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#副本","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E5%89%AF%E6%9C%AC"}),a("副本")],-1),J=e("p",null,"前面是主线，接下来是副本，有时间有精力就可以刷一波。刷副本的作用就是积累声望和经验，让你变得更强壮，好在下一关有更突出的表现。",-1),L=e("p",null,"书籍：",-1),w={href:"https://book.douban.com/subject/2000732/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://book.douban.com/subject/2130190/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://book.douban.com/subject/10484692/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://book.douban.com/subject/30412517/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://mp.weixin.qq.com/s/6jDHa8UgN0Ceqn3nyQ7dUQ",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://book.douban.com/subject/4199741/",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"视频：",-1),F={href:"https://www.bilibili.com/video/BV1DJ411B7cG",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.bilibili.com/video/BV1TW411g7hP",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.bilibili.com/video/BV1FE411P7B3",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.bilibili.com/video/av83622425",target:"_blank",rel:"noopener noreferrer"},W=e("p",null,"开源&官方文档：",-1),T={href:"https://mybatis.org/mybatis-3/zh/java-api.html",target:"_blank",rel:"noopener noreferrer"},G={href:"https://dancon.gitbooks.io/intellij-idea/content/",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,"付费课程：",-1),R={href:"http://gk.link/a/10sUq",target:"_blank",rel:"noopener noreferrer"},H={href:"http://gk.link/a/10sUp",target:"_blank",rel:"noopener noreferrer"},O={href:"https://juejin.cn/book/6844733738119593991",target:"_blank",rel:"noopener noreferrer"},X=e("h3",{id:"one-more-thing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#one-more-thing","aria-hidden":"true"},"#"),a(" one more thing：")],-1),N=e("p",null,"关于编程语言这块，我希望你能再学习一门编程语言，也就是 C 语言，不管是放在一开始学，还是放在学习 Java 语言之后再补，都是有必要的。",-1),K=e("p",null,"因为我们学的是计算机科学（CS），C 语言是一门古老而常青的编程语言，具备现代程序设计的基础要求，它的语法是很多编程语言的基础，比如说 Java。",-1),Z={href:"https://www.icourse163.org/course/ZJU-199001?from=searchPage#/info",target:"_blank",rel:"noopener noreferrer"},$=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-2535b639-2213-4dcf-9d73-42595a5fcbc8.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),ee=e("p",null,"翁恺老师在推荐这门课的时候说过，“这门课就是关于计算机的那些程序是如何被写出来的，写出来的这些人就是普通的人，那么我们当然也能学会怎么把程序写出来。学习编程最基础的那些东西，无非就是如何表达数据，如何计算，如何在计算的时候使用判断啊、循环啊这些手段。”",-1),ae=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-7c60d140-e4d5-449d-9026-67867b9fa008.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),te={href:"https://book.douban.com/subject/1139336/",target:"_blank",rel:"noopener noreferrer"},re=n('<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> <a href="#%E6%95%B0%E6%8D%AE%E5%BA%93"></a>数据库</h2><p>学习一门编程语言，如果不去操作下数据，就感觉这门编程语言空有皮囊却没有灵魂。</p><h3 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> <a href="#sql"></a>SQL</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-d0f18a18-a76a-413b-91b9-3dd7d99a2c76.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),ne={href:"https://book.douban.com/subject/35167240/",target:"_blank",rel:"noopener noreferrer"},oe=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-e8761c04-2585-4bbc-b84b-fb5fd5c9ceaf.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),ie=e("p",null,"CodeWithMosh 是目前市面上能找到的逻辑最清晰，最简单易懂的 SQL 视频教程。尤其对初学者而言，直接入手这个版本能塑造良好的 SQL 编写思维和逻辑能力。",-1),le={href:"https://www.bilibili.com/video/BV1UE41147KC",target:"_blank",rel:"noopener noreferrer"},se=e("h3",{id:"mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),a(),e("a",{href:"#mysql"}),a("MySQL")],-1),he=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-eb7ddcc0-4592-497a-abe4-356211e53577.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),ce={href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"},de=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-235a7d96-699d-4c8c-8f90-114f2aef22fc.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),pe={href:"https://www.bilibili.com/video/BV12b411K7Zu",target:"_blank",rel:"noopener noreferrer"},be=e("h3",{id:"redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis","aria-hidden":"true"},"#"),a(),e("a",{href:"#redis"}),a("Redis")],-1),ue=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-f7d8b6a5-8764-41a9-8bb5-7a8a8f16a7f8.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),_e={href:"https://book.douban.com/subject/30386804/",target:"_blank",rel:"noopener noreferrer"},fe=e("p",null,"在线网站：",-1),ge={href:"https://www.mysqltutorial.org/",target:"_blank",rel:"noopener noreferrer"},me=e("p",null,"其他书籍：",-1),ve={href:"https://book.douban.com/subject/3354490/",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://book.douban.com/subject/24708143/",target:"_blank",rel:"noopener noreferrer"},Ee=e("p",null,"极客时间付费课程：",-1),xe={href:"http://gk.link/a/10sUK",target:"_blank",rel:"noopener noreferrer"},je={href:"http://gk.link/a/10sUL",target:"_blank",rel:"noopener noreferrer"},Be={href:"http://gk.link/a/10sUM",target:"_blank",rel:"noopener noreferrer"},ye={href:"http://gk.link/a/10sFU",target:"_blank",rel:"noopener noreferrer"},Se=e("h2",{id:"数据结构与算法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据结构与算法","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95"}),a("数据结构与算法")],-1),Ce=e("p",null,"计算机科学所赋予人们的最大能量在于对常见算法和数据结构的熟悉。此外，这也可以训练一个人对于各种问题的解决能力，有助于其他领域的学习。",-1),Ae=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-120c9bac-6cfd-4e5d-9a26-124f6af4121e.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Je={href:"https://book.douban.com/subject/19952400/",target:"_blank",rel:"noopener noreferrer"},Le=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-019086f2-aa35-4e88-8fd5-a47b9363a89e.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),we={href:"https://www.bilibili.com/video/BV1JW411i731",target:"_blank",rel:"noopener noreferrer"},Me=e("p",null,"至于练习，我推荐你到 LeetCode 上刷题，Leetcode 上的问题往往有趣且带有良好的解法和讨论。此外，在竞争日益激烈的软件行业，这些问题可以帮助你评估自己应对技术面试中常见问题的能力。我建议你至少刷 300 道题，作为学习的一部分。",-1),ze=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-bdca293f-0448-46db-b1b9-6e39949b7d8d.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Qe={href:"https://javabetter.cn/pdf/java-leetcode.html",target:"_blank",rel:"noopener noreferrer"},Ve=e("p",null,"我的心得就是简单粗暴：从易到难，一遍一遍地刷，尽量使用自己熟悉的编程语言，比如说 Java 程序员尽量用 Java 来解题，这样刷题的幸福感也会提升很大一截。",-1),Ye=e("p",null,"如果不是天赋异禀，不要怕，一开始就是抄题，先把别人的解题思路照着敲出来。刷的题多了，尽量控制一下刷题的时间，掐个点，不能让自己一直想、一直写下去，如果半个小时没有解出来，就果断放弃，去背别人的答案，不要觉得不好意思，等到真的熟了，再去想自己的解题思路。",-1),De=e("p",null,"可以按照下面这个类型来刷就可以了。",-1),Fe=e("p",null,"数组-> 链表-> 哈希表->字符串->栈->队列->树->回溯->贪心->动态规划->图",-1),Pe=e("p",null,"其他书籍：",-1),Ue={href:"https://book.douban.com/subject/4048566/",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://book.douban.com/subject/26302533/",target:"_blank",rel:"noopener noreferrer"},We={href:"https://book.douban.com/subject/27008702/",target:"_blank",rel:"noopener noreferrer"},Te=e("p",null,"极客时间付费课程：",-1),Ge={href:"http://gk.link/a/10sUU",target:"_blank",rel:"noopener noreferrer"},Ie=e("h2",{id:"计算机组成原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#计算机组成原理","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86"}),a("计算机组成原理")],-1),Re=e("p",null,"计算机组成原理，也叫“计算机系统结构”，是了解软件底层的重要视角，但却很容易被忽略。",-1),He=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-05f90cc6-44bd-42eb-9d2c-23e47bb43db3.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Oe={href:"https://book.douban.com/subject/5333562/",target:"_blank",rel:"noopener noreferrer"},Xe=e("p",null,"其他书籍：",-1),Ne={href:"https://book.douban.com/subject/1998341/",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://book.douban.com/subject/26397183/",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://book.douban.com/subject/27051076/",target:"_blank",rel:"noopener noreferrer"},$e={href:"https://book.douban.com/subject/26604008/",target:"_blank",rel:"noopener noreferrer"},ea={href:"https://book.douban.com/subject/4822685/",target:"_blank",rel:"noopener noreferrer"},aa=e("p",null,"视频课程：",-1),ta=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-0472d100-5b28-4ec9-a94c-217ad661a157.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),ra=e("p",null,"弄明白了计算机的组成原理，也就对整个软件开发有了一个系统的认知，不论是计算机的硬件原理，还是软件架构，都能很好的驾驭，随之而来的，我们的职业发展机会也就更多了。如果想深入学习计算机组成原理的话，我推荐哈工大的这门视频课，整体评价非常高。",-1),na={href:"https://www.bilibili.com/video/BV1WW411Q7PF",target:"_blank",rel:"noopener noreferrer"},oa=e("p",null,"付费课程：",-1),ia=e("p",null,"九阳真经是金庸小说《倚天屠龙记》中一本绝顶内功秘笈，程序员的「九阳真经」，我觉得就是计算机组成原理了，因为这里藏着 CPU 运行代码的秘密，藏着虚拟地址转换的秘密，藏着浮点数的秘密……",-1),la={href:"http://gk.link/a/10sUT",target:"_blank",rel:"noopener noreferrer"},sa=e("h2",{id:"操作系统",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#操作系统","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F"}),a("操作系统")],-1),ha=e("p",null,"为什么要学习操作系统呢？第一，面试要考；第二，无论学习哪门子编程语言，比如说 Java、C/C++，都需要和操作系统打交道，像 Java 中的多线程技术，其实是由操作系统来负责进程和线程管理的；第三，学习操作系统，还能学到内存分配方面的知识。",-1),ca=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-e7f73611-9a4b-47a1-8703-73456cce988c.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),da={href:"https://book.douban.com/subject/30297919/",target:"_blank",rel:"noopener noreferrer"},pa={href:"https://book.douban.com/subject/27096665/",target:"_blank",rel:"noopener noreferrer"},ba={href:"https://www.xuetangx.com/course/THU08091000267/5883104?channel=learn_title",target:"_blank",rel:"noopener noreferrer"},ua=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-f43b517a-78c9-4064-836a-6eb275712f88.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),_a={href:"https://www.bilibili.com/video/av21376839",target:"_blank",rel:"noopener noreferrer"},fa=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-bbcd0afb-a240-4b56-b3ba-ea8923878ddf.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),ga=e("p",null,"非常值得每个程序员去刷一刷的，全部都是计算机专业需要掌握的知识点，至少是应该了解的知识点。英文中字版的，观看起来毫无压力。",-1),ma=e("p",null,"极客时间付费课程：",-1),va={href:"http://gk.link/a/10sUV",target:"_blank",rel:"noopener noreferrer"},ka={href:"http://gk.link/a/10sUW",target:"_blank",rel:"noopener noreferrer"},Ea=e("h3",{id:"计算机网络",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#计算机网络","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C"}),a("计算机网络")],-1),xa=e("p",null,"鉴于那么多的关于网络服务端和客户端的软件工程，计算机网络是计算机科学中价值最为“立竿见影”的领域之一。",-1),ja=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-1a95df68-4aab-4e2a-8f72-e14d629819fe.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Ba={href:"https://book.douban.com/subject/30280001/",target:"_blank",rel:"noopener noreferrer"},ya={href:"https://gaia.cs.umass.edu/kurose_ross/wireshark.htm",target:"_blank",rel:"noopener noreferrer"},Sa=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-dae8a174-e854-487a-badc-bb93ba6f4bbb.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Ca={href:"https://www.bilibili.com/video/BV1c4411d7jb",target:"_blank",rel:"noopener noreferrer"},Aa=e("p",null,"其他书籍：",-1),Ja={href:"https://book.douban.com/subject/26941639/",target:"_blank",rel:"noopener noreferrer"},La={href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"},wa={href:"https://book.douban.com/subject/24737674/",target:"_blank",rel:"noopener noreferrer"},Ma={href:"https://book.douban.com/subject/1088054/",target:"_blank",rel:"noopener noreferrer"},za=n('<h3 id="前端-全栈" tabindex="-1"><a class="header-anchor" href="#前端-全栈" aria-hidden="true">#</a> <a href="#%E5%89%8D%E7%AB%AF%E5%85%A8%E6%A0%88"></a>前端&amp;全栈</h3><p>// TODO</p><h3 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统" aria-hidden="true">#</a> <a href="#%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F"></a>分布式系统</h3><p>// TODO</p><h3 id="英语能力" tabindex="-1"><a class="header-anchor" href="#英语能力" aria-hidden="true">#</a> <a href="#%E8%8B%B1%E8%AF%AD%E8%83%BD%E5%8A%9B"></a>英语能力</h3><p>对于我们程序员来说，英语就好像空气一样重要，一呼一吸之间都离不开她。如果空气质量不那么好的话，你是不是就有点缺氧的感觉，同样的，如果英语功底差点意思的话，编程也会感到很吃力。</p><p>英语用得好，你可以轻松地阅读和查看国外最新的技术文档。</p><p>英语用得好，你可以徜徉在源码的海洋里，肆无忌惮地汲取精华。</p><p>英语用得好，你可以惬意地聆听斯坦福等名校在网上的公开课，跟随真正的大牛，学到最原汁原味的技术。</p><p>英语用得好，退一万步讲，你在敲代码的时候再也不用担心方法、变量和类的命名不够优雅了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-0eee1a08-7b44-4311-9b00-ef01a0bc0909.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11),Qa={href:"https://github.com/xiaolai/everyone-can-use-english",target:"_blank",rel:"noopener noreferrer"},Va={href:"https://mp.weixin.qq.com/s/yjBldT9YShWd6cnDIg6RuQ",target:"_blank",rel:"noopener noreferrer"},Ya=n('<h3 id="简历" tabindex="-1"><a class="header-anchor" href="#简历" aria-hidden="true">#</a> <a href="#%E7%AE%80%E5%8E%86"></a>简历</h3><p>简历要怎么样写，才能打造一个独一无二的你呢？才能让招聘方知道你做过什么？能做什么呢？我来简单的列举一下。</p><p>1）个人信息</p><ul><li>姓名</li><li>年龄</li><li>手机</li><li>邮箱（推荐使用 Gmail，因为可以无形“高大上”，给招聘方一种专业的 feel）</li></ul><p>2）教育经历</p><p>只写最高学历就行了；博士就写博士，没必要再写什么时候考的研；本科就写本科，没必要再写什么时候专升本。如果学历不好，也不要担心，可以在项目经验中多突出一些。</p><p>3）工作经历</p><p>可以根据招聘方的要求，适当地做一些调整，比如说，应聘的岗位是开发，就没有必要写之前做运维，做测试的工作经历。</p><p>如果工作经验比较丰富的话，尽量按照时间倒序来写，因为越后面的项目，肯定难度更大，技术含量更高，对吧，不要一步一个台阶往下迈。</p><p>懂得适可而止，不要事无巨细，把所有项目的细节都罗列上。只需要交代三个重要的项目就行了。项目的背景是什么，你在其中的职责，项目用到的技术栈（最好是招聘信息上要求的那些），最好突出你做出了哪些特殊的贡献（证明你确实有能力）。</p><p>4）加分项</p><ul><li>有一个访问量很不错的博客。</li><li>有一个星标很高的开源作品。</li><li>出过一些技术图书。</li><li>在行业大会上做过分享。</li><li>参加过一些出名的竞赛，获得过优异的成绩。</li><li>记住一点，简历并不是单纯意义上的自我介绍，比如说我是沉默王二，今年 18 岁，来自洛阳，毕业于某某学校。这样的简历太苍白了。</li></ul><p>简历就好像电梯广告的单页一样，它富有鲜活的生命力，它在呐喊，它不需要过多的润色，只需要铿锵有力、赤裸裸的“炫耀”。</p><p>比如说我是沉默王二， 2019 年参与了 XXX 项目的开发。作为项目团队的核心 开发人员，我不仅能够提前完成自己的开发任务，还设计了一个高效的缓存中间件，大大提高了系统的性能。</p><p>该中间件上线后，Web 前端性能从 10 QPS 提升到 120 QPS，服务器由 10 台缩减为 5 台。</p><p>鉴于之前的良好表现，我在 2020 年升任项目的主要负责人，虽然小组成员只有 15 个，但硬生生地肩负起了每天超过 2000 万的 PV。</p><p>看，这样的简历是不是让人耳目一新，证明自己价值的同时，没有过多的粉饰，让招聘方觉得你很靠谱，迫切地想要把你这个人才“抢”到手，免费被别的公司挖走了。</p><p>简历上的内容不要太多，尽量不要超过一页，因为招聘方没有那么多时间去翻看你的简历。我是挺相信第一印象的，好的简历看一眼就会过目不忘，真的。</p>',18),Da={href:"https://javabetter.cn/pdf/jianli.html",target:"_blank",rel:"noopener noreferrer"},Fa=e("h2",{id:"面经-面试题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#面经-面试题","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E9%9D%A2%E7%BB%8F%E9%9D%A2%E8%AF%95%E9%A2%98"}),a("面经&面试题")],-1),Pa=e("p",null,"你可以把我整理的这份题库过一下，题库分为十九个模块，分别是：Java 基础、容器、多线程、反射、对象拷贝、Java Web 模块、异常、网络、设计模式、Spring/Spring MVC、Spring Boot/Spring Cloud、Hibernate、Mybatis、RabbitMQ、Kafka、Zookeeper、MySql、Redis、JVM，足足 208 道：",-1),Ua=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-37cbc58f-2ced-4334-abc5-d74263008d80.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),qa={href:"https://javabetter.cn/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},Wa=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-57502a19-c872-4a02-8347-3a4231cffd7e.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Ta={href:"https://mp.weixin.qq.com/s/s0_XzGjHcgk2RwbCRzmgHg",target:"_blank",rel:"noopener noreferrer"},Ga=e("h2",{id:"全部汇总",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#全部汇总","aria-hidden":"true"},"#"),a(),e("a",{href:"#%E5%85%A8%E9%83%A8%E6%B1%87%E6%80%BB"}),a("全部汇总")],-1),Ia=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexijianyi/LearnCS-ByYourself-8614a576-2644-4f7a-a0b3-b133c6b35f45.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Ra=e("p",null,"我把所有的电子书都放在另外一个仓库了：",-1),Ha={href:"https://github.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},Oa={href:"https://gitee.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},Xa=n('<h2 id="常见问题解答" tabindex="-1"><a class="header-anchor" href="#常见问题解答" aria-hidden="true">#</a> <a href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94"></a>常见问题解答</h2><h3 id="这份自学指南的目标受众是" tabindex="-1"><a class="header-anchor" href="#这份自学指南的目标受众是" aria-hidden="true">#</a> <a href="#%E8%BF%99%E4%BB%BD%E8%87%AA%E5%AD%A6%E6%8C%87%E5%8D%97%E7%9A%84%E7%9B%AE%E6%A0%87%E5%8F%97%E4%BC%97%E6%98%AF"></a>这份自学指南的目标受众是？</h3><ul><li>自学软件的工程师</li><li>培训班的学生</li><li>“早熟的”高中生</li><li>想要变得牛逼的大学生</li><li>想要进阶的初级工程师</li></ul><h3 id="一定要严格遵守推荐的学习次序吗" tabindex="-1"><a class="header-anchor" href="#一定要严格遵守推荐的学习次序吗" aria-hidden="true">#</a> <a href="#%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%A5%E6%A0%BC%E9%81%B5%E5%AE%88%E6%8E%A8%E8%8D%90%E7%9A%84%E5%AD%A6%E4%B9%A0%E6%AC%A1%E5%BA%8F%E5%90%97"></a>一定要严格遵守推荐的学习次序吗？</h3><p>我推荐的次序主要是为了帮助你起步，如果你出于某种强烈的意愿而倾向以不同的顺序学习，也没有关系，勇敢开始吧！</p><p>一个重要的“先决条件”是：</p><ul><li>你最好先从一门编程语言开始，然后不断纵向和横向扩展；</li><li>你最好先学计算机组成原理再学操作系统；</li><li>你最好先学计算机网络和操作系统再学分布式系统；</li></ul><h3 id="xx编程语言怎么样" tabindex="-1"><a class="header-anchor" href="#xx编程语言怎么样" aria-hidden="true">#</a> <a href="#xx%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E6%80%8E%E4%B9%88%E6%A0%B7"></a>XX编程语言怎么样?</h3><p>学习一门特定的编程语言和学习计算机科学的一个领域完全不在一个维度——相比之下，学习编程语言更容易一些；如果你已经熟悉一门编程语言，比如说 Java 或者 C 语言，再学习另外一门编程语言也会非常轻松。</p><h3 id="xx流行技术怎么样" tabindex="-1"><a class="header-anchor" href="#xx流行技术怎么样" aria-hidden="true">#</a> <a href="#xx%E6%B5%81%E8%A1%8C%E6%8A%80%E6%9C%AF%E6%80%8E%E4%B9%88%E6%A0%B7"></a>XX流行技术怎么样?</h3><p>没有任何一种技术的重要程度可以和学习计算机科学的核心部分相媲美，不过，你对学习一门流行的技术充满热情是一件很值得褒奖的事情。</p><h3 id="这份指南是谁写的" tabindex="-1"><a class="header-anchor" href="#这份指南是谁写的" aria-hidden="true">#</a> <a href="#%E8%BF%99%E4%BB%BD%E6%8C%87%E5%8D%97%E6%98%AF%E8%B0%81%E5%86%99%E7%9A%84"></a>这份指南是谁写的？</h3><p>主笔为<strong>沉默王二</strong>，可以微信搜索“沉默王二”关注我的微信公众号。只要有足够的时间和动力，我非常有信心，你可以自学完以上所有课程。</p><p><strong>所涉及到的电子书，可以通过下面这个仓库下载</strong>：</p>',14),Na={href:"https://github.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},Ka={href:"https://gitee.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"};function Za($a,et){const t=i("ExternalLinkIcon");return l(),s("div",null,[c,e("p",null,[a("可以直接看二哥的 "),e("a",d,[a("二哥的Java进阶之路"),r(t)]),a("，这是一份通俗易懂、风趣幽默的Java学习指南，内容涵盖Java基础、Java并发编程、Java虚拟机、Java企业级开发、Java面试等核心知识点。学Java，就认准二哥的Java进阶之路😄")]),p,b,e("p",null,[a("尽管《"),e("a",u,[a("Java核心技术卷一"),r(t)]),a("》号称是一本非常适合拿来作为学习 Java 的入门书。")]),_,e("p",null,[e("a",f,[a("一套是动力节点的，B 站上有超过一千万的播放量"),r(t)])]),g,e("p",null,[e("a",m,[a("一套是尚硅谷的，宋红康老师讲解的"),r(t)])]),v,k,E,e("p",null,[a("可以看一下这份《"),e("a",x,[a("深入浅出 Java 多线程"),r(t)]),a("》，几位在大厂工作过的技术大佬开源的，为了写好这份小册子，他们阅读了大量的 Java 并发编程方面的书籍和技术博客，加上他们在工作中积累的一线开发经验，汇聚而成。")]),j,e("p",null,[a("周志明老师的《"),e("a",B,[a("深入理解 Java 虚拟机"),r(t)]),a("》绝对是学习 Java 虚拟机的首选。自 2011 年上市以来，前两版累计销量超过 30 万册，第 3 版在第 2 版的基础上做了重大修订，内容更丰富、实战性更强。")]),y,e("ul",null,[e("li",null,[e("a",S,[a("江南一点雨的 SSM 实战 100 集"),r(t)])]),e("li",null,[e("a",C,[a("狂神说的 SpringBoot 视频课"),r(t)])])]),A,J,L,e("ul",null,[e("li",null,[a("《"),e("a",w,[a("Head First Java"),r(t)]),a("》")]),e("li",null,[a("《"),e("a",M,[a("Java 编程思想"),r(t)]),a("》")]),e("li",null,[a("《"),e("a",z,[a("Java 并发编程实战"),r(t)]),a("》")]),e("li",null,[a("《"),e("a",Q,[a("Effective Java"),r(t)]),a("》")]),e("li",null,[a("《"),e("a",V,[a("阿里巴巴 Java 开发手册"),r(t)]),a("》")]),e("li",null,[a("《"),e("a",Y,[a("代码整洁之道"),r(t)]),a("》")])]),D,e("ul",null,[e("li",null,[e("a",F,[a("尚硅谷的 Intellij IDEA 视频课"),r(t)])]),e("li",null,[e("a",P,[a("尚硅谷的 Maven 视频课"),r(t)])]),e("li",null,[e("a",U,[a("狂神说的 Git 视频课"),r(t)])]),e("li",null,[e("a",q,[a("尚硅谷的 JVM 视频课"),r(t)])])]),W,e("ul",null,[e("li",null,[e("a",T,[a("MyBatis 官方文档"),r(t)])]),e("li",null,[e("a",G,[a("Intellij IDEA 中文教程"),r(t)])])]),I,e("ul",null,[e("li",null,[e("a",R,[a("Java并发编程实战"),r(t)])]),e("li",null,[e("a",H,[a("深入拆解Java虚拟机"),r(t)])]),e("li",null,[e("a",O,[a("Netty 入门与实战：仿写微信 IM 即时通讯系统"),r(t)])])]),X,N,K,e("p",null,[a("给你推荐一门课，浙江大学翁恺教授的《"),e("a",Z,[a("程序设计入门——C语言"),r(t)]),a("》，国家级精品课，很适合初学者。")]),$,ee,ae,e("p",null,[a("再推荐一本书，《"),e("a",te,[a("C 程序设计语言"),r(t)]),a("》，我们熟知的“hello World”入门小程序其实就是由这本书首次引入的。对于学习计算机专业的同学来说，《C 程序设计语言》是一本必读的经典书。")]),re,e("p",null,[a("《"),e("a",ne,[a("SQL 必知必会"),r(t)]),a("》是麻省理工学院、伊利诺伊大学等众多大学的参考教材，这本书直接从 SQL 的 SELECT 开始，讲述了实际工作环境中最常用和最必需的 SQL 知识，实用性极强。")]),oe,ie,e("p",null,[e("a",le,[a("「中字」SQL进阶教程 | 史上最易懂SQL教程！10小时零基础成长SQL大师！！"),r(t)])]),se,he,e("p",null,[a("《"),e("a",ce,[a("高性能 MySQL"),r(t)]),a("》，业界公认的一本经典的 MySQL 读物，书中没有各种提升性能的秘籍，而是深入问题的核心，详细的解释了每种提升性能的原理，从而可以使你四两拨千斤。")]),de,e("p",null,[a("尚硅谷的这个视频课讲得真的挺不错的，"),e("a",pe,[a("MySQL_基础+高级篇"),r(t)]),a("。")]),be,ue,e("p",null,[a("《"),e("a",_e,[a("Redis 深入历险核心原理与应用实战"),r(t)]),a("》分为基础和应用篇、原理篇、集群篇、拓展篇、源码篇共 5 大块内容。基础和应用篇讲解对读者来说最有价值的内容，可以直接应用到实际工作中；原理篇、集群篇让开发者透过简单的技术表面看到精致的底层世界；拓展篇帮助读者拓展技术视野和夯实基础，便于进阶学习；源码篇让高阶的读者能够读懂源码，掌握核心技术实力。")]),fe,e("ul",null,[e("li",null,[e("a",ge,[a("MySQL Tutorial"),r(t)])])]),me,e("ul",null,[e("li",null,[e("a",ve,[a("MySQL必知必会"),r(t)])]),e("li",null,[e("a",ke,[a("MySQL技术内幕-InnoDB存储引擎"),r(t)])])]),Ee,e("ul",null,[e("li",null,[e("a",xe,[a("SQL必知必会-从入门到数据实战"),r(t)])]),e("li",null,[e("a",je,[a("MySQL必知必会-在真实项目中玩转 MySQL"),r(t)])]),e("li",null,[e("a",Be,[a("MySQL实战45讲-从原理到实战，丁奇带你搞懂MySQL"),r(t)])]),e("li",null,[e("a",ye,[a("Redis核心技术与实战-从原理到实战，彻底吃透 Redis"),r(t)])])]),Se,Ce,Ae,e("p",null,[a("虽然名为《"),e("a",Je,[a("算法"),r(t)]),a("》，但算法是基于数据结构的，数组、队列、栈、堆、二叉树、哈希表等等，这些数据结构这本书都讲到了。")]),Le,e("p",null,[a("如果你更喜欢视频课程，我推荐"),e("a",we,[a("浙江大学的一个的视频课"),r(t)]),a("，很系统很经典，适合小白入门。")]),Me,ze,e("p",null,[a("我整理的这份 "),e("a",Qe,[a("LeetCode 刷题笔记"),r(t)]),a("足足 300 道，对算法薄弱和需要提高算法的同学很有帮助。")]),Ve,Ye,De,Fe,Pe,e("ul",null,[e("li",null,[e("a",Ue,[a("算法设计手册"),r(t)])]),e("li",null,[e("a",qe,[a("编程珠玑"),r(t)])]),e("li",null,[e("a",We,[a("剑指Offer：名企面试官精讲典型编程题"),r(t)])])]),Te,e("ul",null,[e("li",null,[e("a",Ge,[a("数据结构与算法之美-为工程师量身打造的数据结构与算法私教课"),r(t)])])]),Ie,Re,He,e("p",null,[a("《"),e("a",Oe,[a("深入理解计算机系统"),r(t)]),a("》这本书站在程序员的视角，非常的使用。虽然计算机的系统结构比这本书涉及到的内容多得多，但却是一个很好的起点。")]),Xe,e("ul",null,[e("li",null,[e("a",Ne,[a("计算机系统要素-从零开始构建现代计算机"),r(t)])]),e("li",null,[e("a",Ke,[a("计算机是怎样跑起来的"),r(t)])]),e("li",null,[e("a",Ze,[a("计算机组成原理"),r(t)])]),e("li",null,[e("a",$e,[a("计算机组成与设计-硬件/软件接口"),r(t)])]),e("li",null,[e("a",ea,[a("《编码-印尼在计算机软硬件背后的语言》"),r(t)])])]),aa,ta,ra,e("p",null,[e("a",na,[a("哈尔滨工业大学-计算机组成原理（唐朔飞）"),r(t)])]),oa,ia,e("p",null,[e("a",la,[a("深入浅出计算机组成原理-带你掌握计算机体系全貌"),r(t)])]),sa,ha,ca,e("p",null,[a("《"),e("a",da,[a("操作系统概念"),r(t)]),a("》 （“龙书”）和 《"),e("a",pa,[a("现代操作系统"),r(t)]),a("》 是操作系统领域的经典书籍。只不过，这两本书对学生来说，不是特别友好，所以遭到了很多批评。")]),e("p",null,[a("操作系统是计算机系统中负责管理各种软硬件资源的核心系统软件，为应用软件运行提供良好的环境。"),e("a",ba,[a("清华大学操作系统课-学堂在线"),r(t)]),a("这门课程以主流操作系统为实例，以教学操作系统 ucore 为实验环境，讲授操作系统的概念、基本原理和实现技术，是一门非常值得推荐的视频课。")]),ua,e("p",null,[a("副本-"),e("a",_a,[a("计算机科学速成课"),r(t)]),a("：")]),fa,ga,ma,e("ul",null,[e("li",null,[e("a",va,[a("操作系统实战45讲-从0到1，实现自己的操作系统"),r(t)])]),e("li",null,[e("a",ka,[a("趣谈Linux操作系统-像故事一样的操作系统入门课"),r(t)])])]),Ea,xa,ja,e("p",null,[e("a",Ba,[a("计算机网络-自顶向下方法"),r(t)]),a("是一本我比较钟爱的书籍，书中的小项目和习题非常值得练习，尤其是 "),e("a",ya,[a("Wireshark labs"),r(t)]),a(" 部分。")]),Sa,e("p",null,[a("B 站上的这个"),e("a",Ca,[a("计算机网络微课堂"),r(t)]),a("视频课非常不错，强烈推荐。")]),Aa,e("ul",null,[e("li",null,[e("a",Ja,[a("网络是怎样连接的"),r(t)])]),e("li",null,[e("a",La,[a("图解 HTTP"),r(t)])]),e("li",null,[e("a",wa,[a("图解TCP/IP"),r(t)])]),e("li",null,[e("a",Ma,[a("TCP/IP详解 卷1：协议"),r(t)])])]),za,e("p",null,[a("前新东方英语老师李笑来在 GitHub 上开源的这份英语学习教程还不错，英文名字叫《"),e("a",Qa,[a("everyone can use english"),r(t)]),a("》，中文名译作《"),e("a",Va,[a("人人都能用英语"),r(t)]),a("》，已有 5.4k 的 star。")]),Ya,e("p",null,[e("a",Da,[a("入职阿里后，才知道原来简历这么写"),r(t)])]),Fa,Pa,Ua,e("p",null,[e("a",qa,[a("可能是2021年最全最硬核的Java面试 “备战” 资料"),r(t)])]),Wa,e("p",null,[e("a",Ta,[a("不好意思！GitHub 星标 100k+的这份面试攻略让我膨胀了"),r(t)])]),Ga,Ia,Ra,e("ul",null,[e("li",null,[a("GitHub："),e("a",Ha,[a("https://github.com/itwanger/JavaBooks"),r(t)])]),e("li",null,[a("码云："),e("a",Oa,[a("https://gitee.com/itwanger/JavaBooks"),r(t)])])]),Xa,e("ul",null,[e("li",null,[a("GitHub："),e("a",Na,[a("https://github.com/itwanger/JavaBooks"),r(t)])]),e("li",null,[a("码云："),e("a",Ka,[a("https://gitee.com/itwanger/JavaBooks"),r(t)])])])])}const rt=o(h,[["render",Za],["__file","LearnCS-ByYourself.html.vue"]]);export{rt as default};
